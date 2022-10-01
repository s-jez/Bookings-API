const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const {
  dbConnection,
  getGuests,
  insertGuests,
  updateGuest,
  deleteGuest,
  getGuestById,
} = require("./db");
const port = process.env.PORT || 3000;

// Connect to DB
dbConnection;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
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
  const booking = {
    name: req.body.guest,
    amount: req.body.guestNum,
    message: req.body.message,
    nights: req.body.nights,
    arrival_date: req.body.arrivalDate,
    price: req.body.price,
  };
  if (
    booking.name === "" ||
    booking.amount === "" ||
    booking.message === "" ||
    booking.nights === "" ||
    booking.arrival_date === "" ||
    booking.price === ""
  ) {
    res.json("Please fill your empty form fields!");
    return;
  }
  insertGuests(booking).then(() => {
    res.status(200).redirect("/bookings");
  });
});

app.get("/book/:id", (req, res) => {
  getGuestById(req.params.id).then((data) => {
    res.json(data);
  });
});

app.put("/book/:id", (req, res) => {
  updateGuest(req.params.id).then((data) => {
    res.json(`Booking updated: ${data}`);
  });
});

app.delete("/book/:id", (req, res) => {
  deleteGuest(req.params.id).then((data) => {
    res.json(`Booking deleted: ${data}`);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
