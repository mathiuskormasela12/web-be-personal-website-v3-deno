import process from 'node:process';

export default {
  PORT: Number(process.env.SERVICE_APP_PORT)!,
  CORS_WHITELIST: process.env.SERVICE_APP_CORS_WHITELIST?.split(',') || [],
  SECRET_KEY: process.env.SERVICE_APP_SECERET_KEY!,
  DATABASE: {
    HOST: process.env.SERVICE_APP_DB_HOST!,
    PORT: Number(process.env.SERVICE_APP_DB_PORT!),
    USER: process.env.SERVICE_APP_DB_USER!,
    PASSWORD: process.env.SERVICE_APP_DB_PASSWORD!,
    DB_NAME: process.env.SERVICE_APP_DB_NAME!,
  },
};
