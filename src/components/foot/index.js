import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';
import "./style.css";

export default class Foot extends Component {
    render() {
        return (
            <div>
                <Footer size="mini">
                    <FooterSection className="footer-section" type="top" logo="Pages">
                        
                        <FooterLinkList  className="footer">
                            <a href="/about">About</a>
                            <a href="/projects">Projects</a>
                            <a href="/resume">Resume</a>
                            <a href="/contact">Contact</a>
                        </FooterLinkList>


                        
                        
                    </FooterSection>
                </Footer>
            </div>
        )
    }
}

