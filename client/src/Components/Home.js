import { React , useState, useEffect } from 'react';
import axios from "axios";
import Navbar from "./navigation/Navbar";
import './Home.css'
import SideDrawer from "./sideDrawer";
import Search from "./search";
import ProgramCard from "./programCard";
import { Link } from 'react-router-dom';
import SpecificProgram from './specificProgram'
import UserReview from './reviews/userReview';

const Home = () => {
    const [isDrawerOpen , setDrawerOpen] = useState(false);
    const [programs, setPrograms] = useState([])

    useEffect(() => {
        const fetchPrograms = async () =>{
            try{
                const res = await axios.get("http://localhost:8801/Home")
                setPrograms(res.data)
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchPrograms();
    }
    , [])

    const closeDrawer = () => {
        setDrawerOpen(false)
    }
    const openDrawer = () => {
        setDrawerOpen(true)
    }

    return(
        <>
            <div className="background__hero">

                    <Search/>
            </div>
            <div className = "container main__area"> 
                <div className="row justify-content-center program__holder">
                    <h1>Programs</h1>
                    {
                        programs.map((p) => {
                            return <ProgramCard programName = {p.programName} programID = {p.programID}/>
                        })
                    }
                    {/* <ProgramCard programName="Industrial Engineering"/> */}
                    
                </div>
            </div> 
        
          
             
        </>
    )
}

export default Home;