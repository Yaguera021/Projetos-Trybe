"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_util_1 = __importDefault(require("../utils/jwt.util"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
async function login(user) {
    const getUser = await user_model_1.default.findOne({ where: { username: user.username } });
    if (!getUser || !bcryptjs_1.default.compareSync(user.password, getUser.dataValues.password)) {
        return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
    }
    const { username, password } = getUser.dataValues;
    const token = jwt_util_1.default.sign({ username, password });
    return { status: 'SUCCESSFUL', data: { token } };
}
exports.default = { login };
