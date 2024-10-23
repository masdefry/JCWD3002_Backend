import authRouter from "./auth.router";
import postRouter from "./post.router";
import { Router } from "express";
const router = Router();

router.use('/auth', authRouter);
router.use('/posts', postRouter)

export default router;