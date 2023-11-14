import { React , useState, useEffect} from "react";
import { Link, useParams} from 'react-router-dom';

import './courseReview.css'

const CourseReview = (props) => {
    const {courseID}  = useParams()

    console.log(courseID)
    return(
        <div className="top__section"> 
            This is going to be to review a class ! {courseID} 
        </div>
    )
}

export default CourseReview;