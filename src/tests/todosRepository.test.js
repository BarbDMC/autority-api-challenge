import db from '@/database';
import { expect } from 'chai';
import {
  findAllTodos,
  findAllAuthorTodos,
  findTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from '@/repositories/todosRepository';

import todo from './fixtures/todos';

describe('Todos Repository', () => {
  before(async () => {
    await db.models.todo.create(todo);
  });

  after(async () => {
    await db.models.todo.destroy({ where: {}, truncate: true, force: true });
  });

  describe('findAllTodos', () => {
    it('should return all todos', async () => {
      const todos = await findAllTodos();
      expect(todos).to.be.an('array');
      expect(todos).to.have.lengthOf(1);
    });
  });

  describe('findAllAuthorTodos', () => {
    it('should return all todos from one author', async () => {
      const todos = await findAllAuthorTodos('1');
      expect(todos).to.be.an('array');
      expect(todos).to.have.lengthOf(1);
    });
  });

  describe('createTodo', () => {
    it('should create a todo', async () => {
      const newTodo = {
        name: 'Todo 2',
        description: 'Content of todo 2',
        isComplete: false,
        author: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const createdTodo = await createTodo(newTodo);
      expect(createdTodo.name).to.equal(newTodo.name);
    });
  });

  describe('updateTodo', () => {
    it('should update a todo', async () => {
      const todoChanges = {
        id: 1,
        name: 'Updated Todo 1',
        description: 'Updated Content of todo 1',
      };

      await updateTodo(1, todoChanges);
      const updatedTodo = await findTodoById(1);

      expect(updatedTodo.name).to.equal('Updated Todo 1');
      expect(updatedTodo.description).to.equal('Updated Content of todo 1');
    });
  });

  describe('deleteTodo', () => {
    it('should delete a todo', async () => {
      await deleteTodo(1);
      const deletedTodo = await findTodoById(1);

      expect(deletedTodo).to.equal(null);
    });
  });
});
