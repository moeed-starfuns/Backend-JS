import dotenv from 'dotenv';
import connectDB from './db/index.js'
//  Require(dotenv) will not work because its supported in common type and we are in module type
dotenv.config({
    path:'./env'
})
//Then add a line in dev scripts of package.json 
// -r dotenv/config --experimental-json-modules

//2ND Approach create a funnction outside establish a connection and then call function in index.js file 
//This approach is better

connectDB();


// FIRST APPROACH
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from 'express';
// const app = express();

// //IIFE (spoken as efi) this will execute the function immediately after it is defined
// (async () => {
//   try {
//     //MONGODB_URI is extracted from env and DB_NAME from constants
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     //listeners
//     //DB is connected but express app is unable to communicate
//     //then on listener is used to show the error, throw the error
//     app.on('error',(error)=>{
//         console.log('Error ', error)
//         throw error
//     })

//     //listening App
//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on PORT ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.log("Error ", error);
//     throw error
//   }
// })();
