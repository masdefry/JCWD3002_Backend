import { createProduct, deleteProduct, findProducts, updateProduct } from "../controllers/product.controller";
import { Router } from "express";
const productRouter = Router();

productRouter.post('/', createProduct);
productRouter.get('/', findProducts);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;