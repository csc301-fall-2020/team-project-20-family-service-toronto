import React, { Component } from "react";
import './Zoom.css'

export default class Zoom extends Component {
  	render() {
    	return (
          <div id="container=fluid" className="inst-cont">
            <div id="row">
              <div id="col-12">
                <header id="header">Instructions</header>
                <h2>If Zoom is not installed:</h2>
                <ol>
                  <li>Press the <i>Join Zoom</i></li>
                  <li>Press the Download from Google Play or App Store button</li>
                  <li>Download the application</li>
                </ol>
                <h2>If Zoom is installed:</h2>
                <ol>
                  <li>Press the <i>Join Zoom</i> button to join a Zoom Meeting</li>
                  <li>Press the <b>Join Meeting</b> button</li>
                  <li>Enter the meeting ID the meeting host provided</li>
                  <li>Enter the password if applicable</li>
                </ol>
                <h2>Creating your own account:</h2>
                <ol>
                  <li>Open the Zoom App</li>
                  <li>Press the <b>Sign Up</b> button</li>
                  <li>Enter the necessary information</li>
                </ol>
                <h2>Signing into your account:</h2>
                <ol>
                  <li>Open the Zoom App</li>
                  <li>Press the <b>Sign In</b> button</li>
                  <li>Enter your Email Address and Password and press <b>Sign In</b></li>
                </ol>
              </div>
              <div id="footer">
                <div id="instructions-buttons">
				          <button className="button shadow p-3 mb-5 bg-white rounded" 
                          id="zoomjoin-app-button"
                          onClick={() => window.open('join.zoom.us', '_self')}
                          type="submit">Join Zoom</button>
                  <button className="button shadow p-3 mb-5 bg-white rounded" 
                          id="to-main-button"
                          onClick={() => window.open('/', '_self')} 
                          type="submit">Main Page</button>
                </div>
              </div>
            </div>
          </div>
    	);
  	}
}