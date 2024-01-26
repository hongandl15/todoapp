// AddTaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../store/actions';
import classes from './AddTodo.module.css';
const AddTodo = ({isImportant}) => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') {
      return;
    }
    
    dispatch(addNewTask({task: taskText, isImportant: isImportant, status: 'Open'}));
    setTaskText('');
  };

  return (
    <form onSubmit={handleAddTask}>
      <input className={classes.addTodo}
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Add a new task"
        maxLength={100}
      />
      <button className={classes.addBtn}  type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
