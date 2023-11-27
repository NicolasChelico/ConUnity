import {React, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
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
    // const { programList } = location.state;
   
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
        setReview(prev => ({ ...prev, courseID: e.target.value }));
    }
    
    const handleChange = (e) =>{
        setReview(prev => ({...prev, [e.target.name]:e.target.value}))
    
     }
     useEffect(() => {console.log(review)},[event,optionCourses,selectCourse, review])
    
    return(
    <div className="form">
        <h1> Review a Class!</h1>
        <hr></hr>
      
            <label> Choose a Program: </label>
            <select onChange = {onProgramChangeHandler}>
                <option> Choose Program</option>
                {programList?.map((p) => {
                    return(<option name="courseID" key={p.programID} value={p.programID}> {p.programName}</option>)
                })}
            </select>

        <div>
        <label>Choose Course:</label>
        <select onChange={(onCourseSelection)}>
            <option value="none"> choose course..</option>
            {optionCourses.length === 0 ? (<option value="none">No Courses...</option>)
                :(optionCourses.map(c => {
                    return (<option key={c.courseID} value={c.courseID} name="courseID">{c.courseCode}</option>)
                }))   
        }
        </select>
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
            <textarea type="text"  col={5} rows={8} placeholder="Review..." onChange={handleChange} name="review"/>
        </div>
        <button className="btn btn-lg submit__button">Submit Review <FiSend /></button>
    </div>
    );
}

export default NavbarForm;