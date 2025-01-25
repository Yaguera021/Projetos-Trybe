const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const createNewCategory = await categoriesService.createCategory(name);

  return res.status(createNewCategory.status).send(createNewCategory.data);
};

const getAllCategories = async (_req, res) => {
  const allCategories = await categoriesService.getAllCategories();

  return res.status(allCategories.status).send(allCategories.data);
};

module.exports = {
  createCategory,
  getAllCategories,
};