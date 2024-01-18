// actions.js
import { apiCallBegan } from "./api";
import {apiRequested, getTasks, apiRequestFailed, removeTask} from "./reducer"

  const url = "/tasks";
  export const loadTasks = () =>
      apiCallBegan({
          url,
          onStart: apiRequested.type,
          onSuccess: getTasks.type,
          onError: apiRequestFailed.type,
      });
  
  export const addNewTask = (task) =>
      apiCallBegan({
          url,
          method: "POST",
          data: task,
          onSuccess: addTask.type,
      });
  
  export const updateCompleted = (task) =>
      apiCallBegan({
          // /tasks/6
          url: `${url}/${task.id}`,
          method: "PATCH",
          data: task,
          onSuccess: completedTask.type,
      });
  
  export const deleteTask = (task) =>
      apiCallBegan({
          // /tasks/6
          url: `${url}/${task.id}`,
          method: "DELETE",
          onSuccess: removeTask.type,
      });