import { Router } from 'express';

import UserController from '../controllers/UserController';
import authMiddleware from '../middlewares/authMiddleware';

const userRouter = Router();

userRouter.get('/',authMiddleware, UserController.index);
userRouter.post('/create', UserController.create);
userRouter.post('/', UserController.login);

export default userRouter;