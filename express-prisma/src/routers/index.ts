import productRouter from "./product.router";
import { Router } from "express";
const router = Router();

router.use('/products', productRouter);

export default router;