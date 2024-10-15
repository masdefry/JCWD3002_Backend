"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = void 0;
const registerValidator = (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password)
            throw { message: 'Input Should Not be Empty', status: 406 };
        next();
    }
    catch (error) {
        res.status(error.status || 500).json({
            error: true,
            message: error.message,
            data: {}
        });
    }
};
exports.registerValidator = registerValidator;
