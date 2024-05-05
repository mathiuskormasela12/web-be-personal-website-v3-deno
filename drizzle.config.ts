import 'dotenv/config';
import process from 'node:process';
import { Config } from 'drizzle-kit';

export default {
  schema: './src/models/schemas.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: process.env.SERVICE_APP_DB_HOST!,
    port: Number(process.env.SERVICE_APP_DB_PORT!),
    user: process.env.SERVICE_APP_DB_USER,
    password: process.env.SERVICE_APP_DB_PASSWORD,
    database: process.env.SERVICE_APP_DB_NAME!,
  },
} satisfies Config;
