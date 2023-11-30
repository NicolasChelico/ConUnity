import React from "react";

import './scoringSection.css';
import ScoreRow from "./scoreRow";

const ScoringSection = props => {


    return(
        <div className="row">
            <div className="ratings__parent">
                <h1 className="rating__title">RATINGS</h1>
                <p>out of five</p>
            </div>
            <ScoreRow title={'Exams: '} score={props.examScore}/>
            <ScoreRow title={'Assignments: '} score={props.assignmentScore}/>
            <ScoreRow title ={'Overall: '} score ={props.overallScore} />
            <div className="number__reviews"><p># of reviews: {props.totalReviews}</p></div>
        </div>
    )
}


export default ScoringSection;