"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_router_1 = __importDefault(require("./products.router"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use('/products', products_router_1.default);
exports.default = router;
