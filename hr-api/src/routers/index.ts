import { Router } from 'express';
const router = Router();
import authRouter from './auth.router';
import hrRouter from './hr.router';

router.use('/auth', authRouter);
router.use('/hr', hrRouter)

export default router; 