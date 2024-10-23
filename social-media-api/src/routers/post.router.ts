import { createPost } from "../controllers/post.controller";
import { verifyToken } from "../middlewares/verify.token";
import { Router } from 'express';
const postRouter = Router();

postRouter.post('/', verifyToken, createPost);

export default postRouter;