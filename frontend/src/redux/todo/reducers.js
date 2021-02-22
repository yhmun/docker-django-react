import { 
  CREATE_TODO, 
  DELETE_TODO, 
  UPDATE_TODO,
  READ_TODOS_IN_PROGRESS,
  READ_TODOS_SUCCESS,
  READ_TODOS_FAILURE
} from './actions';

const initialState = {
  isReading: false,
  data: [],
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    case DELETE_TODO: {
      const { id } = payload;
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== id),
      };
    }
    case UPDATE_TODO: {
      const { todo: updatedTodo } = payload;
      return {
        ...state,
        data: state.data.map(todo => {
          if (todo.id === updatedTodo.id)
            return updatedTodo;
          else
            return todo;
        }),
      };
    }
    case READ_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isReading: true,
      };
    }    
    case READ_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        isReading: false,
        data: todos,
      };
    }
    case READ_TODOS_FAILURE: {
      return {
        ...state,
        isReading: false,
      };
    }
    default:
      return state;
  }
}
