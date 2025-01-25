const express = require('express');
const userController = require('../controllers/user.controller');
const { validateUser, emailExist } = require('../middlewares/validateUser.middleware');
const { decodedToken } = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateUser, emailExist, userController.createUser);
router.get('/', decodedToken, userController.getUsers);
router.get('/:id', decodedToken, userController.getUserById);

module.exports = router;