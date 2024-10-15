import { Router } from 'express';
const router = Router()
import { login, register } from '../controllers/auth.controller';

// Middleware
import { registerValidator } from '../middleware/validator/register.validator';

router.post('/register', registerValidator, register)
router.post('/login', login)

export default router;