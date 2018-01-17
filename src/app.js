console.log("app.js");
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        ExpenseDashboardPage
    </div>
);

const AddExpensePage = () => (
    <div>
    AddExpensePage Componenet
    </div>
);

const EditExpensePage = () => (
    <div>
    EditExpensePage Componenet
    </div>
);

const helpPage = () => (
    <div>
    helpPage Componenet
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />        
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={helpPage} />

        </div>
    </BrowserRouter>
)

ReactDOM.render(routes,document.getElementById("appRoot"));