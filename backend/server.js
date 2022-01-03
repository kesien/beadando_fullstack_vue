import express from 'express';
import cors from 'cors';
import Router from './routes/routes.js';

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(Router);
  return app;
};
