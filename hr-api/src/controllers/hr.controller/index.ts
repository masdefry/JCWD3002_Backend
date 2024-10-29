import { NextFunction, Request, Response } from 'express';
import { createUserService } from '../../services/hr.service';
import { transporter } from '../../utils/transporter';
import fs from 'fs';

export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { firstName, lastName, email, role, salary, shiftsId } = req.body

        await createUserService({ firstName, lastName, email, role, salary, shiftsId })

        const emailBody = fs.readFileSync('./src/public/email.reset.password.html', 'utf-8')

        await transporter.sendMail({
            to: email,
            subject: 'Reset Password Account',
            html: emailBody
        })

        res.status(201).json({
            error: false, 
            message: 'Create New User Success', 
            data: { firstName, lastName, email, role, salary, shiftsId }
        })
    } catch (error) {
        next(error)
    }
}