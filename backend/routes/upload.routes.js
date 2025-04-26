const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadFile, getUploadsByUserId, getAllUploads } = require('../controllers/upload.controller');
const { authUser } = require('../middlewares/auth.middlewares'); // Import the auth middleware
const Upload = require('../models/Upload');

// Configure Multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage for Cloudinary
const upload = multer({ storage });

// Upload Route (Accepts Images & Videos)
router.post('/upload', authUser, upload.single('file'), async (req, res) => {
  try {
    console.log('File received:', req.file); // Debugging log
    console.log('Request body:', req.body); // Debugging log

    await uploadFile(req, res); // Call the uploadFile function
  } catch (error) {
    console.error('Error in /upload route:', error.message);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Fetch all uploads
router.get('/upload', async (req, res) => {
  try {
    console.log('Fetching all images from the database'); // Debugging log
    const images = await Upload.find(); // Ensure the Upload model is imported and defined
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error.message);
    res.status(500).json({ error: 'Failed to fetch images', details: error.message });
  }
});

router.get('/uploads/:userId', authUser, getUploadsByUserId); 

// Add a route to fetch all uploads
router.get('/uploads', getAllUploads);

module.exports = router;