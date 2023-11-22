import React from "react";
import {  Link, useLocation } from "react-router-dom";
import './reviewCard.css';
import ScoringSection from "./scoringSection";


const ReviewCard = props => {
    const courseCode = props.courseCode.slice(0,4) + props.courseCode.slice(5,);
    console.log(courseCode)
    return (
        <div className="row dashboard__main">    
            <div className="col-lg-6"> 
                <h1>{props.courseCode}</h1>
            </div>
            <div className="col-lg-6 total__reviews">
                <h4> Total reviews:  {props.totalReviews} <span className="review__button"><Link to={`/Review/${courseCode}/${props.courseID}`}><button className="btn review__me"> Review me!</button></Link></span></h4> 
            </div>
            <div className="col-lg-6">
                
            </div>
            <hr></hr>
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