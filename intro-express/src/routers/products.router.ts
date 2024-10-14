import { findProducts, createProduct, updateProduct } from '../controllers/product.controller';
import { Router } from 'express';
const router = Router()

router.get('/', findProducts)
router.post('/', createProduct)
router.put('/:id', updateProduct)

export default router;