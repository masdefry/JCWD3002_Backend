import { authLogin, authRegister } from "../controllers/auth.controller";
import { Router } from "express";
const authRouter = Router();

authRouter.post('/', authRegister);
authRouter.post('/login', authLogin)

export default authRouter;