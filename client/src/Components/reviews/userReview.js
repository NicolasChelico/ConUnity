import React from "react";

import './userReview.css'


const UserReview = props =>{

    return(
        <div className="col-lg-12 user__card">
            <h1>ervetg</h1>
            <div className="review__section">
                <p> {props.UserReview}</p>
            </div>
            <div>
                <p>{props.date}</p>
            </div>
            
        
            
        </div>
    );
}

export default UserReview;