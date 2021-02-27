import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import sampleItems from '../../assets/jsons/sample-appointments.json'

const sampleEntities = {};
sampleItems.forEach((item, id) => {
  sampleEntities[id] = {id: id, type: 'sample', ...item};
});

const name = 'appointments';
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
      if (items && items.length > 0) {
        const newEntities = {};
        action.payload.forEach((item) => {
          newEntities[item.id] = item
        });
        state.entities = newEntities;
      } else {
        state.entities = sampleEntities;
      }
      state.status = 'idle';
    },
    entitiesLoadFailed(state, action) {
      state.entities = sampleEntities;
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

export const removeEntity = (id, type) => {
  return dispatch => {    
    if (type && type === 'sample') {
      dispatch(entityRemoved(id));
    } else {
      axios.delete(`${process.env.REACT_APP_HOST}/api/${name}/${id}/`)
      .then(() => {
        dispatch(entityRemoved(id));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };
};

export const selectStatus = (state) => state.appointments.status;
export const selectEntities = (state) => Object.values(state.appointments.entities);

export default Slice.reducer;
