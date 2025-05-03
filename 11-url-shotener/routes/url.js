const express = require("express") 
const {handleCreateShortUrl, handleClicks} = require("../controllers/url")

const router = express.Router() 

router.post("/", handleCreateShortUrl)
router.get("/analytics/:shortId", handleClicks)

module.exports = router