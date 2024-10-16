"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passengers_controller_1 = require("../controller/passengers.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', passengers_controller_1.findPassengers);
exports.default = router;
