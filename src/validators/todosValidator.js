import { Validator } from 'jsonschema';

const todoSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    description: { type: 'string' },
    isComplete: { type: 'boolean' },
    author: { type: 'string' },
    createdAt: { type: 'string', format: 'date-time' },
    updatedAt: { type: 'string', format: 'date-time' },
    deletedAt: { type: ['string', 'null'], format: 'date-time' },
  },
  required: ['name', 'description', 'isComplete', 'author', 'createdAt', 'updatedAt'],
  additionalProperties: false,
};

const validateTodo = (todo) => {
  const validator = new Validator();
  const result = validator.validate(todo, todoSchema);
  return result;
};

export default validateTodo;
