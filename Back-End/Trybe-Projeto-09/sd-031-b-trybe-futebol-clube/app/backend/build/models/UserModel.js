"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequelelizeUser_1 = require("../database/models/SequelelizeUser");
class UserModel {
    constructor() {
        this.model = SequelelizeUser_1.default;
    }
    async findAll() {
        const users = await this.model.findAll();
        return users.map(({ id, username, role, email, password }) => ({ id, username, role, email, password }));
    }
    async findById(id) {
        const user = await this.model.findByPk(id);
        if (user === null)
            return null;
        const { username, role, email, password } = user;
        return { id, username, role, email, password };
    }
    async findByEmail(email) {
        const userByEmail = await this.model.findOne({ where: { email } });
        if (!userByEmail)
            return null;
        return userByEmail.toJSON();
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map