import { Router } from 'express';

import authMiddleware from '../middlewares/authMiddleware';
import ClassesController from '../controllers/ClassesController';
import CommentsController from '../controllers/CommentsController';

const classRouter = Router();

classRouter.post('/', authMiddleware, ClassesController.create);
classRouter.get('/', authMiddleware, ClassesController.list);
classRouter.put('/', authMiddleware, ClassesController.update)
classRouter.delete('/:id', authMiddleware, ClassesController.delete);
classRouter.get('/:id', authMiddleware, ClassesController.find);

classRouter.get('/comments');
classRouter.delete('/comments/:id');
classRouter.post('/comments', authMiddleware, CommentsController.create);


export default classRouter;