const salesServices = require('../services/sales.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allSalesController = async (req, res) => {
  const { status, data } = await salesServices.allSales();
  return res.status(mapStatusHTTP(status)).json(data);
};

const salesByIdController = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesServices.salesById(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

const salesCreateController = async (req, res) => {
  const sales = req.body;
  const { status, data } = await salesServices.salesCreate(sales);

  return res.status(mapStatusHTTP(status)).json(data);
};

const salesDeleteController = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesServices.salesDelete(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allSalesController,
  salesByIdController,
  salesCreateController,
  salesDeleteController,
};