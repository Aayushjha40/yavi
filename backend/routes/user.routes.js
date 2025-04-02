const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const { upload, uploadFile } = require('../controllers/upload.controller');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middlewares');

router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('name').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long '),
  body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], userController.registerUser);

router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password is Invalid')
], userController.loginUser);

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

router.post('/logout', authMiddleware.authUser, userController.logoutUser);

// Upload route
router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;