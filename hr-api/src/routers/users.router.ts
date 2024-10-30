import { createProfile } from '../controllers/users.controller';
import { Router } from 'express';
const usersRouter = Router();
import { uploader } from '../middlewares/uploader';

usersRouter.post('/', uploader, createProfile);

export default usersRouter;