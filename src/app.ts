import 'reflect-metadata';
import * as dotenv from 'dotenv';
import express from 'express';

import createConnection from './database';
import { router } from './routes';

dotenv.config();
createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };
