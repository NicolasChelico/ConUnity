import { React , useState, useEffect} from "react";
import { Link, useParams, useLocation} from 'react-router-dom';
import axios from "axios";

import './courseReview.css'
import ReviewCard from "./dashboard/reviewCard";

import UserReview from "./readingReviews/userReview";

const CourseReview = (props) => {
    const {courseID, id}  = useParams()
    const [review, setReviews] = useState([])
    const [loggedIn, setLoggedIn] = useState(false);
    

   
    const users = [{
        userID:'1',
        userName:'nicolaschelico',
        password:'soen357'
    }]

    const location = useLocation()
   
    const { courseCode , courseDescription} = location.state
 

    useEffect(() => {
        const fetchReviews = async () =>{
            try{
                const res = await axios.get(`http://localhost:8801/Program/${id}/${courseID}`)
                setReviews(res.data) 
            }catch(err){
                console.log(err)
            }
        }
        fetchReviews();      
    },[courseID])
    console.log(review)


    return(
        <div className="row top__section" >
            <div className="courses__hero">
                    <div className='course__code'>
                        <h1>{courseCode}</h1>
                    </div>
      
            </div>

        <div className="row justify-content-center">

        <div className="col-lg-10 justify-content-center dashboard__section">
            <ReviewCard 
                courseID= {courseID.split(" ").join("")}
                courseCode={courseCode}
                totalReviews={review.length}
                courseDescription={courseDescription}
            />
        </div>
        <div className="col-lg-8">
            <h1 className="review__tag"> Reviews </h1>
            {
                review.length === 0 && (
                 
                        <div><h5>No reviews done yet.. be the first!</h5></div>
                    
                ) 
            }
            {
                    review.map((rev,id) => {
                       return( 
                        <div key={id}>
                            <UserReview  
                                date={rev.date.slice(0,9)} 
                                UserReview={rev.review}
                                examRating={rev.examRating}
                                assRating={rev.assRating}
                                courseRating={rev.contentRating}     
                            />
                        </div>
                       );
                })
            }
        </div>
        
        </div>
        <div>
        </div>
       </div>
    )
}

export default CourseReview;