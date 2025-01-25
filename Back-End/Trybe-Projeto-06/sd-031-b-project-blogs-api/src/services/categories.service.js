const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });

  return { status: 201, data: category.dataValues };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return { status: 200, data: categories };
};

const getById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

module.exports = {
  createCategory,
  getAllCategories,
  getById,
};
