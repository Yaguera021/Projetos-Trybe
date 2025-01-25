"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const UsersModel_1 = require("../models/UsersModel");
const JsonWebTokenAdapter_1 = require("../utils/jwt/JsonWebTokenAdapter");
class AuthService {
    constructor(userModel = new UsersModel_1.default(), jwtService = new JsonWebTokenAdapter_1.default()) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async login(email, password) {
        const user = await this.userModel.findByEmail(email);
        if (!user)
            return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return {
                status: 'UNAUTHORIZED',
                data: {
                    message: 'Invalid email or password'
                }
            };
        }
        const token = this.jwtService.sign({
            id: user.id,
        });
        return { status: 'SUCCESSFUL', data: { token } };
    }
}
exports.default = AuthService;
//# sourceMappingURL=AuthService.js.map