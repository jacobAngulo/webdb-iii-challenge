const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const knexConfig = require("./knexfile");
// const knexConfig = {
//   development: {
//     client: "sqlite3",
//     connection: {
//       filename: "./data/lambda.sqlite3"
//     },
//     useNullAsDefault: true
//   }
// };
const db = knex(knexConfig.development);

const server = express();

server.use(helmet());

server.get("/", (req, res) => {
  res.send("makes it here");
});

server.get("/api", async (req, res) => {
  try {
    const cohorts = await db("cohorts");
    console.log(cohorts);
    res.status(200).json(cohorts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = server;
