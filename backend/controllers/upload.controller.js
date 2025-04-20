const multer = require('multer');
const cloudinary = require('../config/cloudinary.config');
const Upload = require('../models/Upload'); // Import the Upload model

const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Check file type (image or video)
    const fileType = file.mimetype.startsWith('image') ? 'image' : 'video';

    // Upload file to Cloudinary
    cloudinary.uploader.upload_stream(
      {
        folder: 'eco_friendly_zone',
        resource_type: fileType, // Automatically detect resource type
      },
      async (error, result) => {
        if (error) {
          console.error('Cloudinary Error:', error);
          return res.status(500).json({ message: 'Cloudinary upload failed', error });
        }

        // Save file details to MongoDB
        const newUpload = new Upload({
          fileName: file.originalname,
          fileUrl: result.secure_url, // Store the Cloudinary URL
          category: req.body.category || 'Uncategorized', // Optional category
        });

        await newUpload.save();

        res.status(201).json({ message: 'File uploaded successfully', url: result.secure_url });
      }
    ).end(file.buffer);
  } catch (error) {
    console.error('Error uploading file:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { uploadFile };