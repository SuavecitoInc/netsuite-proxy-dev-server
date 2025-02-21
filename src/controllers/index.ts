import type { Request, Response } from 'express';
import { authenticatedFetch } from '../lib/utils.js';

export const getProductBySku = async (req: Request, res: Response) => {
  try {
    const { sku } = req.body;
    if (!sku) throw new Error('No sku provided');
    const data = {
      sku,
    };
    const response = await authenticatedFetch('product', data);
    console.log('RESPONSE', response);
    res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const proxyRequest = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log('PROXY REQUEST PAYLOAD', body);
    const response = await authenticatedFetch('proxy', body);
    console.log('RESPONSE', response);
    res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
