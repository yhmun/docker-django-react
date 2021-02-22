export const CREATE_OBJECT = 'CREATE_OBJECT';
export const createObject = object => ({
  type: CREATE_OBJECT,
  payload: { object },
});

export const READ_OBJECTS_IN_PROGRESS = 'READ_OBJECTS_IN_PROGRESS';
export const readObjectsInProgress = () => ({
  type: READ_OBJECTS_IN_PROGRESS,
});

export const READ_OBJECTS_SUCCESS = 'READ_OBJECTS_SUCCESS';
export const readObjectsSuccess = objects => ({
  type: READ_OBJECTS_SUCCESS,
  payload: { objects },
});

export const READ_OBJECTS_FAILURE = 'READ_OBJECTS_FAILURE';
export const readObjectsFailure = () => ({
  type: READ_OBJECTS_FAILURE,
});

export const UPDATE_OBJECT = 'UPDATE_OBJECT';
export const updateObject = object => ({
  type: UPDATE_OBJECT,
  payload: { object },
});

export const DELETE_OBJECT = 'DELETE_OBJECT';
export const deleteObject = id => ({
  type: DELETE_OBJECT,
  payload: { id },
});
