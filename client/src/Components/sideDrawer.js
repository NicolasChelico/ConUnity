import React from "react";
import './sideDrawer.css'
import { IoClose } from "react-icons/io5";

const SideDrawer = (props) => {


    return(

        <div className="side__drawer">
            <div className ="close__button__drawer"><button onClick={props.onClick}><IoClose size={35}/></button>  </div>
            <ul>
                <li>Subject 1</li>
                <li>Subject 1</li>
                <li>Subject 1</li>
                <li>Subject 1</li>
                <li>Subject 1</li>
            </ul>
        </div>
    )


}

export default SideDrawer;