console.log("app.js");
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link,NavLink, Route} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'

ReactDOM.render(<AppRouter />,document.getElementById("appRoot"));