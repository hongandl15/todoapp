//App.jsx
import './App.css'
import TodoApp from './components/TodoApp'
import { RouterProvider,} from 'react-router-dom';
import {createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import TasksPage from './pages/Tasks';
import { routes } from './routes/routes';

function App() {
  return <RouterProvider router={routes} />;
}
 
export default App