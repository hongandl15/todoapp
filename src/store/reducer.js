// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    loading: false,
    error: null,
    selectedTask: null,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        // action: function
        apiRequested: (state, action) => {
            state.loading = true;
        },
        apiRequestFailed: (state, action) => {
            state.loading = false;
        },
        getTasks: (state, action) => {
            state.tasks = action.payload;
            state.loading = false;
        },
        addTask: (state, action) => {
            console.log('add task')
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            state.tasks.splice(index, 1);
        },
        completedTask: (state, action) => {
            console.log('update task')
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );

            state.tasks = [
                ...state.tasks.slice(0, index),
                {
                    ...state.tasks[index],
                    task: action.payload.task,
                    isCompleted: action.payload.isCompleted,
                    isImportant: action.payload.isImportant,
                    color: action.payload.color,
                    status: action.payload.status
                },
                ...state.tasks.slice(index + 1),
            ];
        },
    },
});

export const {
    apiRequested,
    apiRequestFailed,
    getTasks,
    addTask,
    removeTask,
    completedTask,
} = taskSlice.actions;
export default taskSlice.reducer;