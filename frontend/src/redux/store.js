import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todos, isReadingTodos } from './todo/reducers';

const reducers = {
  todos, 
  isReadingTodos
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => (
  createStore(rootReducer, applyMiddleware(thunk)
));
