import {React , useState, useEffect} from "react";
import {  Link, useLocation, useParams } from "react-router-dom";
import './reviewCard.css';
import ScoringSection from "./scoringSection";
import axios from "axios";

const ReviewCard = props => {

    const [courseInfo, setCourseInfo] = useState([])

    const {courseID} = useParams();
    useEffect(() => {
        const fetchCourseInfo = async () => {
            try{
                const res = await axios.get(`http://localhost:8801/CourseInfo/${courseID}`)
                setCourseInfo(res.data)
            }catch(err){
                console.error(err)
            }
        }
        fetchCourseInfo();
    },[courseID])
 
console.log(courseInfo , 'this is from the other side')


    return (
        <div className="container">
            <div className="row justify-content-center dashboard__main">   
                <div className="col-lg-6 holders course__description">
                    <h1>OVERVIEW</h1>
                    {
                        courseInfo.map((c) => {return (
                        <>
                            <p>{c.description}</p>
                            <Link to={`/Review/${c.courseCode}/${props.courseID}`}><button className="review__me"> Leave a Review!</button></Link>
                        </>
                        )})                     
                    }
    
                </div>
                <div className="col-lg-6 holders ">
                    <ScoringSection 
                            examScore={props.examScore} 
                            assignmentScore={props.assignmentScore} 
                            overallScore={props.overallScore}
                            totalReviews = {props.totalReviews}
                    />
                    <div>
                    
                    </div>       
                </div>            
            </div>
        </div>
    )
}

export default ReviewCard