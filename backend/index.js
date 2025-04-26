const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/db');
const userRoutes = require('./routes/user.routes'); // Import user routes
const uploadRoutes = require('./routes/upload.routes'); // Import upload routes

const app = express();

// Connect to the database
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Routes
app.use('/api', uploadRoutes); // Register upload routes under /api/uploads
app.use('/api/users', userRoutes); // Register user routes under /api/users

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
