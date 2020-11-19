import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// added from router changes
import { Router, Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

// components
import Google from './components/Google/Google.js';
import Facebook from './components/Facebook/Facebook.js'
import WhatsApp from './components/WhatsApp/WhatsApp.js';
import Email from './components/Email/Email.js'
import YouTube from './components/YouTube/YouTube.js';

const history = createBrowserHistory();

ReactDOM.render(
   <Router history={history}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/Google" component={Google} />
			<Route exact path="/Facebook" component={Facebook} />
			<Route exact path="/WhatsApp" component={WhatsApp} />
			<Route exact path="/Email" component={Email} />
			<Route exact path="/YouTube" component={YouTube} />
		</Switch>
	</Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
