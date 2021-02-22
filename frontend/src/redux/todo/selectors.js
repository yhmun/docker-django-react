import { createSelector } from 'reselect';
import { getObjects } from '../selectors';

export const getIncompletedTodos = createSelector(
  getObjects,
  (todos) => todos.filter(todo => !todo.completed),
);

export const getCompletedTodos = createSelector(
  getObjects,
  (todos) => todos.filter(todo => todo.completed),
);
