import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../store/actions/taskActions.js';

function Task({ task }) {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    const updatedTask = { ...task, isDone: !task.isDone };
    dispatch(updateTask(updatedTask));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask(task));
  };

  return (
    <div>
      {task.text}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleCheckboxChange}
      />
      <button onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
