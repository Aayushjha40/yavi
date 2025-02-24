
const connectDB = require("./config/db");
const dotenv = require('dotenv');
dotenv.config();
const express = require ('express');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(cors());

connectDB();

app.get('/',(req, res)=>{
  res.send("hello World");
});

app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
