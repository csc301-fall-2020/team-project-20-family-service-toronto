import React, { Component } from "react";

export default class Main extends Component {

	route_Google = () => {
		window.open("/Google", "_self");
	}
  
	render() {
    	return (
    		<div className="grid-container">
		      <header>
			  	<a href="/">Family Services Toronto Application</a>
		      </header>
			  <main>
				<div className="content">
					<button className="button" 
						onClick={() => this.route_Google()} 
						type="submit"> 
						<img src={"images/google.png"} alt="google"></img> 
					</button>
					<button className="button"
						type="submit"> 
						<img src={"images/facebook.png"} alt="facebook"></img> 
					</button>
					<button className="button"
						type="submit">
						<img src={"images/youtube.png"} alt="youtube"></img> 
					</button>
					<button className="button"
						type="submit">
						<img src={"images/email.png"} alt="email"></img> 
					</button>
				</div>
			  </main>
		    </div>
    	);
  	}
}