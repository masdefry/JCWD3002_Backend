import {Request, Response} from 'express';
import fs from 'fs';

export const register = (req: Request, res: Response) => {
    try {
        const {username, email, password} = req.body 

        const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
        
        for(let i=0; i<db.users.length; i++){
            if(db.users[i].username === username || db.users[i].email === email) throw {message: 'Email or Username Already Register', status: 400}
        }

        db.users.push({
            uid: Date.now(),
            username, 
            email, 
            password, 
            role: 'USER'
        })

        fs.writeFileSync('./db/db.json', JSON.stringify(db))

        res.status(201).json({
            error: false, 
            message: 'Register Success', 
            data: {
                username, 
                email
            }
        })
    } catch (error: any) {
        res.status(error.status || 500).json({
            error: true, 
            message: error.message, 
            data: {}
        })
    }
}

export const login = (req: Request, res: Response) => {
    try {
        const {username, password} = req.body 

        const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

        const findUser = db.users.filter((user: any) => {
            return (user.username === username || user.email === username) && user.password === password
        })

        if(findUser.length === 0) throw {message: 'Login Failed', status: 406}

        res.status(200).json({
            error: false, 
            message: 'Login Success', 
            data: {
                uid: findUser[0].uid, 
                username: findUser[0].username, 
                role: findUser[0].role
            }
        })
    } catch (error: any) {
        res.status(error.status || 500).json({
            error: true, 
            message: error.message, 
            data: {}
        })
    }
}