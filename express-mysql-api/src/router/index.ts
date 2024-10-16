import passengersRouter from './passengers.router';
import { Router } from 'express';
const router = Router()

router.use('/passengers', passengersRouter)

export default router; 