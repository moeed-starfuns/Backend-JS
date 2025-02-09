//This file is for db connection

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n Connection successfull !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Database connection error ", error);
  }
};


export default connectDB;