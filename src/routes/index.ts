import type { Express } from 'express';
import { getProductBySku, proxyRequest } from '../controllers/index.js';

const routes = (app: Express) => {
  // verify request function should be here
  // we dont need one because this is for development purpose
  // in production we should have one

  // todo: use verification middeleware here
  // example endpoint
  app.post('/product', getProductBySku);

  app.post('/proxy', proxyRequest);
};

export default routes;
