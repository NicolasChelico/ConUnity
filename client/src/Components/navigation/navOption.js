import React from "react";

import './navOption.css'
import { Link, NavLink } from "react-router-dom";


const NavOption = (props) => {


    return(
        <div>
            <NavLink to={props.trajectory}>
                <li>      
                    <span className="nav__icon"> {props.action} {props.children}</span>
                </li>
            </NavLink>
        </div>
    )
}

export default NavOption;