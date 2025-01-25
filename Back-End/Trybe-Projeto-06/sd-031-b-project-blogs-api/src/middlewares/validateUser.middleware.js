const joi = require('joi');
const { User } = require('../models');

const validateUser = (req, res, next) => {
  const { error } = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

const emailExist = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = {
  validateUser,
  emailExist,
};