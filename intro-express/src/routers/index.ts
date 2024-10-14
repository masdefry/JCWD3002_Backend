import productsRouter from './products.router';
import expensesRouter from './expenses.router'
import { Router } from 'express';
const router = Router()

router.use('/products', productsRouter)
router.use('/expenses', expensesRouter)

export default router;
