"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Validations_1 = require("../middlewares/Validations");
const UserModel_1 = require("../models/UserModel");
const UsersService_1 = require("../services/UsersService");
const UsersController_1 = require("../controllers/UsersController");
const JWT_1 = require("../utils/JWT");
const userModel = new UserModel_1.default();
const jwtService = new JWT_1.default();
const userService = new UsersService_1.default(userModel, jwtService);
const userController = new UsersController_1.default(userService);
const router = (0, express_1.Router)();
router.get('/', (req, res) => userController.getAllUsers(req, res));
router.get('/:id', (req, res) => userController.getUserById(req, res));
router.post('/login', Validations_1.default.validateLogin, (req, res) => userController.login(req, res));
exports.default = router;
//# sourceMappingURL=users.routes.js.map