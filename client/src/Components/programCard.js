import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './programCard.css'


const ProgramCard = props => {
    const style={
        width:'15rem',
        height:'12rem'
        // backgroundImage: "url('https://unsplash.com/photos/blue-and-silver-industrial-machine-nyAzMQ6Ejgs')"
    }

    return (

    <>
        <Card style={ style } className="class__card">
            <Card.Body >
                <Card.Title style={{fontSize:'25px'}}>{props.programName}</Card.Title> 
                <Link to ={`/Program/${props.programID}`} state={{programName: props.programName}}><Button variant="primary">View Courses</Button></Link>
            </Card.Body>
        </Card>
    </>
        
    )
}

export default ProgramCard;