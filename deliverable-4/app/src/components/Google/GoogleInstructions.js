import React, { Component } from "react";
import './Google.css';
import './GoogleInstructions.css';

export default class GoogleInstructions extends Component {
  
  	to_google = () => {
  		window.open("/Google", "_self");
  	}

    to_main = () => {
      window.open("/", "_self");
    }

  	render() {
    	return (

          <div id="container=fluid" className="inst-cont">
            <div id="row">
              <div id="col-12">
                <img src={"images/laptop_man.png"} alt="google" id="lap-man-photo"></img>
              </div>
              <div id="col-12">
                <header>Instructions</header>
                <ol>
                  <li>Press the <i>Google Application</i> button to go to Google</li>
                  <li>Once in the application, click on the search bar at the top to make a google search</li>
                  <li>You may then scroll through the results by swiping on the screen, clicking on any links that interest you</li>
                  <li>Once ready to exit and go to a different application, you can simply press the <i>Return</i> to come back to this page</li>
                </ol>
              </div>
              <div id="col-12">
                <div id="instructions-buttons">
                  <button className="button shadow p-3 mb-5 bg-white rounded" 
                          id="google-app-button"
                          onClick={() => this.to_google()} 
                          type="submit">Google Application</button>
                  <button className="button shadow p-3 mb-5 bg-white rounded" 
                          id="to-main-button"
                          onClick={() => this.to_main()} 
                          type="submit">Main Page</button>
                </div>
              </div>
            </div>
          </div>
    	);
  	}
}
