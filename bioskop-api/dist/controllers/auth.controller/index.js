"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const fs_1 = __importDefault(require("fs"));
const register = (req, res) => {
    try {
        const { username, email, password } = req.body;
        const db = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        for (let i = 0; i < db.users.length; i++) {
            if (db.users[i].username === username || db.users[i].email === email)
                throw { message: 'Email or Username Already Register', status: 400 };
        }
        db.users.push({
            uid: Date.now(),
            username,
            email,
            password,
            role: 'USER'
        });
        fs_1.default.writeFileSync('./db/db.json', JSON.stringify(db));
        res.status(201).json({
            error: false,
            message: 'Register Success',
            data: {
                username,
                email
            }
        });
    }
    catch (error) {
        res.status(error.status || 500).json({
            error: true,
            message: error.message,
            data: {}
        });
    }
};
exports.register = register;
const login = (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        const findUser = db.users.filter((user) => {
            return (user.username === username || user.email === username) && user.password === password;
        });
        if (findUser.length === 0)
            throw { message: 'Login Failed', status: 406 };
        res.status(200).json({
            error: false,
            message: 'Login Success',
            data: {
                uid: findUser[0].uid,
                username: findUser[0].username,
                role: findUser[0].role
            }
        });
    }
    catch (error) {
        res.status(error.status || 500).json({
            error: true,
            message: error.message,
            data: {}
        });
    }
};
exports.login = login;
