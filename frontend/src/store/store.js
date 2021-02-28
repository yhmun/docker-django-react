import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appointmentsReducer from './examples/appointmentsSlice';
import studentsReducer from './examples/studentsSlice';
import todosReducer from './examples/todosSlice';

const reducers = {
  appointments: appointmentsReducer,
  students: studentsReducer,
  todos: todosReducer,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => (
  createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
)));
