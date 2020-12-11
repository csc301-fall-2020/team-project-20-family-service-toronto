import React, { Component } from "react";
import './Facebook.css';
import './FacebookInstructions.css';

export default class FacebookInstructions extends Component {
  
  	to_facebook = () => {
  		window.open("http://www.facebook.com", "_self");
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
                  <li>Press the <i>Facebook Application</i> button to go to Facebook</li>
                  <li> If you are not logged into facebook, you can log in by typing in your email and password in the prompt box, and then clicking "Log In"</li>
                  <li>Once in the application, click on the search bar at the top to search for Facebook users</li>
                  <li>You can open Facebook messenger (to chat with others) by clicking on the speech bubble icon in the top right corner of your screen</li>
                  <li>Once ready to exit and go to a different application, you can simply press the <i>Return</i> to come back to this page</li>
                </ol>
              </div>
              <div id="col-12">
                <div id="instructions-buttons">
                  <button className="button shadow p-3 mb-5 bg-white rounded" 
                          id="google-app-button"
                          onClick={() => this.to_facebook()} 
                          type="submit">Facebook Application</button>
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