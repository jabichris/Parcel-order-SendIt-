import { Pool, Client } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'senditdb',
  password: '1@Kig6ali27',
  port: 5432
});

export default pool;