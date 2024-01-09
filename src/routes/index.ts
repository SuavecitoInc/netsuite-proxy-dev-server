import type { Express } from 'express';
import { getProductBySku } from '../controllers/index.js';

const routes = (app: Express) => {
  // verify request function should be here

  // todo: use verification middeleware here
  app.post('/product', getProductBySku);
};

export default routes;
