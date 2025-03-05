import type { Express } from 'express';
import {
  getProductBySku,
  proxyRequest,
  demandPlansAll,
  demandPlansByDate,
  demandPlansBySku,
  demandPlansWorkOrders,
} from '../controllers/index.js';

const routes = (app: Express) => {
  // verify request function should be here
  // we dont need one because this is for development purpose
  // in production we should have one

  // todo: use verification middeleware here
  // example endpoint
  app.post('/product', getProductBySku);

  app.post('/proxy', proxyRequest);

  // demand planning endpoints
  app.post('/demand-plans', demandPlansAll);
  app.post('/demand-plans/sku', demandPlansBySku);
  app.post('/demand-plans/date', demandPlansByDate);
  app.post('/demand-plans/work-orders', demandPlansWorkOrders);
};

export default routes;
