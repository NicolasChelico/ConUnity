import React from "react";
import { Link } from "react-router-dom";
import './programList.css'

const ProgramList = props => {

    
    return(

    <div className='list__holder'>
        <h2>{props.title}</h2>
        <ul>
          {
             props.course.map((c) => {
                 return (  
                        <div key={c.courseID}>
                            <Link to ={`/Program/${props.id}/${c.courseID}`} state={{courseCode: c.courseCode, courseDescription: c.description}}>
                                <li style={{paddingLeft:'0!important'}}> { c.courseCode } </li>
                            </Link>
                        </div> 
                )})}
        </ul>
    </div>
    );
}

export default ProgramList;