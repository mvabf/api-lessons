import { Router } from 'express';
import classRouter from './class.routes';
import commentRouter from './comment.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use('/classes/comments', commentRouter);
routes.use('/users', userRouter);
routes.use('/classes', classRouter);


export default routes;