import React from "react";

import './userReview.css'


const UserReview = props =>{

    return(
        <div className="col-lg-12 user__card">
            <div className="container">
            <h1>ervetg</h1>
            <div className="grading__div">
                <span className="grading__score">
                    <p>Exam Rating: {props.examRating}/5</p>
                    <p>Assignment Rating: {props.assRating}/5</p>
                    <p>Overall Rating: {props.courseRating}/5</p>
                </span>
            </div>
            <div className="review__section">
                <p> {props.UserReview}</p>
            </div>
            <div>
                <p> Date: {props.date}</p>
            </div>
            <div className="rating__section">
                <span className="approve__buttons">
                    <button>approve this</button>
                    <button> dont approve this</button>
                </span>
                
            </div>
            
        
            </div>
        </div>
    );
}

export default UserReview;