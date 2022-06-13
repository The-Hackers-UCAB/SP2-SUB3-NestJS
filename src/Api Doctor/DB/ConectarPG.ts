require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

/*
const pool = new Pool({
  user: "postgres",
  database: "ShortPaper2",
  password: "171215",
  host: "localhost",
  port:5432,
});
*/

module.exports = pool;
