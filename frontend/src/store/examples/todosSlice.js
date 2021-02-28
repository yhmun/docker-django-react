import axios from 'axios';
import { createSlice, createSelector } from '@reduxjs/toolkit';

const name = 'todos';
const Slice = createSlice({
  name,
  initialState: {
    status: 'idle',
    entities: [],
  },
  reducers: {
    entityAdded(state, action) {
      const item = action.payload;
      state.entities[item.id] = item;
    },
    entityRemoved(state, action) {
      const id = action.payload;
      delete state.entities[id];
    },
    entityUpdated(state, action) {
      const item = action.payload;
      state.entities[item.id] = item;
    },
    entitiesLoading(state, action) {
      state.status = 'loading';
    },
    entitiesLoaded(state, action) {
      const items = action.payload;
      const newEntities = {};
      action.payload.forEach((item) => {
        newEntities[item.id] = item
      });
      state.entities = newEntities;
      state.status = 'idle';
    },
    entitiesLoadFailed(state, action) {
      state.status = 'idle';
    },
  },
});

export const { 
  entitiesLoading, entitiesLoaded, entitiesLoadFailed, 
  entityAdded, entityUpdated, entityRemoved,
} = Slice.actions;

export const loadEntities = () => {
  return dispatch => {
    dispatch(entitiesLoading());
    axios.get(`${process.env.REACT_APP_HOST}/api/${name}/?ordering=id`)
      .then((response) => {
        dispatch(entitiesLoaded(response.data));
      })
      .catch((err) => {
        dispatch(entitiesLoadFailed());
        console.log(err);
      });
  };
};

export const addEntity = (data) => {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_HOST}/api/${name}/`, data)
      .then((response) => {
        const item = response.data;
        dispatch(entityAdded(item));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeEntity = (id) => {
  return dispatch => {    
    axios.delete(`${process.env.REACT_APP_HOST}/api/${name}/${id}/`)
    .then(() => {
      dispatch(entityRemoved(id));
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const updateEntity = (id, data) => {
  return dispatch => {
    axios.patch(`${process.env.REACT_APP_HOST}/api/${name}/${id}/`, data)
      .then((response) => {
        const item = response.data;
        dispatch(entityUpdated(item));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const selectStatus = (state) => state.todos.status;
export const selectEntities = (state) => Object.values(state.todos.entities);

export const selectTodos = (state) => Object.values(state.todos.entities);

export const selectIncompletedTodos = createSelector(
  selectTodos,
  (todos) => todos.filter(todo => !todo.completed),
);

export const selectCompletedTodos = createSelector(
  selectTodos,
  (todos) => todos.filter(todo => todo.completed),
);

export default Slice.reducer;
