import { Request, Response } from "express";
import db from "../../connection";
import {promisify} from 'util';
const query = promisify(db.query).bind(db)

export const findPassengers = async(req: Request, res: Response) => {
    try {
        const res = await query({sql: 'SELECT * FROM passengers'})
        console.log(res)
    } catch (error) {
        
    }
}