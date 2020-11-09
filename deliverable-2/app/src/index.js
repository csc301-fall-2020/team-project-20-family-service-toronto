import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// added from router changes
import { Router, Route } from 'react-router';
import { Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

// components
import Google from './components/Google/Google.js';

const history = createBrowserHistory();

ReactDOM.render(
   <Router history={history}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/Google" component={Google} />
		</Switch>
	</Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
