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
exports.createUser = void 0;
const hr_service_1 = require("../../services/hr.service");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, role, salary, shiftsId } = req.body;
        yield (0, hr_service_1.createUserService)({ firstName, lastName, email, role, salary, shiftsId });
        res.status(201).json({
            error: false,
            message: 'Create New User Success',
            data: { firstName, lastName, email, role, salary, shiftsId }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
