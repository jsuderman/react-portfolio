import React from 'react'
import { Card } from "react-bootstrap";

export default class Cards extends React.Component {
    render(props) {
        console.log(this.props)
        return (
            <div>
                <div>
                    <Card style={{ width: '20rem', height: '15rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">"{this.props.subtitle}"</Card.Subtitle>
                            <Card.Text>{this.props.text} </Card.Text>
    
                            <Card.Link href={this.props.linkRepo} 
                            target="_blank">{this.props.linkRepoHeader}
                            </Card.Link>
                            <Card.Link href={this.props.linkDeployed} 
                            target="_blank">{this.props.linkDeployedHeader}
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
