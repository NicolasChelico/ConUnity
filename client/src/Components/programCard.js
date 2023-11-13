import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './programCard.css'


const ProgramCard = props => {
    const style={
        width:'18rem',
        height:'14rem'
        // backgroundImage: "url('https://unsplash.com/photos/blue-and-silver-industrial-machine-nyAzMQ6Ejgs')"
    }

    return (

    <>
        <Card style={ style } className="class__card">
            <Card.Body >
                <Card.Title style={{fontSize:'35px'}}>{props.programName}</Card.Title> 
                <Link to ="/program:id"><Button variant="primary">View Courses</Button></Link>
            </Card.Body>
        </Card>
    </>
        
    )
}

export default ProgramCard;