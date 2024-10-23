import { NextFunction, Request, Response } from "express";

export const createPost = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {caption, imageUrl} = req.body 
    } catch (error) {
        
    }
}