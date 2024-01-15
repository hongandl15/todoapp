// reducers.js
const initialState = {
    todos: [],
};
 
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { id: action.payload.id, text: action.payload.text, completed: false }],
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'LOAD_TODOS':
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
};
 
export default todoReducer;