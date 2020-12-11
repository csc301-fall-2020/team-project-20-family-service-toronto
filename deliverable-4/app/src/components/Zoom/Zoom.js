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
				<h1 className="menu-header-zoom">
					What would you like to do?
				</h1>
      		</div>
    	);
  	}
}