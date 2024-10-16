"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_controller_1 = require("../controllers/transaction.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', transaction_controller_1.createTransaction);
router.get('/', transaction_controller_1.findMoviesByDateAndTime);
exports.default = router;
