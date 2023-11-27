import React from "react";
import { Link } from "react-router-dom";
import './sideDrawer.css'
import { IoClose } from "react-icons/io5";

const SideDrawer = (props) => {


    return(

        <div className="side__drawer">
            <div className="exit__button">
                <button className="btn" onClick={props.onClick}>
                        <IoClose size={20}/>
                        </button> 
            </div>
                <div className ="close__button__drawer">
                    <h5>CONUNITY</h5>
                    <div className="leave__review__button">
                        <button><Link>Leave a Review!</Link></button>
                    </div>
                </div>
               
                
            <ul>
               {props.children}
            </ul>
        </div>
    )


}

export default SideDrawer;