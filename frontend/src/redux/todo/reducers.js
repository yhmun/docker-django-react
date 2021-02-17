import { 
  CREATE_TODO, 
  DELETE_TODO, 
  MARK_TODO_AS_COMPLETED,
  READ_TODOS_IN_PROGRESS,
  READ_TODOS_SUCCESS,
  READ_TODOS_FAILURE
} from './actions';

export const isReadingTodos = (state = false, action) => {
  const { type, payload } = action;

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
      const { text } = payload;
      return state.filter(todo => todo.description !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state.map(todo => {
        if (todo.description === text) {
          return {...todo, completed: true };
        }
        return todo;
      })
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
