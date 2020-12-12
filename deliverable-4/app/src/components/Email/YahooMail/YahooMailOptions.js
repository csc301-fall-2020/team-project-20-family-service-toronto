import React, { Component } from "react";
import './YahooMailOptions.css';

export default class YahooMailOptions extends Component {
  
	route_Yahoo_Mail = () => {
		const win = window.open("https://mail.yahoo.com", '_blank');
		if (win != null) {
			win.focus();
		}
  }

  route_Yahoo_Mail_Instructions = () => {
    window.open("/YahooMailInstructions", "_self");
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
          Yahoo Mail
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6 text-center">
                <h5>Proceed to Yahoo Mail</h5>
                <button className="button" 
                  onClick={() => this.route_Yahoo_Mail()} 
                  type="submit"> 
                  <img src={"../../../images/Yahoo-Mail.png"} alt="Yahoo Mail"></img> 
                </button>
            </div>
            <div className="col-xs-12 col-md-6 text-center">
                <h5>Simple guide to Yahoo Mail</h5>
                <button className="button" 
                  onClick={() => this.route_Yahoo_Mail_Instructions()}
                  type="submit"> 
                  <h4>Yahoo Mail Instructions Page</h4>
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
