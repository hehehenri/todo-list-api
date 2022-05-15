import { Router } from 'express';
import TodoController from '../controllers/TodoController.js';

const router = Router();

router.get('/', TodoController.index);

router.post('/', TodoController.store);

router.get('/:id', TodoController.show);

router.put('/:id', TodoController.update);

router.delete('/:id', TodoController.destroy);

export default router;