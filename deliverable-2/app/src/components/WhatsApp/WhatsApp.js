import React, { Component } from "react";
import Iframe from 'react-iframe';
import './WhatsApp.css';

export default class WhatsApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            osDeepLink: undefined,
            phoneNum: undefined,
        };
    }

    componentDidMount() {
        const platform = navigator.platform;
        let link = `https://web.whatsapp.com`
        if (platform.indexOf("Android") > -1) {
            link = `intent://send?phone=${this.state.phoneNum}#Intent;package=com.whatsapp;scheme=whatsapp;end`
        } else if (platform.indexOf("iOS") > -1) {
            link = `whatsapp://send?phone=${this.state.phoneNum}`
        }
        this.setState({ osDeepLink: link });
    }

	toMain = () => window.open("/", "_self");

  	render() {
        if (!this.state.osDeepLink) {
            return (
                <div id="container">
                    <Iframe id="whatsapp-iframe" src="https://web.whatsapp.com"/>
                    <div>
                        <button id="return-button" onClick={this.to_main} type="submit"> Return </button>
                    </div>
                </div>
            );
        }
        window.open(this.state.osDeepLink, "_blank");
    	this.toMain();
  	}
}