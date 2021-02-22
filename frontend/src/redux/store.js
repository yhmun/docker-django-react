import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todos } from './todo/reducers';

const reducers = {
  todos, 
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => (
  createStore(rootReducer, applyMiddleware(thunk)
));
