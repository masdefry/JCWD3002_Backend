import { NextFunction, Request, Response } from "express";

export const createProfile = (req: Request, res: Response, next: NextFunction) => {
    try {
        const imagesUploaded = req?.files
        const {birthDate, phoneNumber, address} = JSON.parse(req?.body?.pwd)
        
    } catch (error) {
        next(error)
    }
}