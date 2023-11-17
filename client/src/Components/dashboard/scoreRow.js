import React from "react";


import './scoreRow.css'

// This component is for each row that holds a score: Exams, assignments and overall
const ScoreRow = props =>{

    return(
        <div className="row holder__row">
            <div className=" col-lg-6" >      
                <span className="score__title">{props.title}  </span>
            </div>     
            <div className="col-lg-6">
                    <span className="score__number">{props.score} /5 </span>
            </div>
        </div>
        
    )
}

export default ScoreRow;