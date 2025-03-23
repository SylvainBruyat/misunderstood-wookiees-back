import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@tw-counters.yhoai.mongodb.net/?retryWrites=true&w=majority&appName=TW-counters`
    );
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
};

export default connectDB;
