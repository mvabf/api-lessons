import { Router } from 'express';

import authMiddleware from '../middlewares/authMiddleware';

import CommentsController from '../controllers/CommentsController';

const commentRouter = Router();

commentRouter.get('/', authMiddleware, CommentsController.list);
commentRouter.delete('/:id', authMiddleware, CommentsController.delete);
commentRouter.post('/', authMiddleware, CommentsController.create);

export default commentRouter;