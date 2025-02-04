import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
//  Require(dotenv) will not work because its supported in common type and we are in module type
dotenv.config({
  path: "./env",
});

//Then add a line in dev scripts of package.json
// -r dotenv/config --experimental-json-modules

//2ND Approach create a funnction outside establish a connection and then call function in index.js file
//This approach is better

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection with DB is Failed", error);
  });

