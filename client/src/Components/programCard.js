import React from "react";
import { Link } from "react-router-dom";

import './programCard.css'


const ProgramCard = props => {
    

    return (
        <div className="col-lg-3 class__card">
            <h5> {props.programName}</h5>
            <hr />
            <Link to ='/program:id'><button>View Courses</button></Link>
        </div>
    )
}

export default ProgramCard;