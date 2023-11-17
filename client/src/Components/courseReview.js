import { React , useState, useEffect} from "react";
import { Link, useParams} from 'react-router-dom';
import axios from "axios";

import './courseReview.css'
import ReviewCard from "./dashboard/reviewCard";

import UserReview from "./reviews/userReview";

const CourseReview = (props) => {
    const {courseID}  = useParams()
    const [reviews, setReviews] = ([]);
    const [loggedIn, setLoggedIn] = useState(false);

    const users = [{
        userID:'1',
        userName:'nicolaschelico',
        password:'soen357'
    }]

    
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
        <div className="row top__section" >
            <div className="courses__hero">

            </div>
            
        {/* <div className="top__section"> 
            This is going to be to review a class ! {courseID} 
        </div>
        <div className="add__review__button">
            <button onClick={() => {loggedIn ? setLoggedIn(false) : setLoggedIn(true)}}>ADD REVIEW</button>
        </div> */}
        <div className="row justify-content-center">
        <div className="col-lg-10 justify-content-center dashboard__section">
            <ReviewCard courseID= {courseID}/>
           
        </div>
        <div className="col-lg-8">
            <h1 className="review__title"> Reviews </h1><hr></hr>
            <UserReview  date={'2023-09-11'} UserReview={'wgrlbwqlgbfwengfowqngibwu iowqgrbiqjwrengko wonqegbqrweigniwng wgeqorn;qrewgo; '}/>
        </div>
        
        </div>
        <div>
        </div>
       </div>
    )
}

export default CourseReview;