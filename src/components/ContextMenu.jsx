// ContextMenu.js
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateCompleted, deleteTask } from '../store/actions';
import classes from './ContextMenu.module.css';
const ContextMenu = ({ x, y, onClose, task}) => {
    const [Task, setTask] = useState(task);
    const dispatch = useDispatch();

    const contextMenuRef = useRef(null);

    const handleChangeColor = (color) => {
        const updatedTask = { ...Task, color };
        dispatch(updateCompleted(updatedTask));
        setTask(updatedTask);
        onClose();
      };

    const handleDelete = () => {
        dispatch(deleteTask(Task));
        onClose();
      };

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
            onClose();
          }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [onClose]);

    return (
        <div ref={contextMenuRef}  className={classes.ContextMenu} style={{ position: 'absolute', top: y, left: x, border: '1px solid #ccc' }}>
            <h4>{Task.task}</h4>
            {Task.color !== 'White' && <div onClick={() => handleChangeColor('White')}>
                <div style={{
                        margin: '5px',
                        backgroundColor: 'White',
                        width: '20px',
                        height: '5px'      
                    }}></div>
                Remove Color Tag
            
            </div>}
            <div onClick={() => handleChangeColor('#90ee90')}>
                <div style={{
                    margin: '5px',
                    backgroundColor: '#90ee90',
                    width: '20px',
                    height: '5px'      
                }}></div>
                Green Tag
            </div>
            <div onClick={() => handleChangeColor('#fff8dc')}>
                <div style={{
                        margin: '5px',
                        backgroundColor: '#fff8dc',
                        width: '20px',
                        height: '5px'      
                    }}></div>
                Yellow Tag </div>
            <div onClick={() => handleChangeColor('#fa8072')}>
                <div style={{
                        margin: '5px',
                        backgroundColor: '#fa8072',
                        width: '20px',
                        height: '5px'      
                    }}></div>
                Red Tag </div>
            <hr />
            <div onClick={() => handleDelete()}>Delete</div>
        </div>
    );
}

export default ContextMenu;
