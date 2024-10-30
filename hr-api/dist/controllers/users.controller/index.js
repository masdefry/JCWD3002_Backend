"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfile = void 0;
const createProfile = (req, res, next) => {
    var _a;
    try {
        const imagesUploaded = req === null || req === void 0 ? void 0 : req.files;
        const { birthDate, phoneNumber, address } = JSON.parse((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.pwd);
    }
    catch (error) {
        next(error);
    }
};
exports.createProfile = createProfile;
