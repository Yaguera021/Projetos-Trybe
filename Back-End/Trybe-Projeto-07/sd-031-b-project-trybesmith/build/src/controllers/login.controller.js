"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_service_1 = __importDefault(require("../services/login.service"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
async function login(req, res) {
    const { username, password } = req.body;
    if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
        return res.status(400).json({ message: '"username" and "password" are required' });
    }
    const loginResponse = await login_service_1.default.login({ username, password });
    return res.status((0, mapStatusHTTP_1.default)(loginResponse.status)).json(loginResponse.data);
}
exports.default = { login };
