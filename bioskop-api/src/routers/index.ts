import authRouter from './auth.router';
import transactionRouter from './transaction.router'
import { Router } from 'express';
const router = Router()

router.use('/auth', authRouter)
router.use('/transactions', transactionRouter)

export default router;
