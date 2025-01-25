const express = require('express');
const { salesController } = require('../controllers');
const { saleValidation } = require('../middlewares/saleValidation');

const router = express.Router();

router.get('/', salesController.allSalesController);
router.get('/:id', salesController.salesByIdController);
router.post('/', saleValidation, salesController.salesCreateController);
router.delete('/:id', salesController.salesDeleteController);

module.exports = router;
