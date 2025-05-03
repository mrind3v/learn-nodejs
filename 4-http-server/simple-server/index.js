// entry pt of file should be named as index.js in production
const myServer = require("http") //myServer is the module

// createServer is the fn used to create an http server. It takes a callback fn which is
// a listener fn that processes http requests
const server = myServer.createServer((req,res)=>{ // server is the instance of http module
    console.log("req received")
    res.end('hello from server') // res is what sent to back to the client. Here we are
    // passing a string value back to the client 
})

server.listen(8000, ()=>{
    console.log("Server started!")
})