import React from 'react';
import AddTaskForm from '../components/Form/AddTaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/actions/taskActions.js';

function AddTaskPage() {
  const { counter, taskList } = useSelector((state) => state); // Utilisation du sélecteur approprié ou ajustez-le selon votre configuration
  const dispatch = useDispatch();
  const onAddTask = (item) => dispatch(addTask(item));

  return (
    <div>
      <AddTaskForm onSubmit={onAddTask} />
    </div>
  );
}
export default AddTaskPage;
