import { expect } from 'chai';
import validateUserLogin from '@/validators/usersValidator';

describe('validateUserLogin', () => {
  const user = {
    email: 'test@example.com',
    password: 'strongpassword',
  };

  it('returns true if the user object is correct', () => {
    const result = validateUserLogin(user);
    expect(result.valid).to.equal(true);
  });

  it('returns false if the user object has missing fields', () => {
    const wrongUser = {
      password: 'strongpassword',
    };

    const result = validateUserLogin(wrongUser);
    expect(result.valid).to.equal(false);
  });
});
