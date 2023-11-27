import React from "react";

import './navOption.css'
import { Link, NavLink } from "react-router-dom";


const NavOption = (props) => {

console.log("im getting the programs " , props.programList)
    return(
        <div className="navlink__option">
            <NavLink to={props.trajectory} state = {{programList: props.programList}}>
                <li onClick={props.onClick}>      
                    <span className="nav__icon"> {props.children} {props.action} </span>
                </li>
            </NavLink>
        </div>
    )
}

export default NavOption;