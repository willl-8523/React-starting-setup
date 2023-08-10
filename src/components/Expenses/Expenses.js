import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [selectedValue, setSelectedValue] = useState('2020');

  // Nous permet de ramener la valeur de onchange qui est dans ExpensesFilter
  const filteredChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    // console.log(selectedYear);
    setSelectedValue(selectedYear);
  };

  const filterExpenses = props.expenses.filter(expense => (expense.date.getFullYear()).toString() === selectedValue);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectValue={selectedValue}
        onFilteredChange={filteredChangeHandler}
      />
      {filterExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
