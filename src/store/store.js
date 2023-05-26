import { createStore } from 'redux';

const initialState = {
  counter: 0,
  taskList: [{ text: 'Tache 1', isDone: false }, { text: 'Tache 2', isDone: true }]
};

export const ADD_TASK = 'ADD_TASK';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TASK':
      const updatedTaskList = state.taskList.map((task, index) => {
        if (index === action.payload.index) {
          return {
            text: action.payload.text,
            isDone: action.payload.isDone
          };
        }
        return task;
      });
      return {
        ...state,
        taskList: updatedTaskList
      };
    case 'DELETE_TASK':
      const filteredTaskList = state.taskList.filter((task, index) => index !== action.payload.index);
      return {
        ...state,
        taskList: filteredTaskList
      };
    case ADD_TASK:
      if (action.payload.trim() === '') {
        return state;
      }

      if (state.taskList.find((task) => task.text === action.payload)) {
        return {
          ...state,
          message: `La tâche "${action.payload}" existe déjà.`
        };
      }

      return {
        ...state,
        taskList: [...state.taskList, { text: action.payload, isDone: false }]
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
