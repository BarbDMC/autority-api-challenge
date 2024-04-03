export const up = (queryInterface) => queryInterface.bulkInsert('users', [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'hashed_password_here',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
], {});

export const down = (queryInterface) => queryInterface.bulkDelete('users', {}, {});
