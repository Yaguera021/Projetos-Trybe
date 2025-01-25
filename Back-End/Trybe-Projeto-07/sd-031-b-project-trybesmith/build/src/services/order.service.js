"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const order_model_1 = __importDefault(require("../database/models/order.model"));
const product_model_1 = __importDefault(require("../database/models/product.model"));
async function getOrders() {
    const orders = await order_model_1.default.findAll({
        include: { model: product_model_1.default, as: 'productIds', attributes: [] },
        attributes: [
            'id',
            'userId',
            [sequelize_1.default.fn('JSON_ARRAYAGG', sequelize_1.default.col('productIds.id')), 'productIds'],
        ],
        raw: true,
        group: ['id'],
    });
    return orders;
}
exports.default = { getOrders };
