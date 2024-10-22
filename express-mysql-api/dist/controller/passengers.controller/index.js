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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPassengerByPclass = exports.findPassengers = void 0;
const connection_1 = __importDefault(require("../../connection"));
const util_1 = require("util");
const query = (0, util_1.promisify)(connection_1.default.query).bind(connection_1.default);
const findPassengers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        let queryFindPassengers = `SELECT * FROM passengers`;
        if (name)
            queryFindPassengers += ' WHERE Name LIKE ?';
        let passengers = yield query({
            sql: queryFindPassengers,
            values: [`%${name}%`]
        });
        res.status(200).json({
            error: false,
            message: 'Get Passengers Success',
            data: passengers
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findPassengers = findPassengers;
const findPassengerByPclass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pclass } = req.params;
        const passengers = yield query({
            sql: 'SELECT * FROM passengers WHERE Pclass = ?',
            values: [pclass]
        });
        res.status(200).json({
            error: false,
            message: `Get Passengers by Pclass = ${pclass} Success`,
            data: passengers
        });
    }
    catch (error) {
    }
});
exports.findPassengerByPclass = findPassengerByPclass;
