import {React , useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import './specificProgram.css';
import ProgramList from "./program-list/programList";


const SpecificProgram = () => {

    const [classList, setClassList] = useState([])
   
    const location = useLocation()
    const { programName } = location.state
   
 
    const {id} = useParams();

    useEffect(() => {
        const fetchClasses = async () =>{
            try{
                const res = await axios.get(`http://localhost:8801/Program/${id}`)
                setClassList(res.data)     
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchClasses();
    }
    , [id])
    
    const twoHundred = classList.filter((o) => {
        return o.courseCode.charAt(5) === '2';
    })
    const threeHundred = classList.filter((o) => {
        return o.courseCode.charAt(5) === '3'
    })
    const fourHundred = classList.filter((o) => {
        return o.courseCode.charAt(5) === '4'
    })

    console.log(twoHundred)

    return(
        <div className="container">
            <div style={{margin:'100px 0'}}>
            <h1> {programName} </h1>
            </div>
        <div className="row">
                <ProgramList course={twoHundred} title="Two Hundreds" id = {id}/>
                <ProgramList course={threeHundred} title="Three Hundreds" id = {id}/>
                <ProgramList course={fourHundred} title="Four Hundreds" id = {id}/> 
        </div>    
        </div>
    )

}

export default SpecificProgram;