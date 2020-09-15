import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cards from "../../Cards/cards"
import "./style.css";

export default class Projects extends Component {
    render() {

        return (
            <div className="project-back">
                <h1>Projects</h1>
                <br />
                <Container>
                    <Row className="row-one">
                        <Cards
                            title="Password Generator"
                            subtitle="HTML , Javascript"
                            text="This app asks user several questions in order to automatically generate a password that will be realiable and secure."
                            link="Github Repo"
                        />
                        <Cards
                            title="Password Generator"
                            subtitle="HTML , Javascript"
                            text="This app asks user several questions in order to automatically generate a password that will be realiable and secure."
                            link="Github Repo"
                        />
                        <Cards
                            title="Password Generator"
                            subtitle="HTML , Javascript"
                            text="This app asks user several questions in order to automatically generate a password that will be realiable and secure."
                            link="Github Repo"
                        />
                    </Row>
                    <br />
                    <br />
                    <Row className="row-two">
                        <Cards
                            title="Password Generator"
                            subtitle="HTML , Javascript"
                            text="This app asks user several questions in order to automatically generate a password that will be realiable and secure."
                            link="Github Repo"
                        />
                        <Cards
                            title="Password Generator"
                            subtitle="HTML , Javascript"
                            text="This app asks user several questions in order to automatically generate a password that will be realiable and secure."
                            link="Github Repo"
                        />
                        <Cards
                            title="Password Generator"
                            subtitle="HTML , Javascript"
                            text="This app asks user several questions in order to automatically generate a password that will be realiable and secure."
                            link="Github Repo"
                        />
                    </Row>
                </Container>
            </div>
        )
    }
}
