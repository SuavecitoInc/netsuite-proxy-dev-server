import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import { authenticatedFetch } from '../lib/utils.js';

dotenv.config();

export const getProductBySku = async (req: Request, res: Response) => {
  try {
    const endpoint = process.env.NETSUITE_RESTLET_URL;
    const { sku } = req.body;
    if (!sku) throw new Error('No sku provided');
    const data = {
      sku,
    };
    const response = await authenticatedFetch(endpoint, data);
    console.log('RESPONSE', response);
    res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const proxyRequest = async (req: Request, res: Response) => {
  try {
    const endpoint = process.env.NETSUITE_RESTLET_PROXY_URL;
    const body = req.body;
    console.log('PROXY REQUEST PAYLOAD', body);
    const response = await authenticatedFetch(endpoint, body);
    console.log('RESPONSE', response);
    res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const demandPlansBySku = async (req: Request, res: Response) => {
  try {
    const endpoint = process.env.NETSUITE_DEMAND_PLANNING_SKU;
    const body = req.body;
    console.log('PROXY REQUEST PAYLOAD', body);
    const response = await authenticatedFetch(endpoint, body);
    console.log('RESPONSE', response);
    res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const demandPlansByDate = async (req: Request, res: Response) => {
  try {
    const endpoint = process.env.NETSUITE_DEMAND_PLANNING_DATE;
    const body = req.body;
    console.log('PROXY REQUEST PAYLOAD', body);
    const response = await authenticatedFetch(endpoint, body);
    console.log('RESPONSE', response);
    res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const demandPlansAll = async (req: Request, res: Response) => {
  try {
    const endpoint = process.env.NETSUITE_DEMAND_PLANNING_ALL;
    const body = req.body;
    console.log('PROXY REQUEST PAYLOAD', body);
    const response = await authenticatedFetch(endpoint, body);
    console.log('RESPONSE', response);
    res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
