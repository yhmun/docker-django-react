import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { objects } from './reducers';
import appointmentsReducer from './examples/appointmentsSlice';
import studentsReducer from './examples/studentsSlice';

const reducers = {
  objects,
  appointments: appointmentsReducer,
  students: studentsReducer,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => (
  createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
)));
