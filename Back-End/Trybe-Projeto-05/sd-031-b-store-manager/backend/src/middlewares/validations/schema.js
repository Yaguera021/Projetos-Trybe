const joi = require('joi');

const productSchema = joi.object({
  name: joi.string().min(5).required(),
}).messages({
  'any.required': '{{#label}} is required',
  'string.empty': '{{#label}} is not allowed to be empty',
  'string.min': '{{#label}} length must be at least 5 characters long',
});

const saleSchema = joi.object({
  productId: joi.number().integer().required(),
  quantity: joi.number().integer().min(1).required(),
}).messages({
  'any.required': '{{#label}} is required',
  'number.empty': '{{#label}} is not allowed to be empty',
  'number.min': '{{#label}} must be greater than or equal to 1',
  'number.integer': '{{#label}} must be an integer',
});

module.exports = {
  productSchema,
  saleSchema,
};