import React, { Component } from "react";
import './OutlookInstructions.css';


export default class OutlookInstructions extends Component {
  
	to_main = () => {
		window.open("/", "_self");
	}

	route_Outlook = () => {
		const win = window.open("https://www.outlook.com", '_blank');
		if (win != null) {
			win.focus();
		}
    } 
    
    to_email = () => {
        window.open("/Email", "_self");
    }

  	render() {
    	return (
            <div id="col-12">
                <div id="row">
                    <div id="col-12">
                        <h1>
                            How To Use Outlook
                        </h1>
                        <h2> Login</h2>
                        <ul>
                            <li>Use the email and password for your outlook account to login.</li>
                        </ul>
                        <h2> Read Received Emails </h2>
                        <ul>
                            <li>Once you login to your outlook account, you are automatically directed to your focused inbox,
                                where you can view your received emails. Most of your emails of interest you will be able to find here.</li>
                            <li>Your emails are ordered chronologically, where your newest emails are displayed on the top.</li>
                            <li>Scroll down to view more emails.</li>
                            <li>If you cannot find an email you are expecting in your focused inbox: 
                                <ol>
                                    <li>Near the top the page you should see two tabs named "Focused" and "Other". Click on the "Other" tab and 
                                        scroll down to see whether you can find your expected email.
                                    </li>
                                    <li>Additionally, there is a search bar in the middle of the very top of the page. You can type in an email subject or 
                                        email address to search for your expected email.
                                    </li>
                                </ol>
                            </li>
                        </ul>
                        <h2> Send an email </h2>
                        <ol>
                            <li>
                                Click on "New message" on the top left of the page. A new email layout will then appear.
                            </li>
                            <li>
                                At the top of the email layout, enter the email address of your email in the space next to the text "To".
                            </li>
                            <li>
                                Then fill in the space next to "Subject" by entering a short description of what your email is about. 
                                You can leave this blank if you want to.
                            </li>                        
                            <li>
                                Then, write your email in the space below "Subject"
                            </li>
                            <li> 
                                To send your email. Click the blue button "Send".
                            </li>
                        </ol>
                        <div id="more-help-div">
                            <a href="https://support.microsoft.com/en-us/outlook" className="question-button" target="_blank" rel='noreferrer'>
                                Have questions about Outlook? Click here!
                            </a>
                        </div>
                        <br></br>
                    </div>
                    <div id="col-12">
                        <div id="instructions-buttons">
                            <button className="button shadow p-3 mb-5 bg-white rounded" 
                                    onClick={() => this.route_Outlook()}
                                    type="submit">Open Outlook</button>
                            <button className="button shadow p-3 mb-5 bg-white rounded" 
                                onClick={() => this.to_email()}
                                type="submit">Return to Email Page</button>        
                            <button className="button shadow p-3 mb-5 bg-white rounded" 
                                    onClick={() => this.to_main()}
                                        type="submit">Return to Main Page</button>
                        </div>
                    </div>
                </div>                
            </div>
        )
  	}
}