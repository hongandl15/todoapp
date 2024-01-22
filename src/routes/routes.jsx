import {createBrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Important from "../pages/Important";
import TasksPage from "../pages/Tasks";
import RootLayout from "../pages/Root";
import TaskDetailPage from '../pages/TaskDetailPage';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'tasks',
        children: [
          { index: true, element: <TasksPage /> },
          {
            path: ':taskId',
            id: 'task-id',
            element: <TaskDetailPage />,
          }, 
        ],
      },
    ],

  },
  {
    path: '/todoapp',
    element: <RootLayout/>,
    errorElement: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
    ]
  }
]);
