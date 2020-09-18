import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";


export default class Contact extends Component {
    render() {
        return (
            <div className="contact-grid">
                <h1>Contacts</h1>
                <br />
                <Container>
                    <br />
                    <br />
                    <Row>
                        <Col className="social-block">
                            <h3>Social Media Contacts</h3>
                            <ul>
                                <li>
                                    <div className="github">
                                        <a href="https://github.com/jsuderman" target="_blank" rel="noopener noreferrer">
                                            <h5>Github</h5>
                                            <i class="fa fa-github-square fa-5x" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="linkedin">
                                        <a href="https://www.linkedin.com/in/justin-suderman-a411471a6/" target="_blank" rel="noopener noreferrer">
                                            <h5>Linkedin</h5>
                                            <i class="fa fa-linkedin-square fa-5x" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="twitter">
                                        <a href="https://twitter.com/justinsuderman" target="_blank" rel="noopener noreferrer">
                                            <h5>Twitter</h5>
                                            <i class="fa fa-twitter-square fa-5x" aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </Col>

                        <Col className="personal-grid">
                            <h3>Personal Contacts</h3>

                            <ul>
                                <li>
                                    <div className="email">
                                        <h4>Email: jsuderman1@gmail.com</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="phone">
                                        <h4>Phone: 800-729-0952</h4>
                                    </div>
                                </li>
                            </ul>
                        </Col>


                    </Row>



                </Container>

            </div>
        )
    }
}
