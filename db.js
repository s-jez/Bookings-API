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
const getGuestById = async (id) => {
  try {
    const guestsData = await client.query(
      `SELECT * FROM guests WHERE id=${id}`
    );
    console.log(guestsData);
    return guestsData;
  } catch (error) {
    console.log(error);
    client.end();
  }
};
const insertGuests = async (data) => {
  try {
    const guestsData = await client.query(
      `INSERT INTO guests(guest_name, guest_amount, guest_message, guest_nights, guest_arrival_date, guest_price) VALUES ($1, $2, $3, $4, $5, $6);`,
      [
        data.name,
        data.amount,
        data.message,
        data.nights,
        data.arrival_date,
        data.price,
      ]
    );
    console.log(guestsData);
  } catch (error) {
    console.log(error);
    client.end();
  }
};
const updateGuest = async (id) => {
  try {
    const guestData = await client.query(
      `UPDATE guests SET guest_name = ${data.guest_name}, guest_amount = ${data.guest_amount}, guest_message = ${data.guest_message}, guest_nights = ${data.guest_nights}, guest_arrival_date = ${data.guest_arrival_date}, guest_price = ${data.guest_price} WHERE id=${id}`
    );
    return guestData;
  } catch (error) {
    console.log(error);
    client.end();
  }
};
const deleteGuest = async (id) => {
  try {
    const guestData = await client.query(`DELETE FROM guests WHERE id=${id}`);
    return guestData;
  } catch (error) {
    console.log(error);
    client.end();
  }
};

module.exports = {
  dbConnection,
  getGuests,
  getGuestById,
  insertGuests,
  updateGuest,
  deleteGuest,
};
