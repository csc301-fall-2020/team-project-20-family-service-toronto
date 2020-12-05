import React, { Component } from "react";
import Iframe from 'react-iframe';
import './Google.css';

export default class Google extends Component {
  
	to_main = () => {
		window.open("/", "_self");
	}

  	render() {
    	return (
      		<div id="container">
        		<Iframe id="google-iframe" data-testid="google-iframe" src="https://www.google.com/webhp?igu=1"/>
        		<div>
        			<button id="return-button"  data-testid="return-button" onClick={() => this.to_main()} type="submit">Return</button>
        		</div>
      		</div>
    	);
  	}
}