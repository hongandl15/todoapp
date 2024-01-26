import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {updateCompleted} from '../store/actions'
import { useNavigate } from 'react-router-dom';
import classes from './TodoDetail.module.css';
const TodoDetail = ({taskId}) => {
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const handleEditToggle = () => {
        setIsEdit((prevIsEdit) => !prevIsEdit);
      };

    const editSave = () => {
        dispatch(updateCompleted(task));
        handleEditToggle();
    };

    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1);
    };

    const handleInputChange = (e) => {
        setTask((prevTask) => {
          return {
            ...prevTask,
            task: e.target.value
          };
        });
      };

    async function loadTask(taskId) {
      try {
        const response = await fetch(`https://65a7949394c2c5762da704b3.mockapi.io/tasks/${taskId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch task');
        }
        const taskData = await response.json();
        setTask(taskData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }


    useEffect(() => {
        loadTask(taskId);
      }, []); 


      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!task) {
        return <div>No task found</div>;
      }

    return (
        <div className={classes.TaskDetail}>
            <h1>Id: {task.id}</h1>
            <div style={{display: 'flex', fontSize: '25px'}}>
              <div>Status: </div>
              <div
               style={{ 
                marginLeft:'10px',
                color:
                task.status === 'In Progress' ? 'green' :
                task.status === 'Blocked' ? 'red' :
                task.status === 'Open' ? 'blue' :
                'black'
              }}
              >{task.status}</div>
        
            </div>
            {isEdit ? (
                <div className={classes.TaskDes}>
                    <input type='text' onChange={handleInputChange} defaultValue={task.task} />
                    <button onClick={(e) => editSave(e)}>Save</button>
                </div>
            ) : (
                <div className={classes.TaskDes}>
                  <div>{task.task}</div>
                  <button onClick={handleEditToggle}>Edit</button>
                </div>
            )}

            <div>
                <button style={{marginLeft: '0px'}} onClick={handleBack}>Back</button>
            </div>

        </div>
    );
}

export default TodoDetail;