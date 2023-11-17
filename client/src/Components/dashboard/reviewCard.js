import React from "react";
import './reviewCard.css';
import ScoringSection from "./scoringSection";


const ReviewCard = props => {


    return (
        <div className="row dashboard__main">    
            <div className="col-lg-6"> 
                <h1>Course Name : {props.courseID}</h1>
            </div>
            <div className="col-lg-6 total__reviews">
                <h4>{props.totalRevies} reviews <span className="review__button"><button className="btn review__me"> Review me!</button></span></h4> 
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