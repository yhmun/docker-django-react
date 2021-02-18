import { 
  CREATE_TODO, 
  DELETE_TODO, 
  UPDATE_TODO,
  READ_TODOS_IN_PROGRESS,
  READ_TODOS_SUCCESS,
  READ_TODOS_FAILURE
} from './actions';

export const isReadingTodos = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case READ_TODOS_IN_PROGRESS: 
      return true;
    case READ_TODOS_SUCCESS:
    case READ_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }
    case DELETE_TODO: {
      const { id } = payload;
      return state.filter(todo => todo.id !== id);
    }
    case UPDATE_TODO: {
      const { todo: updatedTodo } = payload;
      return state.map(todo => {
        if (todo.id === updatedTodo.id)
          return updatedTodo;
        else
          return todo;
      });
    }
    case READ_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case READ_TODOS_IN_PROGRESS:
      case READ_TODOS_FAILURE:
    default:
      return state;
  }
}
