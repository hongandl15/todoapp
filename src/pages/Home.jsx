import React from 'react';
import classes from './Home.module.css';
import TodoApp from '../components/TodoApp';
const Home = () => {
    return( 
        <div className={classes.mainSection}>
            <TodoApp/>
        </div>
    );
}

export default Home;