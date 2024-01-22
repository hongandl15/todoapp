import React from 'react';
import classes from './Home.module.css';
import TodoList from '../components/TodoList';
const Home = () => {
    return( 
        <div className={classes.mainSection}>
            <TodoList/>
        </div>
    );
}

export default Home;