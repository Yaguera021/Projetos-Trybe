const productService = require('../services/products.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAll = async (req, res) => {
  const { status, data } = await productService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.findById(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await productService.addProduct(name);

  return res.status(mapStatusHTTP(status)).json(data);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { status, data } = await productService.updateProduct(id, name);

  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.deleteProduct(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
};