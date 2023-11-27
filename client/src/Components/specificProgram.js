import {React , useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import './specificProgram.css';
import ProgramList from "./program-list/programList";


const SpecificProgram = (props) => {

    const [classList, setClassList] = useState([])
    const [pName, setName] = useState("")
    const location = useLocation()
    
    // const { programName } = location.state
   const p = props.program;
   console.log(p)
    const {id} = useParams();

    useEffect(() => {
        const fetchProgram = async () =>{
            try{
                const res = await axios.get(`http://localhost:8801/Main/${id}`)
                setName(res.data) 
            }catch(err){
                console.log(err)
            }
        }
        fetchProgram();
    }
    , [])

    useEffect(() => {
        const fetchClasses = async () =>{
            try{
                const res = await axios.get(`http://localhost:8801/Program/${id}`)
                setClassList(res.data) 
            }catch(err){
                console.log(err)
            }
        }
        fetchClasses();
    }
    , [id])
    
    console.log(pName)

    const twoHundred = classList.filter((o) => {
        return o.courseCode.charAt(5) === '2';
    })
    const threeHundred = classList.filter((o) => {
        return o.courseCode.charAt(5) === '3'
    })
    const fourHundred = classList.filter((o) => {
        return o.courseCode.charAt(5) === '4'
    })

    
    return(
        <div className="container">
            <div style={{margin:'100px 0'}}>
            <h1> {pName} </h1>
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