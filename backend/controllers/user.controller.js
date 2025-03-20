const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Full name with first name and last name is required' });
  }

  const isUserAlready = await UserModel.findOne({ email });

  if (isUserAlready) {
    return res.status(400).json({ message: 'Email already in use' });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword
  });

  const token = user.generateAuthToken();

  res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password ' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password ' });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  try {
    if (token) {
      await blackListTokenModel.create({ token }); // Blacklist the token
    }

    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensures it works in production
      sameSite: 'None',
    });

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Token already blacklisted' });
    }
    return next(err);
  }
};
