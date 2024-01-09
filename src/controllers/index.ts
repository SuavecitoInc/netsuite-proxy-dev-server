import type { Request, Response } from 'express';
import { authenticatedFetch } from '../lib/utils.js';

export const getProductBySku = async (req: Request, res: Response) => {
  try {
    const { sku } = req.body;
    if (!sku) throw new Error('No sku provided');
    const data = {
      sku,
    };
    const response = await authenticatedFetch(data);
    console.log('RESPONSE', response);
    res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
