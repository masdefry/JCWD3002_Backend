"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("../controllers/users.controller");
const express_1 = require("express");
const usersRouter = (0, express_1.Router)();
const uploader_1 = require("../middlewares/uploader");
usersRouter.post('/', uploader_1.uploader, users_controller_1.createProfile);
exports.default = usersRouter;
