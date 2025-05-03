const express = require("express");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const { connectToMongoDb } = require("./connect");
const PORT = 8001;

const app = express();

// connect to mongoDb
connectToMongoDb("mongodb://127.0.0.1:27017/url-shortener").then(
  console.log("MongoDb connected")
);

// middlewares
app.use(express.json());

// routes
app.use("/url", urlRoute);
app.use("/:shortId", async (req,res)=>{
    const shortId = req.params.shortId
    const result = await URL.findOneAndUpdate(
        { shortId }, // find db entry corresponding to the shortId
        { 
            $push: { // push an object in the visitHistory array
                visitHistory: { // then update the visitHistory
                    timestamp: Date.now()
                }
            }
        }
    );

    console.log(result) // result is a db entry

    res.redirect(result.redirectUrl);
});

app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
