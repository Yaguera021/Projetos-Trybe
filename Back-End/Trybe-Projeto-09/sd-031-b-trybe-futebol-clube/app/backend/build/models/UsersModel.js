"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequelelizeUser_1 = require("../database/models/SequelelizeUser");
class UserModel {
    constructor() {
        this.model = SequelelizeUser_1.default;
    }
    async findAll() {
        const dbData = await this.model.findAll();
        return dbData.map(({ id, email, password, username, role }) => ({ id, email, password, username, role }));
    }
    async findById(id) {
        const user = await this.model.findByPk(id);
        if (!user)
            return null;
        const { email, password, username, role } = user;
        return { id, email, password, username, role };
    }
    async findByEmail(email) {
        const user = await this.model.findOne({ where: { email } });
        if (!user)
            return null;
        return user.toJSON();
    }
    async getUserRole(id) {
        const user = await this.model.findByPk(id);
        if (!user)
            return null;
        return user.role;
    }
}
exports.default = UserModel;
//# sourceMappingURL=UsersModel.js.map