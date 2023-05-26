export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_TASK = 'ADD_TASK';

export const updateTask = (updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: updatedTask,
  };
};

export const deleteTask = (deletedTask) => {
    return {
        type: DELETE_TASK,
        payload: deletedTask
    }
}

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  };
};

