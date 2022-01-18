import { Router } from 'express';

import authMiddleware from '../middlewares/authMiddleware';
import ClassesController from '../controllers/ClassesController';
import CommentsController from '../controllers/CommentsController';

const classRouter = Router();

classRouter.post('/', authMiddleware, ClassesController.create);
classRouter.get('/', authMiddleware, ClassesController.list);
classRouter.post('/comments', authMiddleware, CommentsController.create);


export default classRouter;