import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { updateCompleted } from '../store/actions';
import { FaStar } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
const Todo = ({ todo, onClick }) => {
    const [task, setTask] = useState(todo);
    const [isExiting, setIsExiting] = useState(false);
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

    return (    
    
        <div style={{ display: 'flex' }}>
            <div style={{padding: "3px" }} onClick={() => handleUpdateStatus(!todo.isCompleted, todo.isImportant)}>
                {todo.isCompleted ? <CiCircleCheck/> : <MdOutlineDone style={{color: 'green'}}/>}
            </div>
            <NavLink style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                to={`/tasks/${todo.id}`}
            >
                <div className={classes.TodoTag}  >
                    <h4 style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                        {todo.task}
                    </h4>
                </div>
            </NavLink>
            <div style={{padding: "3px", fontSize:'25px' }} onClick={() => handleUpdateStatus(todo.isCompleted, !todo.isImportant)}>
                {todo.isImportant ? <FaStar style={{color: 'yellow'}}/>  : <FaStar/>}
            </div>
        </div>
    );
}

export default Todo;