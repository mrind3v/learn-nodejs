const express = require("express");
const {connMongoDb} = require("./connections.js")
const userRouter = require("./routes/user.js")
const PORT = 8000;

const app = express();

// mongodb connection 
connMongoDb("mongodb://127.0.0.1:27017/conn-nodejs-mongo")

// schema and model creation done in models folder

// middleware in middlewares folder
app.use(express.urlencoded({ extended: false }));   

// routes are defined in the routes folder
app.use("/", userRouter)

// create server and listen on PORT
app.listen(PORT, () => {
  console.log("Server running on PORT ", PORT);
});
