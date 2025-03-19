const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes'); 
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());

// ✅ Fix CORS by allowing requests from frontend without trailing slash
const corsOptions = {
  origin: "http://localhost:5173", // No trailing slash
  credentials: true, // Allow cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Handle preflight requests properly
app.options('*', cors(corsOptions));

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
