"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersModel_1 = require("../models/UsersModel");
class UserService {
    constructor(userModel = new UsersModel_1.default()) {
        this.userModel = userModel;
    }
    async findAll() {
        const allUsers = await this.userModel.findAll();
        const usersReturn = allUsers.map(({ id, username, role, email }) => ({ id, username, role, email }));
        return { status: 'SUCCESSFUL', data: usersReturn };
    }
    async findById(id) {
        const user = await this.userModel.findById(id);
        if (!user)
            return { status: 'NOT_FOUND', data: { message: 'User not found' } };
        const { username, email, role } = user;
        return { status: 'SUCCESSFUL', data: { id, username, role, email } };
    }
    async findRoleById(id) {
        const userId = await this.userModel.findById(id);
        if (!userId)
            return { status: 'NOT_FOUND', data: { message: 'User not found' } };
        const { role } = userId;
        return { status: 'SUCCESSFUL', data: { role } };
    }
}
exports.default = UserService;
//# sourceMappingURL=UsersService.js.map