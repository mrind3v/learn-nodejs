const User = require("../models/user.js");

// controllers modify the model (User here)

const allUsersToClient = async (req, res) => {
  const allUsers = await User.find();
  const html = `
        <ul>
            ${allUsers
              .map(
                (user) =>
                  `
                <li>
                ${user.firstName} with ${user.email}
                </li>
                `
              )
              .join("")}
        </ul>`;

  return res.status(200).send(html);
};

const allUsersToDev = async (req, res) => {
  const allUsers = await User.find();
  if (!allUsers) return res.status(404).json({ message: "No User Found!" });
  return res.json(allUsers);
};

const createUser = async (req, res) => {
  try {
    const body = req.body;
    if (!body.firstName || !body.lastName || !body.email) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    });

    console.log("User created:", result);
    return res.status(201).json({ message: "user created" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

const getUser = async (req, res) => {
  const userById = await User.findById(req.params.id);
  if (!userById) return res.status(404).json({ message: "User Not Found!" });
  return res.json(userById);
};

const editUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastName: "CHANGED" });
  return res.status(200).json({ message: "Successfully Changed Last Name" });
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({ message: "User Deleted Successfully" });
};

module.exports = {
    allUsersToClient,
    allUsersToDev,
    createUser,
    getUser,
    editUser,
    deleteUser,
}
