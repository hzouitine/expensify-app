console.log("app.js");
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link,NavLink, Route} from 'react-router-dom';
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
    Error 404 ! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () =>(
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to='/create' activeClassName="is-active">Create Expense</NavLink>
        <NavLink to='/edit' activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to='/help' activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />        
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes,document.getElementById("appRoot"));