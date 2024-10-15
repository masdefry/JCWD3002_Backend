import { NextFunction, Request, Response } from 'express';

export const registerValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, email, password} = req.body

        if(!username || !email || !password) throw {message: 'Input Should Not be Empty', status: 406}

        next()
    } catch (error: any) {
        res.status(error.status || 500).json({
            error: true, 
            message: error.message, 
            data: {}
        })
    }
}