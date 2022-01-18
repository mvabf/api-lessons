import { Router } from 'express';

import authMiddleware from '../middlewares/authMiddleware';
import ClassesController from '../controllers/ClassesController';

const classRouter = Router();

classRouter.post('/', authMiddleware, ClassesController.create);
classRouter.get('/', authMiddleware, ClassesController.list);


export default classRouter;