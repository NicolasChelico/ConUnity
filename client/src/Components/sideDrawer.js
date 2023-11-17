import React from "react";
import './sideDrawer.css'
import { IoClose } from "react-icons/io5";

const SideDrawer = (props) => {


    return(

        <div className="side__drawer">
            <div className ="close__button__drawer"><button className="btn" onClick={props.onClick}><IoClose size={25}/></button>  </div>
            <div className="nav__top">
                <h5>Actions</h5>  
            </div>
                
            <ul>
               {props.children}
            </ul>
        </div>
    )


}

export default SideDrawer;