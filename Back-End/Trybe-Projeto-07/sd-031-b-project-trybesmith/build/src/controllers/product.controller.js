"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("../services/product.service"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
async function create(req, res) {
    const { id, name, price, orderId } = req.body;
    const { data } = await product_service_1.default.create({ id, name, price, orderId });
    return res.status(201).json(data);
}
async function getAll(req, res) {
    const { data, status } = await product_service_1.default.getAll();
    return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
}
exports.default = {
    create,
    getAll,
};
