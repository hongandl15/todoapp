// TodoApp.js
import React , { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, loadTodos, toggleTodo } from '../actions/actions';
import Todo from './Todo';
 
const TodoApp = ({data, dispatchAddTodo, dispatchToggleTodo, dispatchLoadTodo }) => {

  const [showCompleted, setShowCompleted] = useState(true); // => state này để sử dụng cho chức năng filter uncomplete
  const filteredTodos = showCompleted? data.todos : data.todos.filter((todo) => !todo.completed);
 
  const handleAddTodo = () => {
    const text = prompt('Enter new todo:');
    if (text) {
      dispatchAddTodo(text);
    }
  };
 
  //Load dữ liệu từ local storage khi component được load lần đầu
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log("first render")
    if (storedTodos) {
      dispatchLoadTodo(storedTodos)
    }
  }, []);
 
 
    //Cập nhật lại dữ liệu cho local Storage khi có cập nhật
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data.todos));
    console.log("update data")
    console.log(data.todos)
  }, [data.todos]);
 
 
  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? 'Show Uncompleted' : 'Show All'}
      </button>
      <ul>
        {Array.isArray(filteredTodos) && filteredTodos.map(todo => (
          <Todo key={todo.id} todo={todo} onToggle={() => dispatchToggleTodo(todo.id)} />
        ))}
      </ul>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
 
const mapStateToProps = state => ({
  data: state.todos,
});
 
const mapDispatchToProps = dispatch => ({
  dispatchAddTodo: text => dispatch(addTodo(text)),
  dispatchToggleTodo: id => dispatch(toggleTodo(id)),
  dispatchLoadTodo: todos => dispatch(loadTodos(todos))
});
 
 
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);