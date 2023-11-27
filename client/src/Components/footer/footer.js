import React from "react";
import {  } from "react-router-dom";

import './footer.css';


export const Footer = () => {

   const location = window.location.href;
   console.log("Current location: " , location)
    return (
        <div className="row main__footer">
            <div className="col-lg-6">
                <h1>Logo comes right here</h1>
            </div>
            <div className="col-lg-6">
                <p>information here</p>
            </div>
            <div className="copyright__message">
                <p>Copyright of Conutiy</p>
            </div>
        </div>
    )
}