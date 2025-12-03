export const ADD_TASK = "task/add";
export const DELETE_TASK = "task/delete";
export const CLEAR_TASK = "task/clear";

export const addTask = (content) => ({
  type: ADD_TASK,
  payload: content,
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

export const clearTask = () => ({
  type: CLEAR_TASK,
});
