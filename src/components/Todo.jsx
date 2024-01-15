import React from 'react';

const Todo = ({todo, onToggle}) => {
    return( 
        <li
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={onToggle}
            >
            {todo.text}
        </li>
    );
}

export default Todo;