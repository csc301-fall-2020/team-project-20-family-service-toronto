import React, { Component } from "react";

export default class Main extends Component {

	route_Gmail = () => {
		const win = window.open("https://www.gmail.com", '_blank');
		if (win != null) {
			win.focus();
		}
	}

	route_Outlook = () => {
		const win = window.open("https://outlook.office.com/", '_blank');
  		if (win != null) {
    		win.focus();
  		}
	}
  
	render() {
    	return (
    		<div className="grid-container">
		      <header>
			  	Email
		      </header>
		      <div className="container-fluid">
		      	<div className="row">
		      		<div className="col-xs-12 col-md-6">
		      			<button className="button" 
							onClick={() => this.route_Gmail()} 
							type="submit"> 
							<img src={"../../../images/gmail.png"} alt="Gmail"></img> 
						</button>
		      		</div>
		      		<div className="col-xs-12 col-md-6">
						  <button className="button"
						  	onClick={() => this.route_Outlook ()} 
							type="submit"> 
							<img src={"../../../images/Microsoft-Outlook.png"} alt="Outlook"></img> 
						</button>
		      		</div>
		      	</div>
		      </div>
		    </div>
    	);
  	}
}