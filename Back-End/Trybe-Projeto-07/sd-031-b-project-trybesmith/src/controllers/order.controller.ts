import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function listOrders(_req: Request, res: Response): Promise<Response> {
  const orders = await orderService.getOrders();
  return res.status(200).json(orders);
}

export default { listOrders };