import { Request, Response } from "express";
import db from "../../connection";
import {promisify} from 'util';
const query = promisify(db.query).bind(db)

export const findPassengers = async(req: Request, res: Response) => {
    try {
        const {name} = req.query 
        let queryFindPassengers = `SELECT * FROM passengers`

        if(name) queryFindPassengers += ' WHERE Name LIKE ?'

        let passengers = await query(
            {
                sql: queryFindPassengers, 
                values: [`%${name}%`]
            }
        )

        res.status(200).json({
            error: false, 
            message: 'Get Passengers Success', 
            data: passengers
        })
    } catch (error) {
        console.log(error)
    }
}

export const findPassengerByPclass = async(req: Request, res: Response) => {
    try {
        const {pclass} = req.params 

        const passengers  = await query({
            sql: 'SELECT * FROM passengers WHERE Pclass = ?', 
            values: [pclass]
        })

        res.status(200).json({
            error: false, 
            message: `Get Passengers by Pclass = ${pclass} Success`, 
            data: passengers
        })
    } catch (error) {
        
    }
}