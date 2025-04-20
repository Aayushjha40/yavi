const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true }, // Cloudinary URL
  category: { type: String, default: 'Uncategorized' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Upload', imageSchema);