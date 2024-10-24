import { NextFunction, Request, Response } from 'express';
import { authLoginService } from '../../services/auth.service';
import { createToken } from '../../utils/jwt';

export const authLogin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body 

        const user = await authLoginService({email, password})

        const token = await createToken({id: user[0].id, role: user[0].role})

        res.status(200).json({
            error: false, 
            message: 'Login Success',
            data: {
                token, 
                email: user[0].email, 
                firstName: user[0].firstName
            }
        })
    } catch (error) {
        next(error)
    }
}