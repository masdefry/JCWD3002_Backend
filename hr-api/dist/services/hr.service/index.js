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
exports.createUserService = void 0;
const connection_1 = require("../../connection");
const hash_password_1 = require("../../utils/hash.password");
const createUserService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ firstName, lastName, email, role, salary, shiftsId }) {
    const prismaRole = role;
    return yield connection_1.prisma.user.create({
        data: { firstName, lastName, email, password: yield (0, hash_password_1.hashPassword)('abc123'), role: prismaRole, salary, shiftsId }
    });
});
exports.createUserService = createUserService;
