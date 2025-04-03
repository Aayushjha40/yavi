const multer = require('multer');
const cloudinary = require('../config/cloudinary.config');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer Storage - Saves files temporarily before uploading to Cloudinary
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'eco_friendly_zone'
    });

    // Delete temp file after upload
    fs.unlinkSync(req.file.path);

    res.status(200).json({ message: 'File uploaded successfully', url: result.secure_url });

  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { upload, uploadFile };
