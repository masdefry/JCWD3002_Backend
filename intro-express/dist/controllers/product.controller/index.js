"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.findProducts = void 0;
const fs_1 = __importDefault(require("fs"));
const findProducts = (req, res) => {
    try {
        // Comunicate DB to GET Data Products
        let products = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        res.status(200).json({
            error: false,
            message: 'Get Products Success',
            data: products.products
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something Went Wrong',
            data: [{}]
        });
    }
};
exports.findProducts = findProducts;
const createProduct = (req, res) => {
    try {
        const { name, price } = req.body;
        if (!name || !price)
            throw { message: 'Name or Price Must Be Filled!', status: 406 };
        let products = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        products.products.push({ id: Date.now(), name, price });
        fs_1.default.writeFileSync('./db/db.json', JSON.stringify(products));
        res.status(201).json({
            error: false,
            message: 'Create Product Success',
            data: { name, price }
        });
    }
    catch (error) {
        res.status(error.status || 500).json({
            error: true,
            message: error.message,
            data: null
        });
    }
};
exports.createProduct = createProduct;
const updateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;
        let products = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        products.products.forEach((item, index) => {
            if (item.id === Number(id)) {
                item.name = name;
                item.price = price;
            }
        });
        fs_1.default.writeFileSync('./db/db.json', JSON.stringify(products));
        res.status(201).json({
            error: false,
            message: 'Update Product Success',
            data: { name, price }
        });
    }
    catch (error) {
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => {
    try {
        const { id } = req.params;
        let products = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        for (let i = 0; i < products.products.length; i++) {
            if (Number(id) === products.products[i].id) {
                products.products.splice(i, 1);
                break;
            }
        }
        fs_1.default.writeFileSync('./db/db.json', JSON.stringify(products));
        res.status(200).json({
            error: false,
            message: `Delete Product with Id=${id} Success`,
            data: {}
        });
    }
    catch (error) {
        res.status(error.status || 500).json({
            error: true,
            message: error.message,
            data: null
        });
    }
};
exports.deleteProduct = deleteProduct;
