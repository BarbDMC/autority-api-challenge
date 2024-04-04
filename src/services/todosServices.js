import {
  findAllTodos,
  findTodoById,
  findAllAuthorTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '@/repositories/todosRepository';

export const getAllTodos = async () => findAllTodos();

export const getTodoById = async (todoId) => findTodoById(todoId);

export const getAllAuthorTodos = async (author) => findAllAuthorTodos(author);

export const addTodo = (todo) => createTodo(todo);

export const editTodo = async (todoId, todo) => updateTodo(todoId, todo);

export const deleteTodoItem = async (todoId) => {
  const deletedCount = await deleteTodo(todoId);

  if (deletedCount === 0) {
    throw new Error('Todo not found or already deleted');
  }
};
