import React from "react";


import './scoreRow.css'

// This component is for each row that holds a score: Exams, assignments and overall
const ScoreRow = props =>{

    return(
        <div className="row__holder">
                <h4>{props.title}</h4>
                <div className="score__number">
                        <p>{props.score}</p>
                </div>
        </div>
        
    )
}

export default ScoreRow;