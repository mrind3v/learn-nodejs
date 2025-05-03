const serverModule = require("http");
const fs = require("fs");
const PORT = 8000;
// we need an external module called url to capture information like query params
// from the url
const url = require("url");

function reqHandler(req, res) {
  // url package is able to interpret the url
  const myUrl = url.parse(req.url, true); // true -> means parse query params as well!
  fs.appendFile(
    "logs.txt",
    `Request received: ${myUrl.path} on ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })}\n`,
    (err, data) => {
      // we'll send response after logging to log.txt
      switch (myUrl.pathname) {
        case "/":
          if (req.method === "GET") res.end("Home Page");
          break;
        case "/about":
          if (req.method === "GET") res.end(`Hello ${myUrl.query.name}`);
          break;
        case "/contact-us":
          if (req.method === "GET") res.end(`Contact ${myUrl.query.name}`);
          break;
        case "/sign-up":
          if (req.method === "GET") res.end("A signup form");
          if (req.method === "POST") res.end("Form submitted!");
          break;
      }
    }
  );
}

const server = serverModule.createServer(reqHandler);

server.listen(PORT, () => {
  console.log(`Server Started at Port: ${PORT}`);
});
