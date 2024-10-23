import { NextFunction, Request, Response } from "express";
import { comparePassword, hashPassword } from "../../utils/hash.password";
import { authLoginService, authRegisterService } from "../../services/auth.service";
import { createToken } from './../../utils/jwt';

export const authRegister = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, email, password} = req.body 

        const hashedPassword = await hashPassword(password)
        
        await authRegisterService({username, email, password: hashedPassword})

        res.status(201).json({
            error: false, 
            message: 'Register Success', 
            data: {username, email}
        })
    } catch (error) {
        next(error)
    }
}

export const authLogin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, password} = req.body

        const findUsers = await authLoginService({username})
        const isComparePassword = await comparePassword(findUsers[0].password, password)
        
        if(!isComparePassword) throw {msg: 'Password Doesnt Match', status: 400}

        const token = await createToken(findUsers[0].id)

        res.status(200).json({
            error: true, 
            message: 'Auth Login Success', 
            data: { 
                token,
                username, 
             }
        })
    } catch (error) {
        next(error)
    }
}