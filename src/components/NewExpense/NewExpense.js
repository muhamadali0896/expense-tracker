import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = async (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    const response = await fetch('https://myexpensetracker-6eddb-default-rtdb.firebaseio.com/my_expenses.json', {
      method: 'POST',
      body: JSON.stringify(expenseData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data.name);
    const expenseData1 = {
      ...enteredExpenseData,
      id:data.name
    };
    props.onAddExpense(expenseData1);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
