import React, { useState, useEffect } from 'react';
import classes from './Home.module.css';
import TodoList from '../components/TodoList';
import FilterBar from '../components/FilterBar';
import { useDispatch, useSelector } from "react-redux";
import { loadTasks, deleteTask } from '../store/actions';
const Important = () => {
    const { tasks, loading } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTasks());
    }, []);

    const [options, setOptions] = useState({
        isImportant: true,
        isCompleted: false,
        isOpen: true,
        isBlock: true,
        isInProgress: true,
        sortBy: 'dueDate'
    });

    const handleFilterChange = (newOptions) => {
        setOptions({ ...options, ...newOptions });
    };

    return( 
            <div className={classes.mainSection}>
                <FilterBar onFilterChange={handleFilterChange} options={options} />
                {loading ? 
                <p>Loading...</p>:  
                <TodoList options={options} tasks={tasks} />
                }
            </div>
        )
}

export default Important;