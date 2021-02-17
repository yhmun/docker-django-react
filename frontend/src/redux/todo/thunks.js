import axios from 'axios';
import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from './actions';

export const loadTodos = () => {
  return dispatch => {
    dispatch(loadTodosInProgress());
    axios.get(`${process.env.REACT_APP_HOST}/api/todos/`)
        .then((response) => {
            dispatch(loadTodosSuccess(response.data));
        })
        .catch((err) => {
            dispatch(loadTodosFailure());
            dispatch(displayAlert(err));
        });
  };
};

export const displayAlert = (text) => {
  alert(text);
};
