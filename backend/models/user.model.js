const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  number: {
    type: String
  },
  address: {
    type: String
  },
  DOB: {
    type: Date
  },
  nationality: {
    type: String
  },
  coin: {
    type: Number,
    default: 0,
  },
  upload_image: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Upload"
      },

}, { timestamps: true });

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};

// Instance method to compare passwords
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Static method to hash passwords
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;