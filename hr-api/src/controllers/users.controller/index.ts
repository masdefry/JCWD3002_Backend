import { NextFunction, Request, Response } from 'express';
import { createProfileService } from '../../services/users.service';
import { deleteFiles } from '../../utils/delete.files';

export const createProfile = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const imagesUploaded = req?.files
        const {birthDate, phoneNumber, address, usersId} = req.body
       
        await createProfileService({imagesUploaded, birthDate, phoneNumber, address, usersId})
    
        res.status(201).json({
            error: false, 
            message: 'Create Profile Success', 
            data: {
                birthDate, 
                phoneNumber, 
                address
            }
        })
    } catch (error) {
        deleteFiles({imagesUploaded: req.files})
        next(error)
    }
}