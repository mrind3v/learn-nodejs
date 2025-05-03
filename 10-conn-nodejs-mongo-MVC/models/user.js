const mongoose = require("mongoose") 

// schema and model creation
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
// name of the model "user" would turn into "users" in mongodb.
// users would be a collection in mongodb (a table or array of objs)
const User = mongoose.model("user", userSchema);

module.exports = User