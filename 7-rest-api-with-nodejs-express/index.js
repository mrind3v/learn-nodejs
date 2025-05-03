/*
A REST API (Representational State Transfer Application Programming Interface)
is an architectural style for designing web apps that enable communication between
different software systems (say -> server and client browser) via the HTTP protocol.
*/

// imports and global vars
const express = require("express");
const fs = require("fs")
const users = require("../MOCK_DATA.json");
const PORT = 8000;

const app = express();

// middleware -> to put urlencoded type of form data inside req.body
app.use(express.urlencoded({extended: false}))

// routes
app.get("/", (req, res) => {
  return res.end("Welcome to the USER-DATA server!");
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `<ul>
        ${users
          .map(
            (user) => `
          <li>
          ${user.first_name}
          <br>
          ${user.gender}
          <br>
          ${user.email}
          <br>
          ${user.job_title}
          <br><br>
          </li>`
          )
          .join("")}
    </ul>`;

  return res.send(html);
});

// merged routes, so that we can attach many HTTP methods in one route only!
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id); // req.params captures the dynamic route (default: string)
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {})
  .delete((req, res) => {});

app.post("/api/users",(req, res) => {
    const body = req.body // anything sent by the user is stored in req.body
    users.push({id: users.length+1, ...body}) 
    // users array is only in memory in runtime, we need to permanently write to disk
    // also users is an array of objs, but fs.writeFile expects a string to be written
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data)=>{
        return res.json({status: "Success"})
    })

  })

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id); // req.params captures the dynamic route (default: string)
  const user = users.find((user) => user.id === id);
  const html = `
    
    <ul>
        <li>
        ${user.id} <br>
        ${user.first_name} <br>
        ${user.last_name} <br>
        ${user.gender} <br>
        ${user.email} <br>
        ${user.job_title} <br><br>
        </li>
    </ul>

    `;
  return res.send(html);
});

app.get("/");

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
