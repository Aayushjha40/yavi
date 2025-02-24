const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');
const blackListTokenModel = require('../models/blacklistToken.model');

const { User } = require('../models/user.model');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await User.hashPassword(password);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = user.generateAuthToken();
    res.json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logoutUser = (req, res) => {
    // Clear the token from the client-side (e.g., by clearing cookies or local storage)
    res.status(200).json({ message: 'User logged out successfully' });
  };
  

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    try {
        await blackListTokenModel.create({ token });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: 'Token already blacklisted' });
        }
        return next(err);
    }

    res.status(200).json({ message: 'Logged out' });
}