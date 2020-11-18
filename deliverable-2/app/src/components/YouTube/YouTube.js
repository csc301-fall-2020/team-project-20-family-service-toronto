import React, { Component } from "react";
import Iframe from 'react-iframe';
import './YouTube.css';

export default class YouTube extends Component {
    toMain = () => window.open("/", "_self");

    render() {
        return (
            <div id="container">
                <div>
                    <button id="return-button" data-testid="return-button" onClick={this.to_main} type="submit">Return</button>
                </div>
            </div>
        );
    }
}