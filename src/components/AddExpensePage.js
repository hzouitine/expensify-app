import React from 'react';
import ExpenseForm from './ExpenseForm';
const AddExpensePage = () => (
    <div>
    AddExpensePage Componenet
    <ExpenseForm 
    onSubmit = {(expense) => {
        console.log(expense);
    }}
    />
    </div>
);

export default AddExpensePage;