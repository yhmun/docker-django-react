import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { objects } from './reducers';
import { todos } from './todo/reducers';

const reducers = {
  objects,
  todos, 
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => (
  createStore(rootReducer, applyMiddleware(thunk)
));
