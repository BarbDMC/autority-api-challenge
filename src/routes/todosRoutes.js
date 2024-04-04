import { Router } from 'express';
import {
  todoGetAll, todoGetById, todoList, todoCreate, todoEdit, todoDelete,
} from '@/controllers/todosController';

const todosRoutes = Router();
todosRoutes.get('/tasks', todoGetAll);
todosRoutes.get('/tasks/:todoId', todoGetById);
todosRoutes.get('/authors/:authorId/task', todoList);
todosRoutes.post('/task', todoCreate);
todosRoutes.put('/task/:todoId', todoEdit);
todosRoutes.delete('/task/:todoId', todoDelete);

export default todosRoutes;
