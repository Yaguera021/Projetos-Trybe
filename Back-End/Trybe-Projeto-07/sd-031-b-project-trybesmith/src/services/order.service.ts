import Sequelize from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

async function getOrders(): Promise<OrderSequelizeModel[]> {
  const orders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: [] },
    attributes: [
      'id',
      'userId',
      [Sequelize.fn('JSON_ARRAYAGG', Sequelize.col('productIds.id')), 'productIds'],
    ],
    raw: true,
    group: ['id'],
  });
  return orders;
}
export default { getOrders };