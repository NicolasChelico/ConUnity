import { React , useState}  from "react";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { FaCircleUser } from "react-icons/fa6";

import './Navbar.css';
import SideDrawer from "../sideDrawer";
const Navbar = (props) => {
    const [sideDrawer, setSideDrawer] = useState(false)


    const toggleDrawer = () => {
        setSideDrawer(!sideDrawer)
        console.log(sideDrawer)
    }

    return(
       
            // <nav className="row nav__main">
            <>
                <div className="col-lg-4 open__drawer__button">
                    <button  className="btn open__drawer" onClick={props.onClick}><SlMenu size={32} color={"white"}/></button>
                </div>
                <div className="col-lg-8">
                    <ul className="nav__links">
                        <Link to="/"><li>HOME</li></Link>                
                        <Link to="/Login"><li>LOGIN</li></Link>
                        <Link to="/ReviewCourse"><li style={{color:'#F4bd47'}}> REVIEW</li></Link> 
                    </ul>
                </div>
                </>
            // </nav>
        

    );
}

export default Navbar;