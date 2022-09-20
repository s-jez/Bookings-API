const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h3>Hello World!</h3>");
});

app.get("/books", (req, res) => {
  res.status(200).send("Got a GET Bookings []");
});

app.post("/book", (req, res) => {});

app.get("/book/{id}", (req, res) => {});

app.put("/book/{id}", (req, res) => {});

app.delete("/book/{id}", (req, res) => {});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
