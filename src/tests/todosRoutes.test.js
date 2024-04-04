/* eslint-disable no-unused-expressions */

import db from '@/database';
import express from 'express';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import todosRoutes from '@/routes/todosRoutes';
import todo from './fixtures/todos';

chai.use(chaiHttp);
chai.should();

const app = express();
app.use(express.json());
app.use(todosRoutes);

describe('TodosRoutes', () => {
  before(async () => {
    await db.models.todo.create(todo);
  });

  after(async () => {
    await db.models.todo.destroy({ where: {}, truncate: true, force: true });
  });

  describe('When get todos', () => {
    it('returns status 200 and a list of todos', async () => {
      const response = await chai.request(app)
        .get('/tasks');

      expect(response).to.have.status(200);
      expect(response.body).to.exist;
    });

    it('returns a todo by id', async () => {
      const response = await chai.request(app)
        .get('/tasks/1');

      expect(response).to.have.status(200);
      expect(response.body).to.exist;
    });

    it('returns status 200 and a list of author todos', async () => {
      const response = await chai.request(app)
        .get('/authors/1/task');

      expect(response).to.have.status(200);
      expect(response.body).to.exist;
    });

    it('returns an empty array if author does not exists or not have todos', async () => {
      const response = await chai.request(app)
        .get('/authors/100/task');

      expect(response).to.have.status(200);
      expect(response.body.length).to.equal(0);
    });
  });

  describe('When create a todo', () => {
    it('returns status 201 if todo is created', async () => {
      const response = await chai.request(app)
        .post('/task')
        .send({
          name: 'Todo 2',
          description: 'Content of todo 2',
          isComplete: false,
          author: '1',
          createdAt: '2021-01-01T00:00:00Z',
          updatedAt: '2021-01-01T00:00:00Z',
        });

      expect(response).to.have.status(201);
      expect(response.body).to.exist;
    });
  });

  describe('When edit a todo', () => {
    it('returns status 200 if todo is edited', async () => {
      const response = await chai.request(app)
        .put('/task/1')
        .send({
          name: 'Todo 1 edited',
          description: 'Content of todo 1 edited',
          isComplete: false,
          author: '1',
          createdAt: '2021-01-01T00:00:00Z',
          updatedAt: '2021-01-01T00:00:00Z',
        });

      expect(response).to.have.status(200);
      expect(response.body).to.exist;
    });

    it('returns status 400 if todo does not exists', async () => {
      const response = await chai.request(app)
        .put('/task/100')
        .send({
          name: 'Note 1 edited',
          description: 'Content of note 1 edited',
          author: '1',
        });

      expect(response).to.have.status(400);
      expect(response.body).to.exist;
    });
  });

  describe('When delete a todo', () => {
    it('returns status 204 if todo is deleted', async () => {
      const response = await chai.request(app)
        .delete('/task/1');

      expect(response).to.have.status(204);
    });

    it('returns status 400 if todo does not exists', async () => {
      const response = await chai.request(app)
        .delete('/task/100');

      expect(response).to.have.status(400);
      expect(response.body).to.exist;
    });
  });
});
