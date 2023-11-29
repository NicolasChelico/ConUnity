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
        <div>
            <div className="background__hero">
                    <div className='row mission__statement'>
                        <h1>Mission Statement</h1>
                    </div>
            </div>
            <div className="program__holder__name">
                    <h1> {pName} </h1>
                </div>
            <div className="information__holder">
                <div className="program__card__holder">               
                        <ProgramList course={twoHundred} title="200" id = {id} />
                        <ProgramList course={threeHundred} title="300" id = {id}/>
                        <ProgramList course={fourHundred} title="400" id = {id}/> 
                </div>    
            </div>
        </div>
    )

}

export default SpecificProgram;