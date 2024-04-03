import { faker } from '@faker-js/faker';

const todo = {
  id: 1,
  name: 'Todo 1',
  description: 'Content of todo 1',
  isComplete: false,
  author: '1',
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
};

export default todo;
