import { React , useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './createAccount.css'


export const CreateAccount = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [newUser, setNewUser] = useState({
        username: '',
        password:'',
        confirm: ''
    })



    const handleChange = e =>{
        setNewUser(prev => ({...prev, [e.target.name]:e.target.value}))
        console.log(newUser)
    }

    const handleClick =  async e => {
        e.preventDefault()
        if(newUser.password !== newUser.confirm || newUser.password === '' || newUser.username === ''){
            alert('Wrong information provided.')
            setError(true)
        }
        else{
            
            try{
                await axios.post('http://localhost:8801/CreateAccount/NewUser', newUser)

            }catch(err){
                console.error(err)
            }
            console.log(newUser)
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
                        <form>
                            <label>Email</label>
                            <input type="email" onChange={handleChange} name="username" required/>
                            <label>Password</label>
                            <input type="password" onChange={handleChange} name="password" required/>
                            <label>Confirm Password</label>
                            <input type="password" onChange={handleChange} name="confirm" required/>
                            {
                                error && (<p style={{color:'red'}}>Wrong password combination. </p>)
                            }
                            <button  className="btn account__button" onClick={handleClick}>Create Account</button>
                        </form>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

