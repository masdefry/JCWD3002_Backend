import {Request, Response} from 'express';
import fs from 'fs';

export const findProducts = (req: Request, res: Response) => {
    try {
        // Comunicate DB to GET Data Products
        let products = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

        res.status(200).json(
            {
                error: false, 
                message: 'Get Products Success', 
                data: products.products
            }
        )
    } catch (error) {
        res.status(500).json({
            error: true, 
            message: 'Something Went Wrong', 
            data: [{}]
        })
    }
}

export const createProduct = (req: Request, res: Response) => {
    try {
        const {name, price} = req.body 
        
        if(!name || !price) throw {message: 'Name or Price Must Be Filled!', status: 406}
     
        let products = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

        products.products.push({id: Date.now(), name, price})

        fs.writeFileSync('./db/db.json', JSON.stringify(products))

        res.status(201).json({
            error: false, 
            message: 'Create Product Success', 
            data: {name, price}
        })
    } catch (error: any) { 
        res.status(error.status || 500).json({
            error: true, 
            message: error.message, 
            data: null
        })
    }
}

export const updateProduct = (req: Request, res: Response) => {
    try {
        const {id} = req.params 
        const {name, price} = req.body 

        let products = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

        products.products.forEach((item: any, index: number) => {
            if(item.id === Number(id)){
                item.name = name 
                item.price = price 
            }
        })

        fs.writeFileSync('./db/db.json', JSON.stringify(products))

        res.status(201).json({
            error: false, message: 'Update Product Success', data: {name, price}
        })
    } catch (error) {
        
    }
}