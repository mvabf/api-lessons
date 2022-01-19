import { Router } from 'express';

import authMiddleware from '../middlewares/authMiddleware';
import ClassesController from '../controllers/ClassesController';
import validationClassMiddleware from '../middlewares/validationClassMiddleware';

const classRouter = Router();

classRouter.post('/', authMiddleware, validationClassMiddleware, ClassesController.create);
classRouter.get('/', authMiddleware, ClassesController.list);
classRouter.put('/', authMiddleware, ClassesController.update)
classRouter.delete('/:id', authMiddleware, ClassesController.delete);
classRouter.get('/:id', authMiddleware, ClassesController.find);


export default classRouter;