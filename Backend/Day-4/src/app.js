// use to create server and config the server
const express = require("express");

const app = express();
app.use(express.json());

let notes = [];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  console.log(notes);
  res.send("note created");
});

module.exports = app;
