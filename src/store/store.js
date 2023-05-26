import { createStore } from 'redux';

const initialState = {
    counter: 0,
    taskList: [{ text: 'Tache 1', isDone: false }, { text: 'Tache 2', isDone: true }]
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
      default:
        return state;
    }
  };
  

const store = createStore(reducer);

export default store;
