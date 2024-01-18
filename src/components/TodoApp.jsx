// TodoApp.js
import React , { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import {loadTasks, deleteTask} from '../store/actions'
import Todo from './Todo';

 
const TodoApp = () => {

  const { tasks, loading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadTasks());
  }, []);
  return (
      <>
          {loading ? (
              <p>Loading...</p>
          ) : (
              <div>
                  {tasks.map((task) => (
                    <Todo key={task.id} todo={task} onClick={ () => dispatch(deleteTask(task))}/>
                        
                     // <p key={task.id}>{task.task}</p>
                  ))}
              </div>
          )}
      </>
  );
}

 
export default TodoApp;