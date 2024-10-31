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
exports.createProfile = void 0;
const users_service_1 = require("../../services/users.service");
const delete_files_1 = require("../../utils/delete.files");
const createProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imagesUploaded = req === null || req === void 0 ? void 0 : req.files;
        const { birthDate, phoneNumber, address, usersId } = req.body;
        yield (0, users_service_1.createProfileService)({ imagesUploaded, birthDate, phoneNumber, address, usersId });
        res.status(201).json({
            error: false,
            message: 'Create Profile Success',
            data: {
                birthDate,
                phoneNumber,
                address
            }
        });
    }
    catch (error) {
        (0, delete_files_1.deleteFiles)({ imagesUploaded: req.files });
        next(error);
    }
});
exports.createProfile = createProfile;
