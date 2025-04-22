const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller');
const { authUser } = require('../middlewares/auth.middlewares'); // Import authUser middleware

// Register a new user
router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('name').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], userController.registerUser);

// Login a user
router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password is Invalid')
], userController.loginUser);

// Get user profile
router.get('/profile', authUser, userController.getUserProfile);

// Logout a user
router.post('/logout', authUser, userController.logoutUser);

// Get the coin value for the authenticated user
router.get('/coin', authUser, userController.getCoin);

// Update the coin value for the authenticated user
router.post('/coin', authUser, userController.updateCoin);

module.exports = router;