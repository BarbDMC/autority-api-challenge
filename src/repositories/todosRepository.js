import db from '@/database';

export const findAllAuthorTodos = (id) => db.models.todo.findAll({ where: { author: id } });

export const findTodoById = (id) => db.models.todo.findByPk(id);

export const createTodo = (todo) => db.models.todo.create(todo);

export const updateTodo = (id, todo) => db.models.todo.update(todo, { where: { id } });

export const deleteTodo = (id) => db.models.todo.destroy({ where: { id } });
