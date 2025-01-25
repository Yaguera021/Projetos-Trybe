"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../database/models/product.model"));
async function create(product) {
    const newProduct = await product_model_1.default.create(product);
    return {
        status: 'SUCCESSFUL',
        data: newProduct.dataValues,
    };
}
async function getAll() {
    const products = await product_model_1.default.findAll();
    const productsData = products.map((product) => product.dataValues);
    return {
        status: 'SUCCESSFUL',
        data: productsData,
    };
}
exports.default = {
    create,
    getAll,
};
