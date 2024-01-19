// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            state.tasks.splice(index, 1);
        },
        completedTask: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );

            state.tasks = [
                ...state.tasks.slice(0, index), // elements before the updated task
                { ...state.tasks[index], task: action.payload.task }, // updated task
                ...state.tasks.slice(index + 1), // elements after the updated task
            ];
        },
        getTaskById: (state, action) => {
            const taskId = action.payload;
            const task = state.tasks.find((task) => task.id === taskId);

            if (task) {
                state.selectedTask = task;
            } else {
                // If task with given ID is not found, you can handle it accordingly
                console.error(`Task with ID ${taskId} not found.`);
            }
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