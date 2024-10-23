import { NextFunction, Request, Response } from "express";
import { createPostService } from "../../services/posts.service";

export const createPost = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {caption, imageUrl, usersId} = req.body 

        await createPostService({
            caption, 
            imageUrl, 
            usersId
        })

        res.status(201).json({
            error: false, 
            message: 'Create Post Success',
            data: {
                caption, 
                imageUrl
            }
        })
    } catch (error) {
        next(error)
    }
}