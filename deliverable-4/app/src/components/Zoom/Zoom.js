import React, { Component } from "react";
import Iframe from 'react-iframe';
import './Zoom.css';

export default class Zoom extends Component {
  
	to_main = () => {
		window.open("/", "_self");
	}

  	render() {
    	return (
      		<div id="container">
        		<Iframe id="zoom-iframe" src="https://zoom.us/download"/>
        		<div>
        			<button id="return-button" onClick={() => this.to_main()} type="submit"> Return </button>
        		</div>
      		</div>
    	);
  	}
}