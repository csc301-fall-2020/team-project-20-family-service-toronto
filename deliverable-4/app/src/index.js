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
import GoogleInstructions from './components/Google/GoogleInstructions.js';
import Facebook from './components/Facebook/Facebook.js'
import FacebookInstructions from './components/Facebook/FacebookInstructions.js'
import WhatsApp from './components/WhatsApp/WhatsApp.js';
import Email from './components/Email/Email.js'
import YouTube from './components/YouTube/YouTube.js';
import Zoom from './components/Zoom/Zoom.js';
import GmailOptions from './components/Email/Gmail/GmailOptions.js'
import GmailInstructions from './components/Email/Gmail/GmailInstructions.js'
import OutlookOptions from './components/Email/Outlook/OutlookOptions.js'
import OutlookInstructions from './components/Email/Outlook/OutlookInstructions.js'
import YahooMailOptions from './components/Email/YahooMail/YahooMailOptions.js'
import YahooMailInstructions from './components/Email/YahooMail/YahooMailInstructions.js'

const history = createBrowserHistory();

ReactDOM.render(
   <Router history={history}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/Google" component={Google} />
			<Route exact path="/GoogleInstructions" component={GoogleInstructions} />
			<Route exact path="/Facebook" component={Facebook} />
			<Route exact path="/FacebookInstructions" component={FacebookInstructions} />
			<Route exact path="/WhatsApp" component={WhatsApp} />
			<Route exact path="/Email" component={Email} />
			<Route exact path="/GmailOptions" component={GmailOptions} />
			<Route exact path="/GmailInstructions" component={GmailInstructions} />
			<Route exact path="/OutlookOptions" component={OutlookOptions} />
			<Route exact path="/OutlookInstructions" component={OutlookInstructions} />	
			<Route exact path="/YahooMailOptions" component={YahooMailOptions} />
			<Route exact path="/YahooMailInstructions" component={YahooMailInstructions} />	
			<Route exact path="/YouTube" component={YouTube} />
			<Route exact path="/Zoom" component={Zoom} />
		</Switch>
	</Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
