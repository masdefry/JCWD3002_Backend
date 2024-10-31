import { createProfile } from '../controllers/users.controller';
import { Router } from 'express';
const usersRouter = Router();
import { uploader } from '../middlewares/uploader';
import { verifyToken } from '../middlewares/verify.token';

usersRouter.post('/', verifyToken, uploader, createProfile);

export default usersRouter;