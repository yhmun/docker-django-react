import axios from 'axios';
import { 
  readTodosInProgress, 
  readTodosSuccess, 
  readTodosFailure, 
  createTodo,
  deleteTodo,
  updateTodo
} from './actions';

export const readTodosRequest = () => {
  return dispatch => {
    dispatch(readTodosInProgress());
    axios.get(`${process.env.REACT_APP_HOST}/api/todos/?ordering=id`)
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

export const createTodoRequest = (title, description) => {
  const data = {
    title: title, 
    description: description, 
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

export const completeTodoRequest = (id) => {
  const data = { 
    completed: true
  };
  return dispatch => {
    axios.patch(`${process.env.REACT_APP_HOST}/api/todos/${id}/`, data)
      .then((response) => {
        const todo = response.data;
        dispatch(updateTodo(todo));
      })
      .catch((err) => {
        dispatch(displayAlert(err));
      });
  };
}

export const displayAlert = (text) => {
  alert(text);
};
