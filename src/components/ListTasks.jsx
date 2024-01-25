// TodoApp.js
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import classesListTasks from './ListTasks.module.css';
import ContextMenu from './ContextMenu';
import { CSSTransition } from 'react-transition-group';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from './TodoList.module.css';
const ListTasks = ({ sort, tasks, options }) => {
    const [isExiting, setIsExiting] = useState(false);
    const [showCompleted, setShowCompleted] = useState(true);
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, task: null });

    const toggleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    };

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
        setContextMenu({ visible: false, x: 0, y: 0, task: null });
    }
        
    const FilterTasks = tasks.filter(
        task =>
            (task.isCompleted == options.isCompleted) &&
            (task.isImportant == options.isImportant || !options.isImportant) &&
            (
                options.isBlock && task.status === 'Blocked' ||
                options.isInProgress && task.status === 'In Progress' ||
                options.isOpen && task.status === 'Open'
            )   &&
            (options.searchKeyword
                ? (task.task && task.task.toLowerCase().includes(options.searchKeyword.toLowerCase()))
                : true
            )
        )
        .sort((a, b) => {
            if (b.isImportant !== a.isImportant) {
                return b.isImportant ? 1 : -1;
            }

            if (options.sortBy == 'dueDate') {
                return new Date(b.createDate) - new Date(a.createDate);
            }
            else if (options.sortBy == 'name') {
                const nameA = (a.name || '').toUpperCase();
                const nameB = (b.name || '').toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }
        })

    return (
        <>
            <div>
                <div className={classes.title} onClick={toggleShowCompleted}>
                    {showCompleted ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
                    {options.isCompleted ? "Completed (" + FilterTasks.length + ")" : "Uncompleted (" + FilterTasks.length + ")"}
                </div>
                <CSSTransition
                    in={showCompleted}
                    timeout={100}
                    classNames={{
                        enter: classesListTasks.fadeEnter,
                        exitActive: classesListTasks.fadeExit,
                    }}
                    unmountOnExit
                >
                    <div className={`${classes.fadeIn} ${isExiting ? classes.fadeInExiting : ''}`}>
                        {FilterTasks.map(task => <Todo key={task.id} todo={task} onContextMenu={handleContextMenu} />)}
                    </div>
                </CSSTransition>
            </div>

            {contextMenu.visible && (
                <ContextMenu x={contextMenu.x} y={contextMenu.y} onClose={closeContextMenu} task={contextMenu.task} />
            )}
        </>
    );
}


export default ListTasks;