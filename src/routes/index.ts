import { Router } from 'express';
import classRouter from './class.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/classes', classRouter);

export default routes;