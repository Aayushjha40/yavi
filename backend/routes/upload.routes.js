const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadFile } = require('../controllers/upload.controller');
const Upload = require('../models/Upload');

// Configure Multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage for Cloudinary
const upload = multer({ storage });

// Upload Route (Accepts Images & Videos)
router.post('/upload', upload.single('file'), uploadFile); // Correct usage of multer middleware

// Fetch Images Route
router.get('/upload', async (req, res) => {
  try {
    const images = await Upload.find(); // Ensure Image model is imported and defined
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error.message);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

module.exports = router;