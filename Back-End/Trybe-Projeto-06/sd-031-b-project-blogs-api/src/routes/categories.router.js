const express = require('express');
const { decodedToken } = require('../auth/validateJWT');
const { categoriesController } = require('../controllers');
const { verifyCategory } = require('../middlewares/validateCategory.middleware');

const router = express.Router();

router.post('/', decodedToken, verifyCategory, categoriesController.createCategory);
router.get('/', decodedToken, categoriesController.getAllCategories);

module.exports = router;