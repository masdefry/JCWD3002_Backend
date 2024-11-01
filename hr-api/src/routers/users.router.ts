import { createProfile, findProfile } from '../controllers/users.controller';
import { Router } from 'express';
const usersRouter = Router();
import { uploader } from '../middlewares/uploader';
import { verifyToken } from '../middlewares/verify.token';
import { createProfileValidator } from '../middlewares/validator/create.profile.validator';
import { errorHandling } from '../middlewares/validator/error.handling';

usersRouter.post('/', verifyToken, uploader, createProfileValidator, errorHandling, createProfile);
usersRouter.get('/', verifyToken, findProfile)

export default usersRouter;