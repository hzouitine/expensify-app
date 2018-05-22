console.log("app.js");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Link,NavLink, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense,removeExpense,editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
let id = store.dispatch(addExpense({ description : 'Water Bill', amount : 1000})).expense.id;
store.dispatch(editExpense(id, { updates : { description : 'Water Bill !'}}));

store.dispatch(addExpense({ description : 'Rent', amount : 44, createdAt : 121299}));
store.dispatch(sortByAmount());
id = store.dispatch(addExpense({ description : 'Gas Bill'})).expense.id;
store.dispatch(removeExpense({ id }));
store.dispatch(setTextFilter("bill"));
const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx,document.getElementById("appRoot"));