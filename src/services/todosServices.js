import {
  findAllAuthorTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '@/repositories/todosRepository';

export const getAllAuthorTodos = async (author) => findAllAuthorTodos(author);

export const addTodo = (todo) => createTodo(todo);

export const editTodo = async (todoId, todo) => updateTodo(todoId, todo);

export const deleteTodoItem = async (todoId) => deleteTodo(todoId);
