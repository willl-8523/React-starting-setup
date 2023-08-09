import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // On executera cet evenement dans le composant enfant (ExpenseForm)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log("In newExpense", expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* onSaveExpenseData => notre evenement personalisé */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
