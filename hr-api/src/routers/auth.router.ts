import { Router } from 'express';
const authRouter = Router();
import {authLogin} from '../controllers/auth.controller';

authRouter.post('/', authLogin);

export default authRouter;