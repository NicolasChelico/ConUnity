import { ReactComponentElement, useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import './MainNavigation.css';
import axios from "axios";
import Navbar from "./Navbar";
import SideDrawer from "./sideDrawer";
import Home from "./Home";
import { Footer } from "./footer";
import MainHeader from "./MainHeader";



const MainNavigation = (props) => {

    
    const [isDrawerOpen , setDrawerOpen] = useState(false);
    const [programs, setPrograms] = useState([])

    useEffect(() => {
        const fetchPrograms = async () =>{
            try{
                const res = await axios.get("http://localhost:8801/Main")
                setPrograms(res.data)
                // console.log(res.data)
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
                    {programs.map(p=> {return(
                    <div>
                            <Link to ={`/Program/${p.programID}`} onClick={closeDrawer}>
                                <li className="program__list">{p.programName}</li>
                            </Link>
                    </div>
                    )})}
                </SideDrawer>
            )}           
         </MainHeader>
         {props.children}
        </>
    );

}
export default MainNavigation;