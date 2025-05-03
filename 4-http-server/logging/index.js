const myServer = require("http");
const fs = require("fs");

const server = myServer.createServer((req, res) => {
  // whenever there is a req, we'll write the url info in a file
  const log = `req received on ${req.url} at ${new Date().toLocaleString(
    "en-IN",
    { timeZone: "Asia/Kolkata" }
  )}\n`;
  fs.appendFile("logs.txt", log, () => {
    // next we'll display some response acc to url "after" logging
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("About Page");
        break;
      case "/contact":
        res.end("Contact Page");
        break;
      default:
        res.end("404 not found");
    }
  });
});

server.listen(8000, () => {
  console.log("Server started!");
});
