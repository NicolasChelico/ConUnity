import { React , useState} from "react";
import { useNavigate } from "react-router-dom";

import './createAccount.css'


export const CreateAccount = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [newUser, setNewUser] = useState({
        email: '',
        password:'',
        confirm: ''
    })



    const handleChange = e =>{
        setNewUser(prev => ({...prev, [e.target.name]:e.target.value}))
        console.log(newUser)
    }

    const handleClick =  e => {
        e.preventDefault()
        if(newUser.password !== newUser.confirm){
            alert('Wrong information provided.')
            console.log(newUser)
            setError(true)
        }
        else{
            alert("Account successfully created !")
            navigate("/",{state: "Hwllo"})

            }
        }
    return(
        <div className="account__body">
            <div className="row justify-content-center account__row">
                <div className="col-lg-6 account__img"></div>
                <div className="col-lg-4 account__section">
                    <div><h2>WELCOME!</h2></div>
                    <div className="col-lg-10 account__login">
                        <h5>Create an Account</h5>
                        <p>Please input your information</p>
                        <label>Email</label>
                        <input type="text" onChange={handleChange} name="email"/>
                        <label>Password</label>
                        <input type="password" onChange={handleChange} name="password"/>
                        <label>Confirm Password</label>
                        <input type="password" onChange={handleChange} name="confirm"/>
                        {
                            error && (<p style={{color:'red'}}>Wrong password combination. </p>)
                        }
                        <button className="btn account__button" onClick={handleClick}>Create Account</button>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

