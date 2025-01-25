const { userService } = require('../services');

const createUser = async (req, res) => {
  const { status, message } = await userService.createUser(req.body);

  if (status) return res.status(status).json(message);

  return res.status(201).send(message);
};

const getUsers = async (req, res) => {
  const { status, message } = await userService.getUsers();

  return res.status(status).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};