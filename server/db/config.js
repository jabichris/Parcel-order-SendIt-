const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1@Kig6ali27',
  port: 5432
});

module.exports = pool;