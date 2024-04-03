/* eslint-disable no-unused-expressions */

import db from '@/database';
import express from 'express';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginRoutes from '@/routes/loginRoutes';
import { user } from './fixtures/users';

chai.use(chaiHttp);
chai.should();

const app = express();
app.use(express.json());
app.use(loginRoutes);

describe('When Login', () => {
  before(async () => {
    await db.models.user.create(user);
  });

  after(async () => {
    await db.models.user.destroy({ where: {}, truncate: true, force: true });
  });

  it('returns status 200 if login with valid credentials', async () => {
    const response = await chai.request(app)
      .post('/login')
      .send({
        email: 'user@example.com',
        password: '12345678',
      });

    expect(response).to.have.status(200);
    expect(response.body.user).to.exist;
    expect(response.body.token).to.exist;
  });

  it('returns status 404 if user does not exists', async () => {
    const response = await chai.request(app)
      .post('/login')
      .send({ email: 'otheruser@example.com', password: 'otheruser' });

    expect(response).to.have.status(404);
    expect(response.text).to.equal('User not found');
  });

  it('returns status 400 with invalid credentials', async () => {
    const response = await chai.request(app)
      .post('/login')
      .send({ email: 'user@example.com', password: 'wrongpassword' });

    expect(response).to.have.status(400);
    expect(response.text).to.equal('Wrong user or password');
  });
});
