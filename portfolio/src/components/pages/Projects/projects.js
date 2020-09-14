import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cards from "../../Cards/cards"
import "./style.css";

export default class Projects extends Component {
    render() {
        return (
            <div className="project-back">
                <div>
                    <h1>Projects</h1>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col lg={true}>
                                <Cards />
                                <Cards />
                                <Cards />
                            </Col>
                            
                        </Row>
                        <Row lg={true}>
                            <div>
                                <Cards />
                            </div>
                            <div>
                                <Cards />
                            </div>
                            <div>
                                <Cards />
                            </div>
                        </Row>

                    </Container>
                    
                </div>
                
            </div>
        )
    }
}
