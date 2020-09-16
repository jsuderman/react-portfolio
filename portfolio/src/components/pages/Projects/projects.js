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
                            subtitle="HTML | Javascript"
                            text="This app asks user several questions in order to automatically generate a password that will be realiable and secure."
                            linkRepo="https://github.com/jsuderman/homework-javascript"
                            linkRepoHeader = "Github Repo"
                            linkDeployed = "https://jsuderman.github.io/homework-javascript/"
                            linkDeployedHeader = "Github Pages"
                        />
                        <Cards
                            title="NODE/OPP Team Profile Generator"
                            subtitle="NODE | OOP"
                            text="This app helps build and place members into different teams based on the users qualifications."
                            linkRepo="https://github.com/jsuderman/10-OPP"
                            linkRepoHeader = "Github Repo"
                            linkDeployed = "https://drive.google.com/file/d/1T124o9whYOPYq4LZnbADt7ICMo-0_T6e/view"
                            linkDeployedHeader = "Video Walk-Thru"
                        />
                        <Cards
                            title="Express Note Taker"
                            subtitle="NodeJS | Express"
                            text="This app allows a user to take a save notes using express. User can mark a note or delete when no longer needed."
                            linkRepo="https://github.com/jsuderman/express-note-takerHW"
                            linkRepoHeader = "Github Repo"
                            linkDeployed = "https://sleepy-coast-34558.herokuapp.com/"
                            linkDeployedHeader = "Deployed with Heroku"
                        />
                    </Row>
                    <br />
                    <br />
                    <Row className="row-two">
                        <Cards
                            title="Brewery Map"
                            subtitle="Full Stack"
                            text="This App allows a user to input a zip code to find brewiers in that specific area. Cards of info will auto populate for the user to get more info on a specific brewery."
                            linkRepo="https://github.com/kvrivas854/brewery-map"
                            linkRepoHeader = "Github Repo"
                            linkDeployed = "https://kvrivas854.github.io/brewery-map/"
                            linkDeployedHeader = "Github Page"
                        />
                        <Cards
                            title="React Employee Directory"
                            subtitle="ReactJS | API"
                            text="This App make a call to an outside API to retreive data and display it on page.  It also allows user to search different employees and filters that search in real time"
                            linkRepo="https://github.com/jsuderman/React-Employee-Directory"
                            linkRepoHeader = "Github Repo"
                            linkDeployed = "https://jsuderman.github.io/React-Employee-Directory/"
                            linkDeployedHeader = "Github Page"
                        />
                        <Cards
                            title="NOSQL Workout Tracker"
                            subtitle="MongoDB"
                            text="This App allows a users to track different workouts by saving workouts in MongoDB.  Each user is svaed using special keys and then grpah their progress."
                            linkRepo="https://github.com/jsuderman/NOSQL-Workout-Tracker"
                            linkRepoHeader = "Github Repo"
                            linkDeployed = "https://nosql-worktracker.herokuapp.com/"
                            linkDeployedHeader = "Heroku App"
                        />
                    </Row>
                </Container>
            </div>
        )
    }
}
