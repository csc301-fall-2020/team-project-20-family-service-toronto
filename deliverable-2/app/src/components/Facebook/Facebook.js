import React, { Component } from "react";
import Iframe from 'react-iframe';
import './Facebook.css';

export default class Google extends Component {
  
	to_main = () => {
		window.open("/", "_self");
	}

  	render() {
    	return (
      		<div id="container">
        		<Iframe id="facebook-iframe" src="https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.facebook.com/&ved=2ahUKEwj41OSRsoPtAhUBElkFHXRjDNUQFjAAegQIChAD"/>
        		<div>
        			<button id="return-button" onClick={() => this.to_main()} type="submit"> Return </button>
        		</div>
      		</div>
    	);
  	}
}