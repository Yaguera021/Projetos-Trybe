"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = require("../controllers/UsersController");
const Validations_1 = require("../middlewares/Validations");
const TokenValidation_1 = require("../middlewares/TokenValidation");
// import LoginValidation from '../middlewares/LoginValidation';
const usersController = new UsersController_1.default();
// const validations = new Validations();
const router = (0, express_1.Router)();
router.get('/role', TokenValidation_1.default, (req, res) => usersController.getByRole(req, res));
router.post('/', Validations_1.default.validateUser, (req, res) => usersController.login(req, res));
exports.default = router;
//# sourceMappingURL=login.routes.js.map