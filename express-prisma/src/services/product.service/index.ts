import { prisma } from "../../connection";
import { IProduct } from "./types";

export const insertProductService = async({name, price, description}: IProduct) => {
    await prisma.product.create({
        data: { name, price, description }
    })
}

export const selectProductsService = async() => {
    return await prisma.product.findMany()
}

export const updateProductService = async({id, name, price, description}: IProduct) => {
    await prisma.product.update({
        data: { name, price, description }, 
        where: { id }
    })
}

export const deleteProductService = async({id}: Pick<IProduct, 'id'>) => {
    await prisma.product.delete({
        where: { id }
    })
}