import {React, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './navbarForm.css'

const NavbarForm = props =>{

    const [courses, setCourses] = useState([])
    const [optionCourses, setOptionCourses] = useState([])
    const [event, setEvent] = useState()
    const [selectCourse, setSelectCourse] = useState("");
    const location = useLocation()
    const { programList } = location.state;
   
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
    
    const onProgramChangeHandler = e => {     
        setEvent(e.target.value)
        const targetCourses = courses.filter(c => {return c.programID === parseInt(e.target.value)})
        setOptionCourses(targetCourses);   
    }
    
    const onCourseSelection = e =>{
        setSelectCourse(e.target.value);

    }
    useEffect(() => {
        console.log(" this is the event: ", event)
        console.log("These are the option courses: " ,optionCourses)
        console.log("This is the selected courseID:  " ,selectCourse)
    },[event,optionCourses,selectCourse])
    

    return(
    <div className="form">
        <h1> Review a Class!</h1>
        <hr></hr>
        <label> Choose a Program: </label>
        <select onChange = {onProgramChangeHandler}>
            <option> Choose Program</option>
            {programList.map((p) => {
                return(<option key={p.programID} value={p.programID}> {p.programName}</option>)
            })}
        </select>
        <div>
        <label>Choose Course:</label>
        <select onChange={(onCourseSelection)}>
            {optionCourses.length === 0 ? (<option value="none">No Courses...</option>)
                :(optionCourses.map(c => {
                    return (<option key={c.courseID} value={c.courseID}>{c.courseCode}</option>)
                }))   
        }
        </select>
        </div>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
    </div>
    );
}

export default NavbarForm;