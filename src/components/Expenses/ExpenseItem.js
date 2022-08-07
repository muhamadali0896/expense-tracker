import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__category'>{props.category}</div>
          <div className='expense-item__price'>₹{props.amount}</div>
          <button onClick={props.onClick} value={props.id}>X</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
