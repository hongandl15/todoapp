import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Sidebar.module.css';
import { FaTasks } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import '../App.css';

const Sidebar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  const isTabActive = (tab) => {
    return location.pathname === `/${tab}`;
  };

  const handleNavLinkClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={classes.sidebar}>
      <nav>
        <ul>
          <li>
            <div>
              <HiOutlineBars3 style={{fontSize:'25px', color:"black", marginBottom:'10px'}}/>
            </div>
          </li>
          <li>
            <NavLink
              to="/"
              end
              className={isTabActive('') ? classes.active : ''}
              onClick={() => handleNavLinkClick('home')}
            >
              <IoHomeOutline className='icon'/>Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className={isTabActive('tasks') ? classes.active : ''}
              onClick={() => handleNavLinkClick('tasks')}
            >
              <FaTasks className='icon'/>Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/important"
              className={isTabActive('important') ? classes.active : ''}
              onClick={() => handleNavLinkClick('important')}
            >
              <FaRegStar className='icon'/>Important
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
