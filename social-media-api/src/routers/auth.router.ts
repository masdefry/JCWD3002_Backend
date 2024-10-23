import { authRegister } from "../controllers/auth.controller";
import { Router } from "express";
const authRouter = Router();

authRouter.post('/', authRegister);

export default authRouter;