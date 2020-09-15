import React, { Component } from 'react'
import { Card } from "react-bootstrap";

export default class Cards extends React.Component {
    render(props) {
        console.log(this.props)
        return (
            <div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">"{this.props.subtitle}"</Card.Subtitle>
                            <Card.Text>{this.props.text} </Card.Text>
    
                            <Card.Link href="https://github.com/jsuderman/homework-javascript" target="_blank">{this.props.link}</Card.Link>
                            <Card.Link href="#">""</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
