import express             from 'express';
import * as todoController from '../controllers/Todo.controller';

const router = express.Router();

router.get('/', todoController.getTodos);
router.post('/', todoController.postTodo);
router.patch('/:id', todoController.patchTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
