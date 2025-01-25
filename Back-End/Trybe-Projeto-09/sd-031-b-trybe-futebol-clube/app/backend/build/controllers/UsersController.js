"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersService_1 = require("../services/UsersService");
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
const AuthService_1 = require("../services/AuthService");
class UserController {
    constructor(userService = new UsersService_1.default(), authService = new AuthService_1.default(), role = '') {
        this.userService = userService;
        this.authService = authService;
        this.role = role;
    }
    async getUsers(_req, res) {
        const serviceResponse = await this.userService.findAll();
        return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async getUserById(req, res) {
        const serviceResponse = await this.userService.findById(Number(req.params.id));
        return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async getByRole(req, res) {
        const { user } = res.locals;
        const serviceResponse = await this.userService.findRoleById(user.id);
        return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async login(req, res) {
        const { email, password } = req.body;
        const serviceResponse = await this.authService.login(email, password);
        return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = UserController;
//# sourceMappingURL=UsersController.js.map