import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

export default {
  PORT: Number(env.SERVICE_APP_PORT)!,
  CORS_WHITELIST: env.SERVICE_APP_CORS_WHITELIST?.split(',') || [],
  SECRET_KEY: env.SERVICE_APP_SECERET_KEY!,
  DATABASE: {
    HOST: env.SERVICE_APP_DB_HOST!,
    PORT: Number(env.SERVICE_APP_DB_PORT!),
    USER: env.SERVICE_APP_DB_USER!,
    PASSWORD: env.SERVICE_APP_DB_PASSWORD!,
    DB_NAME: env.SERVICE_APP_DB_NAME!,
  },
};
