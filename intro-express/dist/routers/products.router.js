"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = require("../controllers/product.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', product_controller_1.findProducts);
router.post('/', product_controller_1.createProduct);
router.put('/:id', product_controller_1.updateProduct);
exports.default = router;
