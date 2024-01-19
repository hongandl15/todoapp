// TodoApp.js
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { loadTasks, deleteTask } from '../store/actions'
import Todo from './Todo';
import AddTodo from './AddTodo';
import classes from './Todolist.module.css';
const TodoApp = () => {

    const { tasks, loading } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        dispatch(loadTasks());
    }, []);


    useEffect(() => {
        setIsExiting(true);
        const timeoutId = setTimeout(() => {
            setIsExiting(false); // Change isExiting back after 1 second
        }, 100);
        return () => clearTimeout(timeoutId);
    }, [tasks]);


    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <AddTodo />
                    UnCompleted
                    <div className={`${classes.fadeIn} ${isExiting ? classes.fadeInExiting : ''}`}>
                        {tasks
                            .filter(task => !task.isCompleted) 
                            .sort((a, b) => (b.isImportant ? 1 : -1)) 
                            .map(task => (
                            <Todo className key={task.id} todo={task} onClick={() => dispatch(deleteTask(task))} />
                        ))}
                    </div>

                    Completed
                    <div>
                        {tasks.filter(task => task.isCompleted === true).map((task) => (
                            <Todo key={task.id} todo={task} onClick={() => dispatch(deleteTask(task))} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
}


export default TodoApp;