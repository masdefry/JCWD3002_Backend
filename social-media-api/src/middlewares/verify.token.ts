import { NextFunction, Response, Request } from "express";
import { decodeToken } from "../utils/jwt";

export const verifyToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let {authorization} = req.headers
        authorization = authorization?.split(' ')[1]

        if(!authorization) throw {msg: 'Token Not Found', status: 400}
        
        const decodedToken = await decodeToken(authorization!)
        
        req.body.decodedToken = decodedToken

        next()
    } catch (error) {
        // Menuju ke Centralized Error
        next(error)
    }
}