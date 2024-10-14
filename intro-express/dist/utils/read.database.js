"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDatabase = void 0;
const fs_1 = __importDefault(require("fs"));
const readDatabase = () => {
    return JSON.parse(fs_1.default.readFileSync('./db/database.json', 'utf-8'));
};
exports.readDatabase = readDatabase;
