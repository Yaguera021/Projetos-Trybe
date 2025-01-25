import ProductModel from '../database/models/product.model';
import { Product, ProductOptId } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(product: ProductOptId): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);

  return {
    status: 'SUCCESSFUL',
    data: newProduct.dataValues,
  };
}

async function getAll(): Promise<ServiceResponse<Product[]>> {
  const products = await ProductModel.findAll();

  const productsData = products.map((product) => product.dataValues);

  return {
    status: 'SUCCESSFUL',
    data: productsData,
  };
}

export default {
  create,
  getAll,
};