import { React , useState}  from "react";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { FaCircleUser } from "react-icons/fa6";

import './Navbar.css';
import SideDrawer from "./sideDrawer";
const Navbar = (props) => {
    const [sideDrawer, setSideDrawer] = useState(false)


    const toggleDrawer = () => {
        setSideDrawer(!sideDrawer)
        console.log(sideDrawer)
    }

    return(
        <div className="">
            <nav className="row nav__main">
                <div className="col-lg-4 open__drawer__button">
                    <button className="btn open__drawer" onClick={props.onClick}><SlMenu size={35}/></button>
                </div>
                <div className="col-lg-4">
                    <Link to="/"><img src ="" alt="logo"/></Link>                        
                </div>
                <div className="col-lg-4">
                    <FaCircleUser size = {35}/>
                </div>
                
            </nav>
         </div>

    );
}

export default Navbar;