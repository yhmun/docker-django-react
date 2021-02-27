import axios from 'axios';
import { 
  createObject, 
  readObjectsInProgress, 
  readObjectsSuccess,
  readObjectsFailure,
  updateObject,
  deleteObject,
} from './actions';

export const showAlert = message => {
  alert(message);
};

export const requestCreateObject = (url, data) => {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_HOST}${url}/`, data)
      .then((response) => {
        const object = response.data;
        dispatch(createObject(object));
      })
      .catch((err) => {
        dispatch(showAlert(err));
      });
  };
};

export const requestLoadObjects = (url, datas) => {
  return dispatch => {
    dispatch(readObjectsInProgress());
    axios.get(`${process.env.REACT_APP_HOST}${url}/?ordering=id`)
      .then((response) => {
        const objects = response.data;
        if (objects && objects.length > 0) {
          dispatch(readObjectsSuccess(objects));
        } else {
          axios.post(`${process.env.REACT_APP_HOST}${url}/`, datas)
          .then((response) => {
            const objects = response.data;
            dispatch(readObjectsSuccess(objects));
          })
          .catch((err) => {
            dispatch(readObjectsFailure());
            dispatch(showAlert(err));
          });
        }
      })
      .catch((err) => {
        dispatch(readObjectsFailure());
        dispatch(showAlert(err));
      });
  };  
}

export const requestReadObjects = (url) => {
  return dispatch => {
    dispatch(readObjectsInProgress());
    axios.get(`${process.env.REACT_APP_HOST}${url}/?ordering=id`)
      .then((response) => {
        const objects = response.data;
        dispatch(readObjectsSuccess(objects));
      })
      .catch((err) => {
        dispatch(readObjectsFailure());
        dispatch(showAlert(err));
      });
  };
};

export const requestUpdateObject = (url, id, data) => {
  return dispatch => {
    axios.patch(`${process.env.REACT_APP_HOST}${url}/${id}/`, data)
      .then((response) => {
        const object = response.data;
        dispatch(updateObject(object));
      })
      .catch((err) => {
        dispatch(showAlert(err));
      });
  };
};

export const requestDeleteObject = (url, id) => {
  return dispatch => {
    axios.delete(`${process.env.REACT_APP_HOST}${url}/${id}/`)
      .then(() => {
        dispatch(deleteObject(id));
      })
      .catch((err) => {
        dispatch(showAlert(err));
      });
  };
};
