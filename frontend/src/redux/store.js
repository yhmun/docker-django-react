import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todos, isLoadingTodos } from './todo/reducers';

const reducers = {
  todos, 
  isLoadingTodos
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => (
  createStore(rootReducer, applyMiddleware(thunk)
));
