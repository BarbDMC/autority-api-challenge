export const up = (queryInterface) => queryInterface.bulkInsert('todos', [
  {
    name: 'Task 1',
    description: 'Description for Task 1',
    isComplete: false,
    author: 'Author 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Task 2',
    description: 'Description for Task 2',
    isComplete: false,
    author: 'Author 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Task 3',
    description: 'Description for Task 3',
    isComplete: false,
    author: 'Author 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Task 4',
    description: 'Description for Task 4',
    isComplete: true,
    author: 'Author 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Task 5',
    description: 'Description for Task 5',
    isComplete: true,
    author: 'Author 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
], {});

export const down = (queryInterface) => queryInterface.bulkDelete('todos', {}, {});
