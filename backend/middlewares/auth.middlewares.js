const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const blackListTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication required. Token not provided." });
  }

  try {
    // Check if the token is blacklisted
    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Token is invalid or expired." });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(decoded._id); // Attach the user object to req.user
    if (!req.user) {
      return res.status(401).json({ message: "User not found." });
    }

    next();
  } catch (err) {
    console.error("Error in authUser middleware:", err.message);
    return res.status(401).json({ message: "Invalid or expired token.", error: err.message });
  }
};