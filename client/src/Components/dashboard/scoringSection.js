import React from "react";

import './scoringSection.css';
import ScoreRow from "./scoreRow";

const ScoringSection = props => {


    return(
        <div className="row">
            <ScoreRow title={'Exams: '} score={props.examScore}/>
            <ScoreRow title={'Assignments: '} score={props.assignmentScore}/>
            <ScoreRow title ={'Overall: '} score ={props.overallScore} />
   
        </div>
    )
}


export default ScoringSection;