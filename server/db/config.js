import { Pool, Client } from 'pg';
require('dotenv').config();
const pool = new Pool({
  user: process.env.USER_DB,
  host:'localhost',
  database: process.env.DATABASE,
  password:process.env.PASSWORD_DB,
  port: 5432
});
export default pool;