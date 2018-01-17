console.log("app.js");
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
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

const HelpPage = () => (
    <div>
    helpPage Componenet
    </div>
);
const NotFoundPage = () => (
    <div>
    Error 404 !
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />        
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes,document.getElementById("appRoot"));