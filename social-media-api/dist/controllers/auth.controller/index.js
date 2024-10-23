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
exports.authLogin = exports.authRegister = void 0;
const hash_password_1 = require("../../utils/hash.password");
const auth_service_1 = require("../../services/auth.service");
const jwt_1 = require("./../../utils/jwt");
const authRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = yield (0, hash_password_1.hashPassword)(password);
        yield (0, auth_service_1.authRegisterService)({ username, email, password: hashedPassword });
        res.status(201).json({
            error: false,
            message: 'Register Success',
            data: { username, email }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.authRegister = authRegister;
const authLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const findUsers = yield (0, auth_service_1.authLoginService)({ username });
        const isComparePassword = yield (0, hash_password_1.comparePassword)(findUsers[0].password, password);
        if (!isComparePassword)
            throw { msg: 'Password Doesnt Match', status: 400 };
        const token = yield (0, jwt_1.createToken)(findUsers[0].id);
        res.status(200).json({
            error: true,
            message: 'Auth Login Success',
            data: {
                token,
                username,
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.authLogin = authLogin;
