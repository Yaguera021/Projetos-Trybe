const { productSchema } = require('./schema');
const { saleSchema } = require('./schema');

const validateProduct = (product) => {
  const { error } = productSchema.validate(product);
  if (error) return error; 
  return false;
};

const validateSale = (sale) => {
  const { error } = saleSchema.validate(sale);
  if (error) return error; 
  return false;
};

module.exports = {
  validateProduct,
  validateSale,
};