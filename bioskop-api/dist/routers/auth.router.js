"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const auth_controller_1 = require("../controllers/auth.controller");
// Middleware
const register_validator_1 = require("../middleware/validator/register.validator");
router.post('/register', register_validator_1.registerValidator, auth_controller_1.register);
router.post('/login', auth_controller_1.login);
exports.default = router;
