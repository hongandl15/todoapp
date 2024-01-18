import React from 'react';
import classes from './Sidebar.module.css';

import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return( 
        <div className={classes.sidebar}>
            <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/important"
            >
              Important
            </NavLink>
          </li>
        </ul>
      </nav>
        </div>
    );
}

export default Sidebar;