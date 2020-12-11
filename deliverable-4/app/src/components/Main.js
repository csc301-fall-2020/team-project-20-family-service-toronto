import React, { Component } from "react";

export default class Main extends Component {

	route_Google = () => {
		window.open("/GoogleInstructions", "_self");
	}

	route_Facebook = () => {
		const win = window.open("https://www.facebook.com", '_blank');
		if (win != null) {
			win.focus();
		}
	}

	route_Email = () => {
		window.open("/Email", "_self");
	}

	route_WhatsApp = () => window.open("/WhatsApp", "_self");

	route_YouTube = () => window.open("/YouTube", "_self");

	route_Zoom = () => {window.open("/Zoom", "_self");}

	get_curr_date = () => {
	    var today = new Date();
	    var hour = today.getHours();
	    if (hour >= 0 && hour < 12) {
	      return "Morning";
	    } else if (hour >= 12 && hour < 18) {
	      return "Afternoon";
	    } else {
	      return "Evening";
	    }
	  }
	
	render() {
		this.phrase = this.get_curr_date();

		return (
			<div className="grid-container">
				<header>
					Good {this.phrase}
		      	</header>
				<div className="container-fluid">
					<div className="row shadow-lg p-3 mb-5 bg-white rounded">
						<div className="col-xs-12 col-md-6">
							<button className="button shadow p-3 mb-5 bg-white rounded"
								onClick={() => this.route_Google()}
								type="submit">
								<img src={"images/google.png"} alt="google"></img>
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button shadow p-3 mb-5 bg-white rounded"
								onClick={() => this.route_Facebook()}
								type="submit">
								<img src={"images/facebook.png"} alt="facebook"></img>
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button shadow p-3 mb-5 bg-white rounded"
								onClick={this.route_YouTube}
								type="submit">
								<img src={"images/youtube.png"} alt="youtube"></img>
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button shadow p-3 mb-5 bg-white rounded"
								onClick={() => this.route_Email()} 
								type="submit">
								<img src={"images/email.png"} alt="email"></img> 
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button shadow p-3 mb-5 bg-white rounded"
								onClick={() => this.route_Zoom()}
								type="submit">
								<img src={"images/zoom.png"} alt="zoom"></img>
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button shadow p-3 mb-5 bg-white rounded"
								onClick={this.route_WhatsApp}
								type="submit">
								<img src={"images/whatsapp.png"} alt="whatsapp"></img>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}