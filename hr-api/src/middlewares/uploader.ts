import { NextFunction, Request, Response } from 'express';
import { uploadMulter } from '../utils/multer';

export const uploader = async(req: Request, res: Response, next: NextFunction) => {
    const uploaded = uploadMulter.fields([{name: 'images', maxCount: 1}])

    uploaded(req, res, function(err){
        try{
            
        }catch(err){
            next(err)
        }
    })
}