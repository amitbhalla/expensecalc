import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = ({ items }) => {
  const expenseItems = items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });
  return <Card className="expenses">{expenseItems}</Card>;
};

export default Expenses;
