import React from "react";
import { Link } from "react-router-dom";
import './programList.css'

const ProgramList = props => {

    console.log("this is from program list ",  props.courseID)
    console.log(props.courseID)
    
    return(

    <div className='col-lg-4 list__holder'>
        <h2>{props.title}</h2>
        <ul>
          {
             props.course.map((c) => {
                 return (  
                        <div key={props.course.courseID}>
                            <Link to ={`/Program/${props.id}/${c.courseID}`}>
                                <li> { c.courseCode } </li>
                            </Link>
                        </div> 
                )})}
        </ul>
    </div>
    );
}

export default ProgramList;