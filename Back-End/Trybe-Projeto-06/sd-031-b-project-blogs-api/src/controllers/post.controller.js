const { postService, categoriesService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const categoryIdsCheck = categoryIds.map(async (categoryId) => {
    const category = await categoriesService.getById(categoryId);
    return category;
  });

  const categoryResult = await Promise.all(categoryIdsCheck);

  if (categoryResult.some((category) => category === null)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const post = await postService.createPost(title, content, categoryIds, id);
  return res.status(201).json(post);
};

module.exports = {
  createPost,
};