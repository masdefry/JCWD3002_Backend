"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const auth_router_1 = __importDefault(require("./auth.router"));
const hr_router_1 = __importDefault(require("./hr.router"));
router.use('/auth', auth_router_1.default);
router.use('/hr', hr_router_1.default);
exports.default = router;
