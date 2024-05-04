import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import config from '@/config';

const client = new pg.Client({
  host: config.DATABASE.HOST,
  port: config.DATABASE.PORT,
  user: config.DATABASE.USER,
  password: config.DATABASE.PASSWORD,
  database: config.DATABASE.DB_NAME,
});

await client.connect();
const db = drizzle(client);

export default db;
