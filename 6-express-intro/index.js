const express = require("express");
const httpModule = require("http");

// app is basically reqHandler fn in http.createServer(reqHandler)
const app = express();

app.get("/", (req, res) => {
  return res.send("Home Page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

// we can also remove below lines and just do app.listen; express will automatically
// express wraps on top of http as it's just a framework!

// import http module, do httpModule.createServer(app)
// const myServer = httpModule.createServer(app) // app is reqHandler

// myServer.listen(8000, () => {
//   console.log("Server started!");
// });

app.listen(8000, ()=>{console.log("Server Started on PORT 8000")})