const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    res.status(200).json({ message: 'Login successful.', token, user });
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};


module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  try {
    if (token) {
      console.log('Checking if token is blacklisted...');
      const isBlacklisted = await blackListTokenModel.findOne({ token });
      if (!isBlacklisted) {
        console.log('Token is not blacklisted. Adding to blacklist...');
        await blackListTokenModel.create({ token });
        console.log('Token blacklisted successfully');
      } else {
        console.log('Token is already blacklisted');
      }
    } else {
      console.log('No token provided');
    }

    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error('Error during logout:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};