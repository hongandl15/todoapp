import React from 'react';
import classes from './Home.module.css';
import TodoDetail from '../components/TodoDetail';
import { useParams } from 'react-router-dom';
const TaskDetailPage = () => {
    const { taskId } = useParams();
    console.log(taskId)
    return( 
        <>
            <div className={classes.mainSection}>
                Tasks Detail Page
                <TodoDetail taskId={taskId}/>
            </div>

        </>
    );
}

export default TaskDetailPage;