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
exports.createProfileService = void 0;
const connection_1 = require("../../connection");
const createProfileService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ imagesUploaded, birthDate, phoneNumber, address, usersId }) {
    yield connection_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const createdUserProfile = yield tx.userProfile.create({
            data: {
                birthDate: new Date(birthDate),
                phoneNumber,
                address,
                usersId
            }
        });
        const imagesToCreate = imagesUploaded.images.map((image) => {
            return { imageUrl: image.filename, userProfilesId: createdUserProfile.id };
        });
        yield tx.userProfileImage.createMany({
            data: imagesToCreate
        });
    }));
});
exports.createProfileService = createProfileService;
