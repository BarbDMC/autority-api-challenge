import { expect } from 'chai';
import validateTodo from '@/validators/todosValidator';

describe('notesValidator', () => {
  describe('validateNote', () => {
    it('should return valid true when note is valid', () => {
      const note = {
        name: 'Valid title',
        description: 'Valid content',
        isComplete: false,
        author: '1',
        createdAt: '2021-01-01T00:00:00Z',
        updatedAt: '2021-01-01T00:00:00Z',
      };

      const validationResult = validateTodo(note);
      expect(validationResult.valid).to.equal(true);
    });

    it('should return valid false when note is invalid', () => {
      const note = {
        name: '',
        description: '',
      };

      const validationResult = validateTodo(note);
      expect(validationResult.valid).to.equal(false);
    });
  });
});
