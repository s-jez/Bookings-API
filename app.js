const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h3>Hello World!</h3>");
});

app.get("/book", (req, res) => {
  res.status(200).send("Got a GET bookings.");
});

app.post("/book", (req, res) => {
  res.status(200).send("Got a POST bookings.");
});

app.get("/book/:id", (req, res) => {
  res.status(200).send(`Got a GET ID ${req.params.id} booking.`);
});

app.put("/book/:id", (req, res) => {
  res.status(200).send(`Got a PUT ID ${req.params.id} booking.`);
});

app.delete("/book/:id", (req, res) => {
  res.status(200).send(`Got a DELETE ID ${req.params.id} booking.`);
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
