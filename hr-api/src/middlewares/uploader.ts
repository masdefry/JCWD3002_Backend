import { NextFunction, Request, Response } from 'express';
import { uploadMulter } from '../utils/multer';

export const uploader = (req: Request, res: Response, next: NextFunction) => {
    const uploaded = uploadMulter.fields([{name: 'images', maxCount: 3}])

    uploaded(req, res, function(err){
        try{
            if(err) throw {msg: err.message}
            
            if(!Array.isArray(req?.files) && !req?.files?.images?.length) throw {msg: 'File Tidak Ditemukan'}
            
            next()
        }catch(err){
            next(err)
        }
    })
}