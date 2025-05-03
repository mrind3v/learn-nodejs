const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const {
  allUsersToClient,
  allUsersToDev,
  createUser,
  getUser,
  editUser,
  deleteUser,
} = require("../controllers/user.js");

// since we're creating a separate folder for routes, from now, we shall use
// router.get, router.post, etc instead of app.get and app.post

// routes
router.get("/", (req, res) => {
  res.status(200).end("Welcome to the USER_DATA server");
});

router.get("/users", allUsersToClient);

router.get("/api/users", allUsersToDev);

router.post("/api/users", createUser);

router.route("/api/users/:id").get(getUser).patch(editUser).delete(deleteUser);

module.exports = router;
