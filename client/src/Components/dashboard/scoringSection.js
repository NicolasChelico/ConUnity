import React from "react";

import './scoringSection.css';

const ScoringSection = props => {


    return(
        <div>
            <div>
                <div>      
                    <span>Exams  <span> {props.examScore} /5 </span></span>
                </div>
            </div>
            <div>
                <div>      
                    <span>Assignments <span> {props.assignmentScore} /5 </span></span>
                </div>
            </div>
            <div>
                <div>      
                    <span>Overall <span> {props.overallScore} /5 </span></span>
                </div>
            </div>
        </div>
    )
}


export default ScoringSection;