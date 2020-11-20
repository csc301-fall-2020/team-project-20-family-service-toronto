import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Iframe from 'react-iframe';
import './WhatsApp.css';

export default class WhatsApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            osDeepLink: undefined,
            phoneNum: ""
        };
    }

    createWhatsAppLink(phoneNum) {
        const platform = navigator.platform;
        let link = `https://web.whatsapp.com`  // web link
        if (platform.indexOf("Android") > -1) {
            link = `intent://send?${phoneNum}#Intent;package=com.whatsapp;scheme=whatsapp;end`
        } else if (platform.indexOf("iOS") > -1) {
            link = `whatsapp://send?${phoneNum}`
        }
        return link;
    }

    componentDidMount() {
        const link = this.createWhatsAppLink(this.state.phoneNum);
        this.setState({ osDeepLink: link });
    }

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
        window.location.href = this.state.osDeepLink;
        return (<Redirect to="/"/>)
  	}
}