import React, { useEffect, useState } from 'react';
import classes from './FilterBar.module.css';
import { FaTasks } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
const FilterBar = ({ onFilterChange, options }) => {

    const handleSortChange = (e) => {
        const selectedValue = e.target.value;
        const newOptions = {
            sortBy: selectedValue
        };
        onFilterChange(newOptions);
    };

    const handleCheckboxChange = (e) => {
        const checkboxName = e.target.name;
        const checkboxValue = e.target.checked;

        const newOptions = {
            [checkboxName]: checkboxValue,
        };

        onFilterChange(newOptions);
    };

    return (
        <div style={{ color: '#000000', fontWeight: 'bold', lineHeight: '25px', display:'flex', justifyContent:'right', alignItems:'center' }}>
            <IoFilter style={{ marginRight: '20px', fontSize: '40px' }} />
            <div className={classes.FilterBar}>
                <div className={classes.select}>
                    <select name="" id="" onChange={handleSortChange}>
                        <option value='dueDate'>Sort by due date</option>
                        <option value='name'>Sort by name</option>
                    </select>
                </div>
                <label>
                    <input
                        type="checkbox"
                        name="isOpen"
                        checked={options.isOpen}
                        onChange={handleCheckboxChange}
                    />
                    Open
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isBlock"
                        checked={options.isBlock}
                        onChange={handleCheckboxChange}
                    />
                    Blocked
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isInProgress"
                        checked={options.isInProgress}
                        onChange={handleCheckboxChange}
                    />
                    In Progress
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isCompleted"
                        checked={options.isCompleted}
                        onChange={handleCheckboxChange}
                    />
                   Show Completed First
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isImportant"
                        checked={options.isImportant}
                        onChange={handleCheckboxChange}
                    />
                    Show Important Only
                </label>
            </div>
        </div>
    );
}

export default FilterBar;