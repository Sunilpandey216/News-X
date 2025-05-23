import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB at:", process.env.MONGO_URI); // Debugging

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MONGODB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
