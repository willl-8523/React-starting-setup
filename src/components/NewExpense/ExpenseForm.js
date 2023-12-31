import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [entreredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({ ...userInput, enteredTitle: e.target.value });

    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: e.target.value}
    // })
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({ ...userInput, enteredAmount: e.target.value });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({ ...userInput, enteredDate: e.target.value });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.targget.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: entreredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Executer notre evenement qu'on a construit dans le composant NewExpense
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entreredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="20-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
