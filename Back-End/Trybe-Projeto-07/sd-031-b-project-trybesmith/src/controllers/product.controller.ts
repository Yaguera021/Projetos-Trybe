import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response): Promise<Response> {
  const { id, name, price, orderId } = req.body;
  const { data } = await productService.create({ id, name, price, orderId });

  return res.status(201).json(data);
}

async function getAll(req: Request, res: Response): Promise<Response> {
  const { data, status } = await productService.getAll();

  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  create,
  getAll,
};
