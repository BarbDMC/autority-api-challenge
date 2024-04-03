import db from '@/database';
import { expect } from 'chai';
import { checkUser } from '@/services/loginServices';
import { user } from './fixtures/users';

describe('Login Services', () => {
  before(async () => {
    await db.models.user.create(user);
  });

  after(async () => {
    await db.models.user.destroy({ where: {}, truncate: true, force: true });
  });
  describe('When checkUser', () => {
    it('returns an user if find one', async () => {
      const checkedUser = await checkUser('user@example.com');
      expect(checkedUser.email).to.equal('user@example.com');
    });

    it('returns null if the user is not found', async () => {
      const checkedUser = await checkUser('otherexample@email.com');
      expect(checkedUser).to.equal(null);
    });
  });
});
