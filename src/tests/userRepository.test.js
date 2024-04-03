import db from '@/database';
import { expect, should } from 'chai';
import { user, user2 } from './fixtures/users';
import { findAllUsers, findUserById, findUniqueUser } from '../repositories/userRepository';

describe('User Repository', () => {
  before(async () => {
    await db.models.user.bulkCreate([user, user2]);
  });

  after(async () => {
    await db.models.user.destroy({ where: {}, truncate: true, force: true });
  });

  describe('findAllUsers', () => {
    it('should return all users', async () => {
      const users = await findAllUsers();
      expect(users.length).to.equal(2);
    });
  });

  describe('findUserById', () => {
    it('should return a user by id', async () => {
      const foundUser = await findUserById(1);
      expect(foundUser.id).to.equal(1);
      expect(foundUser.email).to.equal('user@example.com');
    });

    it('should return null if user is not found', async () => {
      const foundUser = await findUserById(100);
      should.not.exist(foundUser);
    });
  });

  describe('findUniqueUser', () => {
    it('should return a user by email', async () => {
      const foundUser = await findUniqueUser('user2@example.com');
      expect(foundUser.id).to.equal(2);
    });

    it('should return null if user is not found', async () => {
      const foundUser = await findUniqueUser('noexisting@email.com');
      should.not.exist(foundUser);
    });
  });
});
