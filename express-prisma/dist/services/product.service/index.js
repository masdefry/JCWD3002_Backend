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
exports.deleteProductService = exports.updateProductService = exports.selectProductsService = exports.insertProductService = void 0;
const connection_1 = require("../../connection");
const insertProductService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, price, description }) {
    yield connection_1.prisma.product.create({
        data: { name, price, description }
    });
});
exports.insertProductService = insertProductService;
const selectProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.prisma.product.findMany();
});
exports.selectProductsService = selectProductsService;
const updateProductService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, name, price, description }) {
    yield connection_1.prisma.product.update({
        data: { name, price, description },
        where: { id }
    });
});
exports.updateProductService = updateProductService;
const deleteProductService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id }) {
    yield connection_1.prisma.product.delete({
        where: { id }
    });
});
exports.deleteProductService = deleteProductService;
