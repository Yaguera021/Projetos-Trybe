const connection = require('./connection');

const getAll = async () => {
  const QUERY = 'SELECT * FROM products';
  const [products] = await connection.execute(QUERY);

  return products;
};

const getById = async (id) => {
  const QUERY = 'SELECT * FROM products WHERE id = ?';
  const [[product]] = await connection.execute(QUERY, [id]);

  return product;
};

const addProduct = async (name) => {
  const QUERY = 'INSERT INTO products (name) VALUE (?)';
  const [{ insertId }] = await connection.execute(QUERY, [name]);
  return insertId;
};

const updateProduct = async (id, name) => {
  const QUERY = 'UPDATE products SET name = ? WHERE id = ?';
  await connection.execute(QUERY, [name, id]);
  const productUpdated = await getById(id);
  return productUpdated;
};

const deleteProduct = async (id) => {
  const QUERY = 'DELETE FROM products WHERE id = ?';
  const [productDeleted] = await connection.execute(QUERY, [id]);
  return productDeleted;
};

module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
};