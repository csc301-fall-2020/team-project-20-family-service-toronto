import React, { Component } from "react";
import './GmailInstructions.css';


export default class GmailInstructions extends Component {
  
	to_main = () => {
		window.open("/", "_self");
	}

	route_Gmail = () => {
		const win = window.open("https://www.gmail.com", '_blank');
		if (win != null) {
			win.focus();
		}
    }   
    
    to_email = () => {
        window.open("/Email", "_self");
    }

  	render() {
    	return (
          <div id="container=fluid" className="inst-cont">
            <div id="row">
                <div id="col-12">
                    <h1>
                        How To Use Gmail
                    </h1>
                    <h2> Login</h2>
                    <ul>
                        <li>Use the email and password for your gmail account to login. Your email will be in the format of exampleemail@gmail.com</li>
                    </ul>
                    <h2> Read Received Emails </h2>
                    <ul>
                        <li>Once you login to your gmail account, you are automatically directed to your primary inbox,
                            where you can view your received emails. Most of your emails of interest you will be able to find here.</li>
                        <li>Your emails are ordered chronologically, where your newest emails are displayed on the top.</li>
                        <li>Scroll down to view more emails.</li>
                        <li>If you cannot find an email you are expecting in your primary inbox: 
                         <ol>
                            <li> Look at the top left of the page under "Compose", you should see 
                                "Inbox", "Starred", "Snoozed" and a bunch of other buttons there. Scroll down from those buttons and look for "More".
                                Click on "More" and look for a button called "Spam". Now look and see whether your email is there.
                            </li>
                                <li> Additionally, if the email you are expecting is related to store sales or promotions,
                                also check the "Promotions" tab near the top right of the page.
                            </li>
                            <li> Additionally, if the email you are expecting is related to store social media pages such as facebook,
                                also check the "Social" in the middle near the top of the page.
                            </li>
                            </ol>
                        </li>
                    </ul>
                    <h2> Send an email </h2>
                    <ol>
                        <li>
                            Click on "Compose" on the top left of the page. A new box will then appear
                        </li>
                        <li>
                            At the top of the box that appeared, enter the email address of your email in the space that currently has the text "To".
                        </li>
                        <li>
                            Then fill in the "Subject" by entering a short description of what your email is about. 
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
                            <a href="https://support.google.com/mail/?hl=en#topic=7065107" className="question-button" target="_blank" rel='noreferrer'>
                                Have questions about Gmail? Click here!
                            </a>
                    </div>
                    <br></br>
                </div>
                <div id="col-12">
                    <div id="instructions-buttons">
                        <button className="button shadow p-3 mb-5 bg-white rounded" 
                                onClick={() => this.route_Gmail()}
                                type="submit">Open Gmail</button>
                        <button className="button shadow p-3 mb-5 bg-white rounded" 
                            onClick={() => this.to_email()}
                            type="submit">Return to Email Page</button>
                        <button className="button shadow p-3 mb-5 bg-white rounded" 
                                onClick={() => this.to_main()}
                                type="submit">Return to main page</button>
                    </div>    
                </div>
            </div>    
        </div>                
        )
  	}
}