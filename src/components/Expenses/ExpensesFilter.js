import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandlerYear = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const onMonthChangeFilter = (event) => {
    props.onChangeFilterMonth(event.target.value);
  };

  return (
    <React.Fragment>
      <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={dropdownChangeHandlerYear}>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
        </select>
      </div>
    </div>
    <div className='expenses-filter'>
    <div className='expenses-filter__control'>
      <label>Filter by month</label>
      <select value={props.selectedMonth} onChange={onMonthChangeFilter}>
        <option value='Jan'>Jan</option>
        <option value='Feb'>Feb</option>
        <option value='Mar'>Mar</option>
        <option value='Apr'>Apr</option>
        <option value='May'>May</option>
        <option value='Jun'>Jun</option>
        <option value='Jul'>Jul</option>
        <option value='Aug'>Aug</option>
        <option value='Sep'>Sep</option>
        <option value='Oct'>Oct</option>
        <option value='Nov'>Nov</option>
        <option value='Dec'>Dec</option>
      </select>
    </div>
  </div>
    </React.Fragment>
    
  );
};

export default ExpensesFilter;
