import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getTodosReading = state => state.todos.isReading;

export const getIncompletedTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => !todo.completed),
);

export const getCompletedTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => todo.completed),
);
