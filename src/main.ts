import { Hono } from 'hono/mod.ts';
import { compress, cors, csrf, logger, prettyJSON } from 'hono/middleware.ts';
import config from '@/config';
import { authRouter } from './controllers/index.ts';

const app = new Hono();

// Setup cors
app.use(cors({
  origin: config.CORS_WHITELIST,
}));

// Setup Compress
app.use(compress());

// Setup Csrf
app.use(csrf());

// Setup logger
app.use(logger());

// Setup Pretty Json
app.use(prettyJSON());

// Define Routing
app.route('/api/v1/auth', authRouter);

Deno.serve({ port: config.PORT }, app.fetch);
