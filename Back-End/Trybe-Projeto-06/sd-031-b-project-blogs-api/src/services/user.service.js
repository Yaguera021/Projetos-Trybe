const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  const newUserId = newUser.dataValues.id;

  const token = jwt.sign({ data: { id: newUserId, displayName, email } }, secret, jwtConfig);
  return { status: null, message: { token } };
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, message: users };
};

const getById = async (id) => User
  .findOne({ where: { id }, attributes: { exclude: ['password'] } });

module.exports = {
  createUser,
  findByEmail,
  getUsers,
  getById,
};