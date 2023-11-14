import { React , useState, useEffect} from "react";
import { Link, useParams} from 'react-router-dom';
import axios from "axios";

import './courseReview.css'

const CourseReview = (props) => {
    const {courseID}  = useParams()
    const [reviews, setReviews] = ([]);

    useEffect(() => {
        const fetchReviews = async () =>{
            try{
                const res = await axios.get(`http://localhost:8801/Program/${courseID}`)
                setReviews(res.data)     
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchReviews();
    },[courseID])


    

    console.log(courseID)
    return(
        <div className="top__section"> 
            This is going to be to review a class ! {courseID} 
        </div>
    )
}

export default CourseReview;