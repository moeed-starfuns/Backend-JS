import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// express.static > for storing public assets
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //Accepts json data, usually in form filling
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //receives data from URL
//extended > you can send objects within objects

app.use(express.static("public"));
//express.static used to store public assets, for example i receive a pdf and i want to
//  store it

app.use(cookieParser());

//Routes import
import userRouter from './routes/user.routes.js';

//http://localhost:8000/api/v1/users/register
app.use('/api/v1/users',userRouter)


export default app;
