import {React , useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './specificProgram.css';


const SpecificProgram = props => {

    const [classList, setClassList] = useState([])
    const {id} = useParams()
    
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
    , [])
  
    return(
        <div className="container">
            <h1>  </h1>
        <div>
            <ul>
              {
                
                 classList.map((c) => {
                     return (
                        <div key={c.courseID}>
                            <li> { c.courseCode } </li>
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