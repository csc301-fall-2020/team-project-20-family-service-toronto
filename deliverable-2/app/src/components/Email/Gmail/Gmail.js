import React, { Component } from "react";
import Iframe from 'react-iframe';
import './Gmail.css';

export default class Gmail extends Component {
  
	to_main = () => {
		window.open("/", "_self");
	}

  	render() {
    	return (
      		<div id="container">
        		<Iframe id="gmail-iframe" src="https://www.gmail.com"/>
        		<div>
        			<button id="return-button" onClick={() => this.to_main()} type="submit"> Return </button>
        		</div>
      		</div>
    	);
  	}
}