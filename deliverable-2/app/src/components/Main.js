import React, { Component } from "react";

export default class Main extends Component {

	route_Google = () => {
		window.open("/Google", "_self");
	}
  
	render() {
    	return (
    		<div className="App">
		      <header className="App-header">
		      	Hello
      			<button onClick={() => this.route_Google()} type="submit"> Google </button>
		      </header>
		    </div>
    	);
  	}
}