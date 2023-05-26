export const UPDATE_TASK = 'UPDATE_TASK';

export const updateTask = (updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: updatedTask,
  };
};
