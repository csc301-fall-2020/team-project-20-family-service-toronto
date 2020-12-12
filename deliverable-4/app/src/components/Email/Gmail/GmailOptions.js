import React, { Component } from "react";
import './Gmail.css';
import './GmailOptions.css';

export default class GmailOptions extends Component {
  
	route_Gmail = () => {
		const win = window.open("https://www.gmail.com", '_blank');
		if (win != null) {
			win.focus();
		}
  }
  
  route_Gmail_Instructions = () => {
    window.open("/GmailInstructions", "_self");
  }

  to_main = () => {
    window.open("/", "_self");
  }

  to_email = () => {
    window.open("/Email", "_self");
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          Gmail
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6 text-center">
                <h5>Proceed to Gmail</h5>
                <button className="button" 
                  onClick={() => this.route_Gmail()} 
                  type="submit"> 
                  <img src={"../../../images/gmail.png"} alt="Gmail"></img> 
                </button>
            </div>
            <div className="col-xs-12 col-md-6 text-center">
                <h5>Simple guide to Gmail</h5>
                <button className="button" 
                  onClick={() => this.route_Gmail_Instructions()} 
                  type="submit"> 
                  <h4>Gmail Instructions Page</h4>
                </button>
            </div>
            <div id="col-12">
              <div id="instructions-buttons">
                <button className="button shadow p-3 mb-5 bg-white rounded" 
                        id="to-main-button"
                        onClick={() => this.to_email()}
                        type="submit">Return to Email Page</button>
                <button className="button shadow p-3 mb-5 bg-white rounded" 
                        id="to-email-button"
                        onClick={() => this.to_main()}
                        type="submit">Return to Main Page</button>
              </div>
            </div> 
          </div>
        </div>       
      </div>
    );
  }
}
