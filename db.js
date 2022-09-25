const mysql = require("pg");
require("dotenv").config();

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASS = process.env.DATABASE_PASS;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_PORT = process.env.DATABASE_PORT;

const { Client } = require("pg");

const client = new Client({
  user: DATABASE_USER,
  password: DATABASE_PASS,
  database: DATABASE_NAME,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
});
const dbConnection = async () => {
  await client.connect();
};
dbConnection().catch(console.error);
const getGuests = async () => {
  try {
    const guestsData = await client.query("SELECT * FROM guests;");
    console.log(guestsData);
    return guestsData;
  } catch (error) {
    console.log(error);
    client.end();
  }
};
const insertGuests = async (data) => {
  const guest = {
    name: data.guest_name,
    amount: data.guest_amount,
    message: data.guest_message,
    nights: data.guest_nights,
    arrival_date: data.guest_arrival_date,
    price: data.guest_price,
  };
  try {
    const guestsData = await client.query(
      `INSERT INTO guests
      (guest_name, guest_amount, guest_message, guest_nights, guest_arrival_date, guest_price) 
      VALUES (${guest.name}, ${guest.amount}, ${guest.message}, ${guest.nights}, ${guest.arrival_date}, ${guest.price});`
    );
    console.log(guestsData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dbConnection,
  getGuests,
  insertGuests,
};
