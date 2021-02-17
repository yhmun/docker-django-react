import axios from 'axios';
import { 
  readTodosInProgress, 
  readTodosSuccess, 
  readTodosFailure, 
  createTodo,
  deleteTodo,
} from './actions';

export const readTodosRequest = () => {
  return dispatch => {
    dispatch(readTodosInProgress());
    axios.get(`${process.env.REACT_APP_HOST}/api/todos/`)
      .then((response) => {
          const todos = response.data;
          dispatch(readTodosSuccess(todos));
      })
      .catch((err) => {
          dispatch(readTodosFailure());
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

export const deleteTodoRequest = (id) => {
  return dispatch => {
    axios.delete(`${process.env.REACT_APP_HOST}/api/todos/${id}/`)
      .then(() => {
          dispatch(deleteTodo(id));
      })
      .catch((err) => {
        dispatch(displayAlert(err));
      });
  };
};

export const displayAlert = (text) => {
  alert(text);
};
