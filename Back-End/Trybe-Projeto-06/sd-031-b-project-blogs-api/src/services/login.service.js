const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { status: 400, message: 'Invalid fields' };

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return { status: null, message: token };
};

module.exports = {
  login,
};