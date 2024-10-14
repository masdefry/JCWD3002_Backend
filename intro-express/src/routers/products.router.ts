import { findProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller';
import { Router } from 'express';
const router = Router()

router.get('/', findProducts)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;