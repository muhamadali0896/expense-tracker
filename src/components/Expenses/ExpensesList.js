import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  const deleteExpenseHandler=async (event)=>{
    try {
      console.log("event:"+event.target.value);
      const response = await fetch(`https://myexpensetracker-6eddb-default-rtdb.firebaseio.com/my_expenses/${event.target.value}.json`,{
            method: 'DELETE'
          });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const newItems = props.items.filter((expense)=>{
        return (expense.id !== event.target.value);
      });
      props.onUpdatedItems(newItems);
    } catch (error) {
     console.log(error);
    }
  };

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          category={expense.category}
          amount={expense.amount}
          date={expense.date}
          onClick={deleteExpenseHandler}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
