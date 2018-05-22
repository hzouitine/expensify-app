import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
    AddExpensePage Componenet
    <ExpenseForm 
    onSubmit = {(expense) => {
        props.dispatch(addExpense(expense));
    }}
    />
    </div>
);

export default connect()(AddExpensePage);