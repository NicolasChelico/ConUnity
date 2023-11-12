import {React , useState } from "react";

import './specificProgram.css';


const SpecificProgram = props => {

    const [classList, setClassList] = useState([])
    
    

    return(
        <div className="container">
           <ul>
                {props.map((p) => {
                    return <li className="side__nav__options"> {p.child}</li>
                })}
           </ul>
        </div>
    )

}