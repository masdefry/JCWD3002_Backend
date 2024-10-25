import { NextFunction, Request, Response } from "express";
import { createUserService } from "../../services/hr.service";

export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { firstName, lastName, email, role, salary, shiftsId } = req.body

        await createUserService({ firstName, lastName, email, role, salary, shiftsId })

        res.status(201).json({
            error: false, 
            message: 'Create New User Success', 
            data: { firstName, lastName, email, role, salary, shiftsId }
        })
    } catch (error) {
        next(error)
    }
}