const mongoose = require("mongoose");

async function connMongoDb(url) {
  return mongoose.connect(url);
}

module.exports = {
  connMongoDb, 
};
