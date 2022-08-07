import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const curDate = new Date();
  const curMonth = curDate.toLocaleString('en-US', {month: 'short'});
  const [filteredYear, setFilteredYear] = useState(curDate.getFullYear().toString());
  const [filteredMonth, setFilteredMonth] = useState(curMonth);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterChangeMonthHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
    
  };

  const filteredExpenses = props.items.filter((expense) => {
    const date = expense.date;

    const dateStr = date.toLocaleString('en-US', {month: 'short'});
    return ((expense.date.getFullYear().toString() === filteredYear) && (dateStr === filteredMonth));
  });


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={filteredYear}
          selectedMonth={filteredMonth}
          onChangeFilter={filterChangeHandler}
          onChangeFilterMonth={filterChangeMonthHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {<ExpensesList items={filteredExpenses} onUpdatedItems={props.onUpdatedItems} />}
      </Card>
    </div>
  );
};

export default Expenses;
