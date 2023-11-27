import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './programCard.css'


const ProgramCard = props => {
    const style={
        width:'250px',
        height:'200px'
        // backgroundImage: "url('https://unsplash.com/photos/blue-and-silver-industrial-machine-nyAzMQ6Ejgs')"
    }

    return (
    
    <>
        <Card style={ style } className="class__card">
            <Card.Body >
                <Card.Title className="card__title" style={{fontWeight:'700'}}> <strong>{props.programName}</strong></Card.Title> 
                <Link to ={`/Program/${props.programID}`} state={{programName: props.programName}}><Button className="reiew__program__button" variant="primary">Review</Button></Link>
            </Card.Body>
        </Card>
    </>
        
    )
}

export default ProgramCard;