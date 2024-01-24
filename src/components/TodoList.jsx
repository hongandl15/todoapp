// TodoApp.js
import React, { memo, useEffect, useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import ListTasks from './ListTasks';
const TodoList = ({options, tasks}) => {
    return (
        <>
            <>
                <AddTodo isImportant={options.isImportant} />
                <ListTasks options={options} tasks={tasks}/>
                <ListTasks options={{ ...options, isCompleted: !options.isCompleted }} tasks={tasks}/>
            </>
        </>
    );
}


export default TodoList;