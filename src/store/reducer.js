// reducers.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    loading: false,
    error: null,
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
            state.tasks[index].completed = action.payload.completed;
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