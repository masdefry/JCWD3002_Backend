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
exports.authLogin = void 0;
const auth_service_1 = require("../../services/auth.service");
const jwt_1 = require("../../utils/jwt");
const authLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, auth_service_1.authLoginService)({ email, password });
        const token = yield (0, jwt_1.createToken)({ id: user[0].id, role: user[0].role });
        res.status(200).json({
            error: false,
            message: 'Login Success',
            data: {
                token,
                email: user[0].email,
                firstName: user[0].firstName
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.authLogin = authLogin;
