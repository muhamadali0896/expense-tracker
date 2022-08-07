import React, { useState, useRef } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');

  const titleRef = useRef('');
  const amountRef = useRef('');
  const dateRef = useRef('');
  const categoryRef= useRef('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if(enteredTitle.trim().length === 0){
      titleRef.current.style.borderColor = "red";
      return;
    }else{
      titleRef.current.style.borderColor = "black";
    }
    if(enteredAmount.trim().length === 0){
      amountRef.current.style.borderColor = "red";
      return;
    }else{
      amountRef.current.style.borderColor = "black";
    }
    if(enteredDate.trim().length === 0){
      dateRef.current.style.borderColor = "red";
      return;
    }else{
      dateRef.current.style.borderColor = "black";
    }
    if(enteredCategory.trim().length === 0){
      categoryRef.current.style.borderColor = "red";
      return;
    }else{
      categoryRef.current.style.borderColor = "black";
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      category:enteredCategory,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredCategory('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            ref={titleRef}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Category</label>
          <select value={enteredCategory} ref={categoryRef} onChange={categoryChangeHandler}>
            <option value='Food'>Food</option>
            <option value='Medical'>Medical</option>
            <option value='Rent'>Rent</option>
            <option value='EMI'>EMI</option>
            <option value='Others'>Others</option>
            <option value='Cloths'>Cloths</option>
            <option value='Lend'>Lend</option>
           <option value='Travel'>Travel</option>
           <option value='Recharge'>Recharge</option>
            <option value='Loan'>Loan</option>
      </select>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            ref={amountRef}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            ref={dateRef}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
