const Sequelize = require('sequelize');
const config = require('../config/config');
const { BlogPost, PostCategory } = require('../models');

const env = process.env.NODE_ENV || 'development';
// Config correta para o ambiente de testes

const sequelize = new Sequelize(config[env]);

const createPost = async (title, content, categoryIds, userId) => {
  const newPost = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({ title, content, userId }, { transaction: t });

    const categories = categoryIds.map(async (categoryId) => {
      await PostCategory.create({
        postId: post.id,
        categoryId,
      }, { transaction: t });
    });
    await Promise.all(categories);
    return post;
  });
  return newPost;
};

module.exports = {
  createPost,
};