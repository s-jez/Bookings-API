const mysql = require("pg");

const DATABASE_HOST = "";
const DATABASE_USER = "";
const DATABASE_PASS = "";
const DATABASE_NAME = "";

const { Client } = require("pg");

const dbConnection = async () => {
  const client = new Client({
    user: DATABASE_USER,
    password: DATABASE_PASS,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
  });
  await client.connect();
  try {
    console.log(await client.query("SELECT *"));
  } finally {
    await client.end();
  }
};
dbConnection().catch(console.error);

module.exports = dbConnection;
