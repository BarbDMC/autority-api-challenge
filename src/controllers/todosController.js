/* eslint-disable consistent-return */
import {
  getAllTodos, getTodoById, getAllAuthorTodos, addTodo, editTodo, deleteTodoItem,
} from '@/services/todosServices';
import validateTodo from '@/validators/todosValidator';

export const todoGetAll = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const todoGetById = async (req, res) => {
  try {
    const todoId = parseInt(req.params.todoId, 10);
    const todo = await getTodoById(todoId);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found.' });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const todoList = async (req, res) => {
  try {
    const todos = await getAllAuthorTodos(req.params.authorId);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const todoCreate = async (req, res) => {
  try {
    const validationResult = validateTodo(req.body);

    if (!validationResult.valid) {
      return res.status(400).json({ errors: validationResult.errors });
    }

    const todo = await addTodo(req.body);
    res.status(201).json({ message: 'Todo Created.', todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const todoEdit = async (req, res) => {
  try {
    const validationResult = validateTodo(req.body);

    if (!validationResult.valid) {
      return res.status(400).json({ errors: validationResult.errors });
    }

    const todoId = parseInt(req.params.todoId, 10);
    const todo = await editTodo(todoId, req.body);
    res.json({ message: 'Todo Updated.', todo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const todoDelete = async (req, res) => {
  try {
    const todoId = parseInt(req.params.todoId, 10);
    await deleteTodoItem(todoId);

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
