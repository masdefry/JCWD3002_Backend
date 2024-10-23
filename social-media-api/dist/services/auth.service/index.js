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
exports.authLoginService = exports.authRegisterService = void 0;
const index_1 = require("./../../connection/index");
const authRegisterService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, email, password }) {
    const users = yield index_1.prisma.user.findMany({
        where: {
            username,
            email
        }
    });
    if (users.length > 0)
        throw { msg: 'Username or Email Already Exist', status: 400 };
    yield index_1.prisma.user.create({
        data: { username, email, password }
    });
});
exports.authRegisterService = authRegisterService;
const authLoginService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username }) {
    return yield index_1.prisma.user.findMany({
        where: {
            username
        }
    });
});
exports.authLoginService = authLoginService;
