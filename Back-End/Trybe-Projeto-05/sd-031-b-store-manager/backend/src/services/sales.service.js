const { salesModel, productsModel } = require('../models');

const allSales = async () => {
  const sales = await salesModel.getAllSales();
  return { status: 'SUCCESSFUL', data: sales };
};

const salesById = async (saleId) => {
  const sale = await salesModel.getSalesById(saleId);

  if (!sale.length) { return { status: 'NOT_FOUND', data: { message: 'Sale not found' } }; }

  return { status: 'SUCCESSFUL', data: sale };
};

const salesCreate = async (sale) => {
  const products = sale.map(({ productId }) => productsModel.getById(productId));
  const productsFound = await Promise.all(products);
  if (productsFound.includes(undefined)) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  const saleId = await salesModel.createSale(sale);
  const sales = await salesModel.getSalesById(saleId);
  const soldItem = {
    id: saleId,
    itemsSold: sales.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    })),
  };
  return { status: 'CREATED', data: soldItem };
};

const salesDelete = async (saleId) => {
  const sale = await salesModel.getSalesById(saleId);
  if (!sale.length) { return { status: 'NOT_FOUND', data: { message: 'Sale not found' } }; }

  await salesModel.deleteSale(saleId);
  return { status: 'DELETED', data: null };
};

module.exports = {
  allSales,
  salesById,
  salesCreate,
  salesDelete,
};
