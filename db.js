const mysql = require("pg");
require("dotenv").config();

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASS = process.env.DATABASE_PASS;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_PORT = process.env.DATABASE_PORT;

const { Client } = require("pg");

const dbConnection = async () => {
  const client = new Client({
    user: DATABASE_USER,
    password: DATABASE_PASS,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
  });
  await client.connect();
  const getGuests = () => {
    const promise = new Promise((resolve, reject) => {
      client.query("SELECT * FROM guests;", (err, res, fields) => {
        if (err) reject(err);
        resolve(res);
      });
    });
    return promise;
  };
  try {
    const guestsData = await getGuests();
    console.log(guestsData);
  } finally {
    await client.end();
  }
};
dbConnection().catch(console.error);

module.exports = dbConnection;
