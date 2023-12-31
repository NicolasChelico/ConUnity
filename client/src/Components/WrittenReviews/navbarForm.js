import {React, useEffect, useState} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import './navbarForm.css'
import { FiSend } from "react-icons/fi";

const NavbarForm = props =>{

    const date = new Date();
    const reviewDate = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();

    const [programList, setProgramList] = useState([]);
    const [courses, setCourses] = useState([])
    const [optionCourses, setOptionCourses] = useState([])
    const [event, setEvent] = useState()
    const [selectCourse, setSelectCourse] = useState("");
    const location = useLocation()
    const navigate = useNavigate();
   
    const [review, setReview] = useState({
        review: '',
        date: reviewDate,
        courseID: 0,
        grade: '',
        examRating: '',
        contentRating: '',
        assRating: ''
     });

     
    useEffect(() => {
        const fetchCourses = async () => {
            try{
                const res = await axios.get("http://localhost:8801/ReviewCourse")
                setCourses(res.data)
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchCourses()
    },[])
    
    useEffect(() => {
        const fetchPrograms = async () =>{
            try{
                const res = await axios.get("http://localhost:8801/Home")
                setProgramList(res.data)          
            }catch(err){
                console.log(err)
            }
        }
        fetchPrograms();
    }
    , [])


    const onProgramChangeHandler = e => {     
        setEvent(e.target.value)
        const targetCourses = courses.filter(c => {return c.programID === parseInt(e.target.value)})
        setOptionCourses(targetCourses);   
    }
    
    const onCourseSelection = e =>{
        setSelectCourse(e.target.value);
        setReview(prev => ({ ...prev, courseID: parseInt(e.target.value) }));
    }
    
    const handleChange = (e) =>{
        setReview(prev => ({...prev, [e.target.name]:e.target.value}))
    
     }
     useEffect(() => {console.log(review)},[event,optionCourses,selectCourse, review])

     const handleClick = async e => {
        e.preventDefault()
        if(review.review === ""){return alert("Please fill out a Review")}
        try{
            await axios.post("http://localhost:8801/Review/:courseCode/:courseID", review)
            alert("Review was successfully registered!")
            navigate("/")

        }catch(err){
            console.error(err)
        }
     }


    return(
        <div className="form__hero">
            <div className="form">
                <div className="review__title">
                <h1> Review a Course!</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    <label> Choose a Program: </label>
                    <select onChange = {onProgramChangeHandler}>
                        <option> Choose Program</option>
                        {programList?.map((p) => {
                            return(<option name="courseID" key={p.programID} value={p.programID}> {p.programName}</option>)
                        })}
                    </select>
                    </div>

                <div className="col-lg-6">
                    <label>Choose Course:</label>
                    <select onChange={(onCourseSelection)}>
                        <option value="none"> Eg. COMP248</option>
                        {optionCourses.length === 0 ? (<option value="none">No Courses...</option>)
                            :(optionCourses.map(c => {
                                return (<option key={c.courseID} value={c.courseID} name="courseID">{c.courseCode}</option>)
                            }))   
                    }
                    </select>
                </div>
                </div>
                <div className="rating__row">
                    <label> Exam Rating (Score 0-5): </label>
                    <input type="number" min={0} max={5} placeholder="Exam Rating /5" onChange={handleChange} name="examRating"/>
                </div>
                <div>
                    <label>Assignment Rating (Score 0-5) </label>
                    <input type="number" min={0} max={5} placeholder="Assignment Rating /5" onChange={handleChange} name="assRating"/>
                </div>
                <div>
                    <label>Overall Rating (Score 0-5)</label>
                    <input type="number" min={0} max={5} placeholder="Overall Rating /5" onChange={handleChange} name="contentRating"/>
                </div>
                <div>
                    <label>Review:</label>
                    <textarea type="text"  col={5} rows={7} placeholder="Review..." onChange={handleChange} name="review"/>
                </div>
                <button className="btn btn-lg submit__button" onClick={handleClick}>Submit Review <FiSend /></button>
            </div>
    </div>
    );
}

export default NavbarForm;