import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import connectDB from './config/db';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT);
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
};

startServer();
