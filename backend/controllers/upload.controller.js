const multer = require('multer');
const cloudinary = require('../config/cloudinary.config');
const Upload = require('../models/Upload'); // Import the Upload model

const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      console.error('No file uploaded'); // Debugging log
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Check file type (image or video)
    const fileType = file.mimetype.startsWith('image') ? 'image' : 'video';

    // Upload file to Cloudinary
    cloudinary.uploader.upload_stream(
      {
        folder: 'eco_friendly_zone',
        resource_type: fileType,
      },
      async (error, result) => {
        if (error) {
          console.error('Cloudinary Error:', error); // Debugging log
          return res.status(500).json({ message: 'Cloudinary upload failed', error });
        }

        // Save file details to MongoDB
        const newUpload = new Upload({
          fileName: file.originalname,
          fileUrl: result.secure_url, // Store the Cloudinary URL
          category: req.body.category || 'Uncategorized', // Optional category
          user: req.user._id, // Associate the upload with the authenticated user
        });

        await newUpload.save();

        res.status(201).json({ message: 'File uploaded successfully', upload: newUpload });
      }
    ).end(file.buffer);
  } catch (error) {
    console.error('Error in uploadFile function:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


const getUploadsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find all uploads associated with the userId
    const uploads = await Upload.find({ user: userId }).populate('user', 'name email'); // Populate user details
    if (!uploads || uploads.length === 0) {
      return res.status(404).json({ message: 'No uploads found for this user' });
    }

    res.status(200).json(uploads);
  } catch (error) {
    console.error('Error fetching uploads:', error.message);
    res.status(500).json({ message: 'Failed to fetch uploads', error: error.message });
  }
};

module.exports = { uploadFile, getUploadsByUserId };