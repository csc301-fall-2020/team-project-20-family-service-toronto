import React, { Component } from "react";
import './YahooMailInstructions.css';


export default class YahooMailInstructions extends Component {
  
	to_main = () => {
		window.open("/", "_self");
	}

	route_Yahoo_Mail = () => {
		const win = window.open("https://mail.yahoo.com", '_blank');
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
                            How To Use Yahoo Mail
                        </h1>
                        <h2> Login</h2>
                        <ul>
                            <li>Use the email and password for your yahoo mail account to login.</li>
                        </ul>
                        <h2> Read Received Emails </h2>
                        <ul>
                            <li>Once you login to your yahoo mail account, you are automatically directed to your inbox,
                                where you can view your received emails. Most of your emails of interest you will be able to find here.</li>
                            <li>Your emails are ordered chronologically, where your newest emails are displayed on the top.</li>
                            <li>Scroll down to view more emails.</li>
                            <li>If you cannot find an email you are expecting in your focused inbox: 
                                <ol>
                                    <li>
                                        Near the top the page you should see a button called "Spam". Click on the button and try to look for the email.
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
                                Click on "Compose" on the top left of the page. A new email layout will then appear.
                            </li>
                            <li>
                                At the top of the email layout, enter the email address of your email in the space next to the text "To".
                            </li>
                            <li>
                                Then fill in the space with the word "Subject" by entering a short description of what your email is about. 
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
                            <a href="https://ca.help.yahoo.com/kb/account" className="question-button" target="_blank" rel='noreferrer'>
                                Have questions about Yahoo Mail? Click here!
                            </a>
                        </div>
                        <br></br>
                    </div>
                    <div id="col-12">
                        <div id="instructions-buttons">
                            <button className="button shadow p-3 mb-5 bg-white rounded" 
                                    onClick={() => this.route_Yahoo_Mail()}
                                    type="submit">Open Yahoo Mail</button>
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