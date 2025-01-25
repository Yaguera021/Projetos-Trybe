const { validateProduct } = require('./validations/validations');

const productValidation = (req, res, next) => {
  const error = validateProduct(req.body);

  if (error) {
    let statusCode = 500;
    let errorMessage = 'An unknown validation error occurred';

    if (error.message.includes('require')) {
      statusCode = 400;
      errorMessage = error.message;
    } else if (error.message.includes('length')) {
      statusCode = 422;
      errorMessage = error.message;
    }

    return res.status(statusCode).json({ message: errorMessage });
  }
  next();
};

module.exports = {
  productValidation,
};