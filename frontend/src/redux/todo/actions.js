export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = (text) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});

export const READ_TODOS_IN_PROGRESS = 'READ_TODOS_IN_PROGRESS';
export const readTodosInProgress = () => ({
  type: READ_TODOS_IN_PROGRESS,
});

export const READ_TODOS_SUCCESS = 'READ_TODOS_SUCCESS';
export const readTodosSuccess = (todos) => ({
  type: READ_TODOS_SUCCESS,
  payload: { todos },
});

export const READ_TODOS_FAILURE = 'READ_TODOS_FAILURE';
export const readTodosFailure = () => ({
  type: READ_TODOS_FAILURE,
});
