import React from "react";
import {  Link, useLocation } from "react-router-dom";
import './reviewCard.css';
import ScoringSection from "./scoringSection";


const ReviewCard = props => {


    console.log("i have the course code " , props.courseCode)
    return (
        <div className="row dashboard__main">    
            <div className="col-lg-6"> 
                <h1>{props.courseCode}</h1>
            </div>
            <div className="col-lg-6 total__reviews">
                <h4> Total reviews:  {props.totalReviews} <span className="review__button"><Link to={`/Review/${props.courseCode}/${props.courseID}`}><button className="btn review__me"> Review me!</button></Link></span></h4> 
            </div>
            <div className="col-lg-6">
                
            </div>
            <hr></hr>
            <div className="col-lg-6 course__description">
                <p>Description</p>
                <p>{props.courseDescription}</p>
            </div>
            <div className="col-lg-6">
                <ScoringSection 
                        examScore={props.examScore} 
                        assignmentScore={props.assignmentScore} 
                        overallScore={props.overallScore}
                />       
            </div>
            
           
        </div>
    )
}

export default ReviewCard