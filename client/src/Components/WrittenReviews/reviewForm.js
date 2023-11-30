import { React, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiSend } from "react-icons/fi";

import './reviewForm.css'


const ReviewForm = props => {
    const date = new Date();
    const reviewDate = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();

    console.log(props.courseID)
    const navigate = useNavigate()

     const [review, setReview] = useState({
        review: '',
        date: reviewDate,
        courseID: props.courseID,
        grade: '',
        examRating: '',
        contentRating: '',
        assRating: ''
     });

     const handleChange = (e) =>{
        setReview(prev => ({...prev, [e.target.name]:e.target.value}))
        console.log(review)
     }


     const handleClick = async e =>{
        e.preventDefault()
        if(review.review === ""){return alert("Please fill out a Review")}
        try{
            await axios.post("http://localhost:8801/Review/:courseCode/:courseID", review)
            console.log(review)
            navigate("/")
        }catch(err){
            console.log(err)
        }
     }

    return(
        <div className="row form__card justify-content-center">
            <div className="form">
                <h2 className='class__title'>Review {props.courseCode}</h2>
                <input type="number" placeholder='Exam Rating' onChange={handleChange} name='examRating'/>
                <input type="number" placeholder='Assignment Rating' onChange={handleChange} name='assRating'/>
                <input type="number" placeholder='Overall Rating' onChange={handleChange} name='contentRating'/>
                <input type="text" placeholder='Grade' onChange={handleChange}name='grade'/>
                <textarea rows="5" cols="20" resize="none" type="text" placeholder='Review...' onChange={handleChange} name='review' />
                <div>
                    <button className='btn btn-lg submit__button' onClick={handleClick}>Submit Review <FiSend /></button>
                </div>
            </div>
        </div>
    );
}

export default ReviewForm