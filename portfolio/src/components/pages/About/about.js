import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";


export default class About extends Component {
    render() {
        return (
            <div className="about-grid">
                <br />
                <Container>
                    <Row>
                        <Col>
                            <div className="banner">
                                <h2>Full Stack Web Developer</h2>
                                <p> HTML | CSS | Javascript | ReactJS | NodeJS | Express | mySQL | MongoDB </p>
                            </div>
                        </Col>



                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                        <h3>Justin Suderman</h3>
                        <img alt="self-pic" src={require('../../../images/IMG_9628.png')} />
                        </Col>
                       
                        <Col>
                            <h3>About Me</h3>
                            <p>
                                Justin is currently a retail expert at GMR Marketing, with exiperence working face
                                to face with customers, consulting and advising.  He also has exiperence in the athletic
                                administration field.  As an athletic director, he was in charge of hiring and leading staff
                                and coaches, implemintation of standards and guidelines, and working withing given budget for
                                the year.
                            </p>
                            <p>
                                Justin is passionate about working and collaborating with others, while also solving through
                                team collaberation, outside the box thinking, and asking many questions.  Helping others is something
                                he enjoys doing and will go out of his way to do so.  It will be very hard ot find someone who will
                                out work Justin on a day to day basis.
                            </p>
                            <p>
                                Justin is currently finishing up a coding bootcamp with UNC-Charlotte.  He is eager to take on a new career
                                as a full stack web developer and implement the new skills learned.  Please take a look at the projects he has
                                worked on.
                             </p>
                        </Col>


                    </Row>



                </Container>


            </div>
        )
    }
}
