import { 
  CREATE_OBJECT, 
  READ_OBJECTS_IN_PROGRESS,
  READ_OBJECTS_SUCCESS,
  READ_OBJECTS_FAILURE,
  UPDATE_OBJECT,
  DELETE_OBJECT,
} from './actions';

const initialState = {
  data: [],
  isReading: false,
};

export const objects = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_OBJECT: {
      const { object } = payload;
      return {
        ...state,
        data: state.data.concat(object),
      };
    }
    case READ_OBJECTS_IN_PROGRESS: {
      return {
        ...state,
        isReading: true,
      };
    }
    case READ_OBJECTS_SUCCESS: {
      const { objects } = payload;

      return {
        ...state,
        data: objects,
        isReading: false,
      };
    }
    case READ_OBJECTS_FAILURE: {
      return {
        ...state,
        isReading: false,
      };
    }
    case UPDATE_OBJECT: {
      const { object: updatedObject } = payload;

      return {
        ...state,
        data: state.data.map(object => {
          if (object.id === updatedObject.id) 
            return updatedObject;
          else
            return object;
        }),
      }
    }
    case DELETE_OBJECT: {
      const { id } = payload;

      return {
        ...state,
        data: state.data.filter(object => object.id !== id),
      };
    }
    default: {
      return state;
    }
  }
};
