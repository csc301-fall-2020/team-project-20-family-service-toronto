import React, { Component } from "react";
import './OutlookOptions.css';

export default class OutlookOptions extends Component {
  
	route_Outlook = () => {
		const win = window.open("https://www.outlook.com", '_blank');
		if (win != null) {
			win.focus();
		}
  }

  route_Outlook_Instructions = () => {
    window.open("/OutlookInstructions", "_self");
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
          Outlook
        </header>
        <div className="container-fluid" id="outlook-cont">
          <div className="row">
            <div className="col-xs-12 col-md-6 text-center">
                <h5>Proceed to Outlook</h5>
                <button className="button shadow p-3 mb-5 bg-white rounded" 
                  onClick={() => this.route_Outlook()}
                  type="submit"> 
                  <img src={"../../../images/Microsoft-Outlook.png"} alt="Outlook"></img> 
                </button>
            </div>
            <div className="col-xs-12 col-md-6 text-center">
                <h5>Simple guide to Outlook</h5>
                <button className="button shadow p-3 mb-5 bg-white rounded" 
                  onClick={() => this.route_Outlook_Instructions()} 
                  type="submit"> 
                  <b>Outlook Instructions Page<b>
                </button>
            </div>
          </div>
        </div>
        <div id="instructions-buttons">
            <button className="button shadow p-3 mb-5 bg-white rounded" 
                    id="to-main-button-outlook"
                    onClick={() => this.to_email()}
                    type="submit">Return to Email Page</button>
            <button className="button shadow p-3 mb-5 bg-white rounded" 
                    id="to-email-button"
                    onClick={() => this.to_main()}
                        type="submit">Return To Main Page</button>
        </div>
      </div>        
    );
  }
}
