const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;

const decodedToken = async (req, res, next) => {
  const auth = req.header('Authorization');
  if (!auth) return res.status(401).json({ message: 'Token not found' });

  const token = auth.split(' ')[1];

  try {
    const { data } = jwt.verify(token, secret);
    const user = await userService.getById(data.userId);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  decodedToken,
};