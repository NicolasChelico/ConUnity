import { React, useState } from "react";

import "./userReview.css";
import ScoreRow from "../dashboard/scoreRow";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const UserReview = (props) => {
  console.log(props);

  const [numberLikes, setNumberLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleClickUp = (e) => {
    e.preventDefault();
    const number = parseInt(e.target.textContent.trim()) + 1;
    setNumberLikes(number);
  };

  const likeIncrease = () => {
    if (!isLiked) {
      setNumberLikes(numberLikes + 1);
      setIsLiked(true);
    } else {
      setNumberLikes(numberLikes - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className="row justify-content-center user__card">
      <div className="col-lg-6 overview ">
        <h2>Users review</h2>
        <p>{props.UserReview}</p>

        <div className="col-lg-10 date">
          <p>Date: {props.date}</p>
        </div>
      </div>

      <div className="col-lg-4 ratings">
        <div className="row ratings__row justify-content-center">
          <div className="col-lg-6 title__holder">
            <h2>Ratings</h2>
            <p>Exams</p>
            <p>Assignments</p>
            <p>overall</p>
          </div>
          <div className="col-lg-6 scoring__section">
            <h5>Out of five</h5>
            <div className="score__box">
              <p>{props.examRating}</p>
            </div>
            <div className="score__box">
              <p>{props.assRating}</p>
            </div>
            <div className="score__box">
              <p>{props.courseRating}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" row justify-content-center message__buttons">
        <div className="col-lg-12 is__accurate">
          <h5>Is This Review Accurate ?</h5>
        </div>
        <div className="col-lg-4 accurate">
          <p className="first-button" name="totalLikes" onClick={likeIncrease}>
            <FaRegThumbsUp /> {numberLikes}
          </p>
        </div>
        <div className="col-lg-4 ">
          <p className="second-button">
            {" "}
            <FaRegThumbsDown />3
          </p>
        </div>
      </div>

      {/* <div className="grading__div">
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
                
            </div> */}
    </div>
  );
};

export default UserReview;
