import express, { Router } from 'express';
const router = Router();
import authRouter from './auth.router';
import hrRouter from './hr.router';
import usersRouter from './users.router';

router.use('*/images', express.static('src/public/images'))

router.use('/auth', authRouter);
router.use('/hr', hrRouter)
router.use('/users', usersRouter)

export default router; 