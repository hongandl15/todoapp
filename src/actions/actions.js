// actions.js
const min = 0;
const max = 1000000;
 
export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    id: Math.floor(Math.random() * (max - min + 1)) + min,
    text,
  },
});
 
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
 
export const loadTodos = todos => ({
    type: 'LOAD_TODOS',
    payload: todos,
  });