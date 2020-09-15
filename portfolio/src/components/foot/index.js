import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList, FooterDropDownSection } from 'react-mdl';
import "./style.css";

export default class Foot extends Component {
    render() {
        return (
            <div>
                <Footer size="mini">
                    <FooterSection className="footer-section" type="top" logo="Title">
                        <FooterDropDownSection>
                        <FooterLinkList  className="footer">
                            <a href="#">Help</a>
                            <a href="#">Privacy & Terms</a>
                        </FooterLinkList>


                        </FooterDropDownSection>
                        
                    </FooterSection>
                </Footer>
            </div>
        )
    }
}

