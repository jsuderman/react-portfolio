import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';
import "./style.css";

export default class Foot extends Component {
    render() {
        return (
            <div>
                <Footer className="foot-color" size="mini" >
                    <FooterSection type="left" logo="Justin Suderman">
                        <FooterLinkList>
                            <a href="1">Help</a>
                            <a href="1">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </div>
        )
    }
}

