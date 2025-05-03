const express = require("express") 

const app = express()

// app.use() fn is the middleware fn that we attach in our req-res cycle
// middleware has access to req body, res body and a next() fn to call the
// next middleware function. By default, if a have a middleware fn defined after this
// one, it'll call that or else it'll hold the traffic to itself unless we return some res
// or end the res or call next() --> next() can be nxt middleware or routes
app.use((req,res,next)=>{
    console.log("Hello from middleware 1") 
    next()
})

app.use((req,res,next)=>{
    console.log("Hello from middleware 2")
    // middleware 2 is returning res to client without letting it access the routes!
    return res.json({status: "Won't let you access routes!"})
})

// routes
app.get("/", (req,res)=>{
    return res.send("Welcome Home")
})

app.listen(8000, ()=>{console.log("Server Started!")})