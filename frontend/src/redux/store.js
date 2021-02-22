import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { objects } from './reducers';

const reducers = {
  objects,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => (
  createStore(rootReducer, applyMiddleware(thunk)
));
