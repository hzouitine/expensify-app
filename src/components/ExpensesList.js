
import React from "react";
import { connect } from 'react-redux';

const x = 5;

//
const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList : {props.expenses.length}</h1>
    </div>
);

const ConnectExpenseList = connect((state) => {
    return { expenses : state.expenses};
})(ExpenseList);

export default ConnectExpenseList;