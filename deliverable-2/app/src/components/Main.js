import React, { Component } from "react";

export default class Main extends Component {

	route_Google = () => {
		window.open("/Google", "_self");
	}

	route_Facebook = () => {
		const win = window.open("https://www.facebook.com", '_blank');
		if (win != null) {
			win.focus();
		}
	}

	route_WhatsApp = () => window.open("/WhatsApp", "_self");

	route_YouTube = () => window.open("/YouTube", "_self");

	render() {
		return (
			<div className="grid-container">
				<header>
					Family Services Toronto Application
		      </header>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<button className="button"
								onClick={() => this.route_Google()}
								type="submit">
								<img src={"images/google.png"} alt="google"></img>
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button"
								onClick={() => this.route_Facebook()}
								type="submit">
								<img src={"images/facebook.png"} alt="facebook"></img>
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button"
								onClick={this.route_YouTube}
								type="submit">
								<img src={"images/youtube.png"} alt="youtube"></img>
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button"
								type="submit">
								<img src={"images/email.png"} alt="email"></img>
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button"
								type="submit">
								<img src={"images/zoom.png"} alt="zoom"></img>
							</button>
						</div>
						<div className="col-xs-12 col-md-6">
							<button className="button"
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