const { validateSale } = require('./validations/validations');

const saleValidation = (req, res, next) => {
  const sale = req.body;
  const errors = sale.map(validateSale).filter(Boolean);
  const requiredError = errors.find((error) => error.message.includes('required'));
  const greaterError = errors.find((error) => error.message.includes('greater'));
  if (requiredError) {
    return res.status(400).json({ message: requiredError.message });
  }
  if (greaterError) {
    return res.status(422).json({ message: greaterError.message });
  }
  next();
};

module.exports = {
  saleValidation,
};
