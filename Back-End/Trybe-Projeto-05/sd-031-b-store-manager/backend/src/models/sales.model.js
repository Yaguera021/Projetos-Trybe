const connection = require('./connection');

const getAllSales = async () => {
  const QUERY = `SELECT sp.sale_id as saleId, 
  sp.product_id as productId, 
  sp.quantity, s.date
  FROM sales_products sp
  INNER JOIN sales s ON sp.sale_id = s.id`;
  const [sales] = await connection.execute(QUERY);

  return sales;
};

const getSalesById = async (id) => {
  const QUERY = `SELECT s.date, 
  sp.product_id as productId, sp.quantity
  FROM sales_products sp
  INNER JOIN sales s ON sp.sale_id = s.id
  WHERE sp.sale_id = ?`;
  const [sale] = await connection.execute(QUERY, [id]);
  return sale;
};

const createSale = async (sale) => {
    const QUERY = 'INSERT INTO sales () VALUES ()';
    const [result] = await connection.execute(QUERY, []);
    const saleId = result.insertId;
    const QUERY2 = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
    const products = sale.map(async ({ productId, quantity }) => {
      await connection.execute(QUERY2, [saleId, productId, quantity]);
    });
    await Promise.all(products);
    return saleId;
};

const deleteSale = async (id) => {
  const QUERY = 'DELETE FROM sales WHERE id = ?';
  const [sale] = await connection.execute(QUERY, [id]);
  return sale;
};

module.exports = {
  getAllSales,
  getSalesById,
  createSale,
  deleteSale,
};