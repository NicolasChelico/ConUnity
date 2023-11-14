import {React , useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import './specificProgram.css';


const SpecificProgram = () => {

    const [classList, setClassList] = useState([])
    const location = useLocation()
    const { programName } = location.state
   
 
    const {id} = useParams();

    console.log(programName)
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
    

    return(
        <div className="container">
            <div style={{marginTop:'100px'}}>
            <h1> {programName} </h1>
            </div>
            
        <div>
            <ul>
              {
                
                 classList.map((c) => {
                     return (
                        <div key={c.courseID}>
                            <Link to ={`/Program/${id}/${c.courseID}`}>
                                <li> { c.courseCode } </li>
                            </Link>
                        </div>
                     );
                    })
            }
            </ul>
        </div>
           
        </div>
    )

}

export default SpecificProgram;