import { ReactComponentElement, useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import './MainNavigation.css';
import axios from "axios";
import Navbar from "./Navbar";
import SideDrawer from "../sideDrawer";
import NavOption from "./navOption";
import MainHeader from "./MainHeader";
import { FaHome } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const MainNavigation = (props) => {

    const windowLocation = window.location.pathname;

    console.log(windowLocation)
    const [isDrawerOpen , setDrawerOpen] = useState(false);
    const [programs, setPrograms] = useState([])
    const [programsShowing, setProgramsShowing] = useState(false)
    
    useEffect(() => {
        const fetchPrograms = async () =>{
            try{
                const res = await axios.get("http://localhost:8801/Home")
                setPrograms(res.data)          
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

    return (
        <>
        <MainHeader>
            <Navbar onClick = {openDrawer} />
            {isDrawerOpen && (
                <SideDrawer show={isDrawerOpen} onClick={closeDrawer} title={"Programs"}>
                    <NavOption trajectory={'/'} action={"Home"} onClick={closeDrawer}>
                            <FaHome />
                    </NavOption>
                    <NavOption trajectory={'/ReviewCourse'} action={"Write Review"} onClick={closeDrawer} programList={programs}>
                            <MdOutlineRateReview />
                    </NavOption>
                    <div>
                    <NavOption action={"View Programs"} onClick={() => setProgramsShowing(!programsShowing)}>
                        {!programsShowing ? (<FaAngleDown />) : (<FaAngleUp />)}
                    </NavOption>
                    
                    { programsShowing && (programs?.map(p=> {return(
                            <Link to ={`/Program/${p.programID}`} onClick={closeDrawer} state={{programName: p.programName}} program={p.programName}>
                                <li className="program__list">{p.programName}</li>
                            </Link>
                    )}))}
                    </div>
                    <hr></hr>
                    <div className="row">
                       
                    <div className="col-lg-6">
                          login
                    </div>
                    <div className="col-lg-6">
                        sign up
                    </div>
                    </div>
                    
                </SideDrawer>
            )}           
         </MainHeader>
         {props.children}
        </>
    );

}
export default MainNavigation;