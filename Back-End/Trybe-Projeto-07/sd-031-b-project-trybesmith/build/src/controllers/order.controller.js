"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_service_1 = __importDefault(require("../services/order.service"));
async function listOrders(_req, res) {
    const orders = await order_service_1.default.getOrders();
    return res.status(200).json(orders);
}
exports.default = { listOrders };
