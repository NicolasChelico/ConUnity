import { React, useState} from 'react'; 
import { useParams, Link, useLocation } from "react-router-dom";

import './reviewPage.css'
import ReviewForm from './reviewForm';


const ReviewPage = props => {
const {courseID, courseCode} = useParams()
 console.log(courseCode)
        return(
            <div className="review__page">
                <ReviewForm courseCode={courseCode} courseID ={courseID}/>
            </div>
        );
}

export default ReviewPage;