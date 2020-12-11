import React, { Component } from "react";
import './WhatsApp.css';

const moreHelpLink = 'https://www.androidauthority.com/how-to-use-whatsapp-1097088/'
class WhatsApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: false
        }
    }

  	render() {
        let button = undefined;
        if (/Android/i.test(navigator.userAgent)) {
            button = (
                <button
                    className='button-whatsapp'
                    onClick={() => window.open('https://wa.me/', '_self')}
                >
                    Open WhatsApp
                </button>
            );
        } else {
            button = (
                <button
                    className='button-whatsapp'
                    onClick={() => window.open('WhatsApp://', '_self')}
                >
                    Open WhatsApp
                </button>
            );
        }
        if (!this.state.view) {
            return (
                <div className="menu">
                    <h1 className="menu-header-whatsapp">
                        What would you like to do?
                    </h1>
                    <div className="option-group-whatsapp">
                        <div className="button-div-whatsapp">
                            {button}
                        </div>

                        <div className="button-div-whatsapp">
                            <button
                                className="button-whatsapp"
                                onClick={() => this.setState({ view: true })}
                                type="submit"
                            >
                                WhatsApp Instructions
                            </button>
                        </div>
                        <div className="button-div-whatsapp">
                            <button
                                className="button-whatsapp"
                                onClick={() => window.open('/', '_self')}
                                type="submit"
                            >
                                Return To Main Menu
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container-whatsapp">
                    <div className="instructions-whatsapp">
                        <h1 className="instruction-header-whatsapp">
                            How To Use WhatsApp
                        </h1>
                        <h2 className="sub-head-wa"> Setup App </h2>
                        <ol className="lst-wa">
                            <li>Install the App if you haven't already</li>
                            <li>Open the app (You can use the button at the bottom of this page)</li>
                            <li>Agree to the terms of service after reading them</li>
                            <li>Enter your phone number (remember to choose your country)</li>
                            <li>You might get a code in an SMS message,
                                check the message and enter the code into WhatsApp if it asks</li>
                        </ol>
                        <h2 className="sub-head-wa"> Setup Your Profile </h2>
                        <ol className="lst-wa">
                            <li>In the settings section
                                (gears on bottom right on iOS/3 dots on top right in android)</li>
                            <li>Click the top bar with the icon of a person</li>
                            <li>Here you can enter your name by tapping on the first text field 'Name'</li>
                            <li>You can change your picture by tapping the camera icon (optional)</li>
                            <li>You can update a short bio about you by tapping the icon on the field labelled 'About'</li>
                        </ol>
                        <h2 className="sub-head-wa"> Start a Chat </h2>
                        <ol className="lst-wa">
                            <li>Tap on the 'Chat' tab (top of screen on android/bottom of screen on iOS)</li>
                            <li>Select a contact or enter a phone number of someone you want to chat with</li>
                            <li>Use the text bar on the bottom to type a message, hit send to send it to whoever you're chatting with</li>
                        </ol>
                        <a
                            className="more-help"
                            href={moreHelpLink}
                            target="_blank"
                            rel='noreferrer'
                        >
                            Need more help? Click Me!
                        </a>
                    </div>
                    <div className="button-group-whatsapp">
                        <div className="button-div-whatsapp">
                            {button}
                        </div>
                        <div className="button-div-whatsapp">
                            <button
                                className="button-whatsapp"
                                onClick={() => window.open('/', '_self')}
                                type="submit"
                            >
                                Return To Main Menu
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
  	}
}

export default WhatsApp;