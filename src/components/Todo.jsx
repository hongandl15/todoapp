import React from 'react';
import { NavLink } from 'react-router-dom';

const Todo = ({ todo, onClick }) => {
    return (
        <li
        // style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        // onClick={onClick}
        >
            <NavLink
                to={`/tasks/${todo.id}`}
            >
                {todo.task}
            </NavLink>
            
        </li>
    );
}

export default Todo;