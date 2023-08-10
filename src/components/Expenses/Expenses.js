import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [selectedValue, setSelectedValue] = useState('2020');

  // Nous permet de ramener la valeur de onchange qui est dans ExpensesFilter
  const filteredChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    // console.log(selectedYear);
    setSelectedValue(selectedYear);
  };

  const filterExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedValue
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectValue={selectedValue}
        onFilteredChange={filteredChangeHandler}
      />
      <ExpensesList expenses={filterExpenses} />
    </Card>
  );
};

export default Expenses;
