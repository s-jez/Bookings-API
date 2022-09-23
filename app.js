const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const { dbConnection, getGuests } = require("./db");
const { response } = require("express");
const port = process.env.PORT || 3000;

// We will keep bookings objects in array
const bookings = [];
let guestsData = [];

// Connect to DB
dbConnection;

app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/bookings.html"));
});

app.get("/bookings", (req, res) => {
  res.sendFile(path.join(__dirname, "public/bookings-list.html"));
});
app.get("/guests", (req, res) => {
  getGuests().then((data) => {
    res.json(data.rows);
  });
});

app.post("/book", (req, res) => {
  const booking = req.body;
  bookings.push(booking);
  res.status(200);
  res.redirect("/bookings");
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
