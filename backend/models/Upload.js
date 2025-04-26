const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true }, // Cloudinary URL
  category: { type: String, default: 'Uncategorized' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // Reference to User model
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Upload', uploadSchema);