import React, { Component } from "react";
import Iframe from 'react-iframe';
import './Outlook.css';

export default class Outlook extends Component {
  
	to_main = () => {
		window.open("/", "_self");
	}

  	render() {
    	return (
      		<div id="container">
        		<Iframe id="outlook-iframe" src="https://www.outlook.live.com"/>
        		<div>
        			<button id="return-button" onClick={() => this.to_main()} type="submit"> Return </button>
        		</div>
      		</div>
    	);
  	}
}