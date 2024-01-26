import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { updateCompleted } from '../store/actions';
import { FaStar } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";


const Todo = ({todo, onContextMenu }) => {
    const [task, setTask] = useState(todo);
    const dispatch = useDispatch();

    const handleUpdateStatus = (isCompleted, isImportant) => {
        setTask(prevTask => {
            const updatedTask = {
                ...prevTask,
                isCompleted: isCompleted,
                isImportant: isImportant
            };
            dispatch(updateCompleted(updatedTask));
            return updatedTask;
        });
    }

    useEffect(() => {
        setTask(todo)
    }, [todo]);

    const handleContextMenu = (event) => {
        event.preventDefault();
        onContextMenu(event.clientX, event.clientY, task);
    }

    return (
        <div style={{ display: 'flex' }} onContextMenu={handleContextMenu}>
            <div style={{ padding: "3px", fontSize: '25px', lineHeight: '4.5rem', color: 'blue' }} onClick={() => handleUpdateStatus(!task.isCompleted, task.isImportant)}>
                {task.isCompleted ? <MdOutlineDone style={{ color: 'green' }} /> : <CiCircleCheck />}
            </div>
            <NavLink style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                to={`/tasks/${task.id}`}
            >
                <div className={classes.TodoTag} style={{backgroundColor: task.color}} >
                    <h4 className={classes.TodoName} 
                        style={{ 
                            textDecoration: task.isCompleted ? 'line-through' : 'none' 
             
                        }}
                    >{task.task}</h4>
                    <div className={classes.TodoStatus}
                        style={{ color:
                            task.status === 'In Progress' ? 'green' :
                            task.status === 'Blocked' ? 'red' :
                            task.status === 'Open' ? 'blue' :
                            'black' 
                        }}
                    >{task.status}</div>
                </div>
            </NavLink>
            <div style={{ padding: "3px", fontSize: '25px', lineHeight: '4.5rem', position: 'relative', left: '-40px' }} onClick={() => handleUpdateStatus(task.isCompleted, !task.isImportant)}>
                {todo.isImportant ? <FaStar style={{ color: '#ffff00' }} /> : <FaStar />}
            </div>
        </div>
    );
}

export default Todo;