// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer'
import api from "./middleware/api";

const store = configureStore({
  reducer: {
      tasks: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      api,
  ],
  
});
 
export default store;