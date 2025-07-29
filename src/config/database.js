require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MONGODB URI
    const mongoURI = process.env.MONGODB_URI;
    
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected Successfully');
    
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;