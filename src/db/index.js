import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`).then(() => {
      console.log("MongoDB connected....");
    });
  } catch (error) {
    console.error("MongoDB Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
