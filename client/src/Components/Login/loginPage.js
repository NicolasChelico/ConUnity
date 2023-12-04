import {React , useState} from "react";
import { useNavigate, Link } from 'react-router-dom';
import './loginPage.css'
import axios from "axios";


const LoginPage = () => {
    const navigate = useNavigate()
    const [searchUser, setSearchUser] = useState([])
    const dummy = {
        userName: 'user',
        password: 'soen357'
    }
    const [properLogin, setProperLogin] = useState(true)
    const [user, setUser] = useState({
        userName:'',
        password:''
    })


  


 const handleChange = (e) =>{
    setUser(prev => ({...prev, [e.target.name]:e.target.value}));
    console.log(user)
}

   console.log(searchUser , ' from db')
  
    const fetchUserInfo = async () => {
            try{
                const res = await axios.get(`http://localhost:8801/LoginAuthentication/${user.userName}/${user.password}`);
                setSearchUser(res.data)
            }catch(err){
                console.error(err)
            }
        }

        const handleClick = async e => {
            e.preventDefault();
           
            if(user.email !== dummy.email || user.password !== dummy.password){
                alert("Please enter the proper information")
                setProperLogin(false);
            }
            // else if(user.email === "" || user.password === ''){
            //         alert('Please Enter all fields');
            //         setProperLogin(false);
            // }
        
            // else{
            //     await fetchUserInfo();
                
            //     console.log(searchUser)
            //     alert('Successfully logged in!')
            //     navigate("/ReviewCourse")
            // };
        }

    
    return(
       <div className="login__body">
        <div className="row justify-content-center login__row">
            <div className="col-lg-6 login__img"></div>
            <div className="col-lg-4 login__section">
                <div className="col-lg-12"><h2>WELCOME BACK!</h2></div>
                <div className="col-lg-10 info__login ">
                    <h5>Login</h5>
                    <p>Please input your information</p>
                    <label>Email</label>
                    <input type="text" onChange={handleChange} required name="userName"/>
                    <label>Password</label>
                    <input type="password" onChange={handleChange} required name="password"/>
                    <div className="create__account"><Link to="/CreateAccount">Create account</Link></div>
                    {!properLogin && (
                        <p style={{color:'red'}}>A problem occured. Please verify all fields.</p>
                    )}
                    <button className="btn login__button" onClick={handleClick}>Login</button>
                </div>
                <div className="col-lg-12 forgot__password">
                    <p>Forgot your password ?</p>
                </div>
            </div>
        </div>
       </div>
    )
}

export default LoginPage;