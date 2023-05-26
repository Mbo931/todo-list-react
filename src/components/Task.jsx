import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { updateTask } from '../store/actions/taskActions.js';

function Task({ task }) {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    const updatedTask = { ...task, isDone: !task.isDone };
    dispatch(updateTask(updatedTask));
  };

  return (
    <div>
      {task.text}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default Task;
