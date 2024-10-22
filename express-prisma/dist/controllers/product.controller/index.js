"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.findProducts = exports.createProduct = void 0;
const product_service_1 = require("../../services/product.service");
// Controller
//  - Handle Request dan Response
//  - Validasi
//  - Logic
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, description } = req.body;
        yield (0, product_service_1.insertProductService)({ name, price, description });
        res.status(201).json({
            error: false,
            message: 'Create Product Success',
            data: { name, price, description }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createProduct = createProduct;
const findProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, product_service_1.selectProductsService)();
        res.status(200).json({
            error: false,
            message: 'Get Products Success',
            data: products
        });
    }
    catch (error) {
        next(error);
    }
});
exports.findProducts = findProducts;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, description } = req.body;
        const { id } = req.params;
        yield (0, product_service_1.updateProductService)({ id: Number(id), name, price, description });
        res.status(201).json({
            error: false,
            message: `Update Product with Id = ${id} Success`,
            data: { name, price, description }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, product_service_1.deleteProductService)({ id: Number(id) });
        res.status(200).json({
            error: false,
            message: `Delete Product with Id = ${id} Success`,
            data: {}
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteProduct = deleteProduct;
