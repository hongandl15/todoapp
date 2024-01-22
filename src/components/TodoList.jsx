// TodoApp.js
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { loadTasks, deleteTask } from '../store/actions'
import Todo from './Todo';
import AddTodo from './AddTodo';
import classes from './TodoList.module.css';
import ContextMenu from './ContextMenu';
const TodoList = () => {
    const { tasks, loading } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [isExiting, setIsExiting] = useState(false);
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, task: null});

    useEffect(() => {
        dispatch(loadTasks());
    }, []);

    useEffect(() => {
        setIsExiting(true);
        const timeoutId = setTimeout(() => {
            setIsExiting(false); 
        }, 100);
        return () => clearTimeout(timeoutId);
    }, [tasks]);

    const handleContextMenu = (x, y, task) => {
        setContextMenu({ visible: true, x, y, task });
    }

    const closeContextMenu = () => {
        setContextMenu({ visible: false, x: 0, y: 0, task: null});
    }


    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <AddTodo />
                    <div className={classes.title}>Uncompleted</div>
                    <div className={`${classes.fadeIn} ${isExiting ? classes.fadeInExiting : ''}`}>
                        {tasks
                            .filter(task => !task.isCompleted) 
                            .sort((a, b) => {
                                if (a.isImportant !== b.isImportant) {
                                  return b.isImportant ? 1 : -1;
                                } else {
                                  return !a.isImportant && !b.isImportant ? a.color.localeCompare(b.color) : 0;
                                }
                              })
                            .map(task => (
                            <Todo key={task.id} todo={task} onContextMenu={handleContextMenu}  />
                        ))}
                    </div>

                    <div className={classes.title}>Completed</div>
                    <div className={`${classes.fadeIn} ${isExiting ? classes.fadeInExiting : ''}`}>
                        {tasks
                            .filter(task => task.isCompleted)
                            .sort((a, b) => (b.isImportant ? 1 : -1)) 
                            .map((task) => (
                            <Todo key={task.id} todo={task} onContextMenu={handleContextMenu}  />
                        ))}
                    </div>

                    {contextMenu.visible && (
                     <ContextMenu x={contextMenu.x} y={contextMenu.y} onClose={closeContextMenu} task={contextMenu.task} />
            )}
                </>
            )}
        </>
    );
}


export default TodoList;