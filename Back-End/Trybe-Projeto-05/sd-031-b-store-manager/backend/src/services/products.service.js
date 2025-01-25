const { productsModel } = require('../models');

const getAll = async () => {
  const products = await productsModel.getAll();

  return { status: 'SUCCESSFUL', data: products };
};

const findById = async (id) => {
  const product = await productsModel.getById(id);

  if (!product) { return { status: 'NOT_FOUND', data: { message: 'Product not found' } }; }

  return { status: 'SUCCESSFUL', data: product };
};

const addProduct = async (name) => {
  const insertId = await productsModel.addProduct(name);
  const product = await productsModel.getById(insertId);
  return { status: 'CREATED', data: product };
};

const updateProduct = async (id, name) => {
  const productExists = await productsModel.getById(id);
  if (!productExists) { return { status: 'NOT_FOUND', data: { message: 'Product not found' } }; }
  
  const product = await productsModel.updateProduct(id, name);
  return { status: 'SUCCESSFUL', data: product };
};

const deleteProduct = async (id) => {
  const productExists = await productsModel.getById(id);
  if (!productExists) { return { status: 'NOT_FOUND', data: { message: 'Product not found' } }; }

  await productsModel.deleteProduct(id);
  return { status: 'DELETED', data: { message: 'Product deleted' } };
};

module.exports = {
  getAll,
  findById,
  addProduct,
  updateProduct,
  deleteProduct,
};
