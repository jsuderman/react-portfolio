import React, { Component } from 'react';
import { Navbar, Nav,} from "react-bootstrap";
import "./style.css";

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar className="nav-color" bg="dark" variant="dark">
                    <Navbar.Brand style={{color:"black"}}>Justin Suderman</Navbar.Brand>
                    <Nav className="mr-auto" style={{alignItems: "center"}}>
                        <Nav.Link href="/about" style={{color:"black"}}>About Me</Nav.Link>
                        <Nav.Link href="/projects"style={{color:"black"}}>Projects</Nav.Link>
                        <Nav.Link href="/resume"style={{color:"black"}}>Resume</Nav.Link>
                        <Nav.Link href="/contact"style={{color:"black"}}>Contact</Nav.Link>
                    </Nav>
                    <Nav className="social-links">
                        <a href="https://github.com/jsuderman" target="_blank" rel="noopener noreferrer"> 
                            <i class="fa fa-github-square fa-3x" aria-hidden="true"  />
                        </a>

                        <a href="https://www.linkedin.com/in/justin-suderman-a411471a6/" target="_blank" rel="noopener noreferrer"> 
                            <i class="fa fa-linkedin-square fa-3x" aria-hidden="true" />
                        </a>

                        <a href="https://twitter.com/justinsuderman" target="_blank" rel="noopener noreferrer"> 
                            <i class="fa fa-twitter-square fa-3x" aria-hidden="true" />
                        </a>  
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
