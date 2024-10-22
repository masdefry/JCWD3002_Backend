import { NextFunction, Request, Response } from "express";
import { deleteProductService, insertProductService, selectProductsService, updateProductService } from "../../services/product.service";
// Controller
//  - Handle Request dan Response
//  - Validasi
//  - Logic

export const createProduct = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, price, description} = req.body 

        await insertProductService({name, price, description})

        res.status(201).json({
            error: false, 
            message: 'Create Product Success', 
            data: { name, price, description }
        })
    } catch (error) {
        next(error)
    }
}

export const findProducts = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await selectProductsService()
        
        res.status(200).json({
            error: false, 
            message: 'Get Products Success', 
            data: products
        })
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, price, description} = req.body 
        const {id} = req.params

        await updateProductService({id: Number(id), name, price, description})

        res.status(201).json({
            error: false, 
            message: `Update Product with Id = ${id} Success`, 
            data: { name, price, description }
        })
    } catch (error) {
        next(error)
    }
}

export const deleteProduct = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params

        await deleteProductService({id: Number(id)})

        res.status(200).json({
            error: false, 
            message: `Delete Product with Id = ${id} Success`, 
            data: {}
        })
    } catch (error) {
        next(error)
    }
}