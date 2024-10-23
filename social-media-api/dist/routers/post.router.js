"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controller_1 = require("../controllers/post.controller");
const verify_token_1 = require("../middlewares/verify.token");
const express_1 = require("express");
const postRouter = (0, express_1.Router)();
postRouter.post('/', verify_token_1.verifyToken, post_controller_1.createPost);
exports.default = postRouter;
