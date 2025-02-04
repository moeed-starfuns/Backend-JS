This is a readme File

1. use module type for using external libraries > add in package.json 'type'=''module
   above scripts

2. nodemon > Dev dependency(uses only in development) > it will restart your app
   when file is changed
   command > npm i -D nodemon
   add in dev script package.json

3. used for avoiding conflicts in github, formatting of code
   add prettier (dev library)
   command > npm i -D prettier

4. Database used mongoDB Atlas web based

   > Username : f2020105058
   > password : OVdQIWpNz9BO6qne
   > Use mongoCompas > copy url > remove last '/' from url

5. Install express,mongoose, dotenv (for loading variables from environment variable)
6. Always use Async, await and try catch for database because it will handle
   issues if response is slow or DB is in another continent

7. CORS: Cross Origin Resource Sharing > This is used to control access to the
   server
   npm i CORS

8. cookie-parser > Used to access browser cookies of user from server and to 
   set them (perform crud operations on them)

9. Middlewares > check if user is valid to access the requested page
   for example > if i request a FB page/resource and i am required to be logged in to FB to access that resource, this checking whether i am logged in or not is performed by middleware

10. Higher Order function > Function that accept another function as parameter 
    or pass a function in return

11. app.use of express is mostly used for middleware

12. Allow you to write aggregation queries
    npm i mongoose-aggregate-paginate-v2

13. bcrypt > Store data like passwords in encrypted form
    npm i bcrypt

14. jsonwebtoken > used for generating tokens
    npm i jsonwebtoken

both 13,14 are used in user.model.js file

15. cloudinary and multer > Used for uploading files 
    npm i cloudinary multer