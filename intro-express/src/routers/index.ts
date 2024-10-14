import productsRouter from './products.router';
import { Router } from 'express';
const router = Router()

router.use('/products', productsRouter)

export default router;
