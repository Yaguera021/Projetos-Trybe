const express = require('express');
const { productsController } = require('../controllers');
const { productValidation } = require('../middlewares/productValidation');

const router = express.Router();

router.get('/', productsController.findAll);
router.get('/:id', productsController.getById);
router.post('/', productValidation, productsController.addProduct);
router.put('/:id', productValidation, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;