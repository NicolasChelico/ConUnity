import React from "react";
import './reviewCard.css';
import ScoringSection from "./scoringSection";


const ReviewCard = props => {


    return (
        <div className="col-lg-5 dashboard__main">
            
        <div> 
            <h4>Course Score for {props.courseID}</h4>
                <h4>{props.score}</h4> 
                <span>/5</span>
                <span>{props.totalReview} Reviews</span>
                <hr></hr>
            </div>
            <div>
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