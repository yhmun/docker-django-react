import axios from 'axios';
import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo } from './actions';

export const loadTodosRequest = () => {
  return dispatch => {
    dispatch(loadTodosInProgress());
    axios.get(`${process.env.REACT_APP_HOST}/api/todos/`)
        .then((response) => {
            const todos = response.data;
            dispatch(loadTodosSuccess(todos));
        })
        .catch((err) => {
            dispatch(loadTodosFailure());
            dispatch(displayAlert(err));
        });
  };
};

export const createTodoRequest = (text) => {
  const data = {
    title: 'No title', 
    description: text, 
    completed: false
  };

  return dispatch => {
    axios.post(`${process.env.REACT_APP_HOST}/api/todos/`, data)
        .then((response) => {
            const todo = response.data;
            dispatch(createTodo(todo));
        })
        .catch((err) => {
            dispatch(displayAlert(err));
        });    
  };
};

export const displayAlert = (text) => {
  alert(text);
};
