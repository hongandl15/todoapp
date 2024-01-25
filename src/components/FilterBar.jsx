import React, { useEffect, useState } from 'react';
import classes from './FilterBar.module.css';
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
const FilterBar = ({ onFilterChange, options }) => {

    const [taskText, setTaskText] = useState('');

    const handleInputChange = (e) => {
        setTaskText(e.target.value);
        const searchKeyword = e.target.value
        const newOptions = {
            searchKeyword: searchKeyword
        };
        console.log(newOptions)
        onFilterChange(newOptions);
    };

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
        <div style={{ color: '#000000', fontWeight: 'bold', lineHeight: '25px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <FaSearch style={{ marginRight: '20px', fontSize: '40px' }} />
                <input
                    className={classes.searchBar}
                    type="text"
                    value={taskText}
                    onChange={handleInputChange}
                    placeholder="Search task"
                    maxLength={100}
                />
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