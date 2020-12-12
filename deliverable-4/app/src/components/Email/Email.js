import React, { Component } from "react";
import './Email.css';

export default class Email extends Component {

	route_Gmail = () => {
		window.open("/GmailOptions", "_self");
	}

	route_Outlook = () => {
		window.open("/OutlookOptions", "_self");
	}
  
	route_Yahoo_Mail = () => {
		window.open("/YahooMailOptions", "_self");
	}

	to_main = () => {
      window.open("/", "_self");
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
					<div className="col-xs-12 col-md-6">
						  <button className="button"
						  	onClick={() => this.route_Yahoo_Mail ()} 
							type="submit"> 
							<img src={"../../../images/Yahoo-Mail.png"} alt="Yahoo Mail"></img> 
						</button>
					</div>
		      	</div>
			  </div>
				<div id="return-button-div-email">
        			<button id="return-button-email"  data-testid="return-button" onClick={() => this.to_main()} type="submit">Return to Main Page</button>
        		</div>
			</div>
    	);
  	}
}