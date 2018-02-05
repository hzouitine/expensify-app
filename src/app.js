console.log("app.js");
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link,NavLink, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({ description : 'Water Bill'}));
store.dispatch(addExpense({ description : 'Gas Bill'}));
store.dispatch(setTextFilter("bill"));
const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

ReactDOM.render(<AppRouter />,document.getElementById("appRoot"));