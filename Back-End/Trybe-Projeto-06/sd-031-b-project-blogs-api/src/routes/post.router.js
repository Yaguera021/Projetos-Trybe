const express = require('express');
const { postController } = require('../controllers');
const { validatePost } = require('../middlewares/validatePost.middleware');
const { decodedToken } = require('../auth/validateJWT');

const router = express.Router();

router.post('/', decodedToken, validatePost, postController.createPost);

module.exports = router;