import React, {useContext,useState} from 'react'
import { myContext } from './Context'
import { Link, useNavigate } from 'react-router-dom';

import '../css/Login.css'

function Login() {
    const { user,setUser,userid, setUserid, name, setName,loguser,setLoguser } = useContext(myContext);
    const[mailuser,setMailuser]=useState("");
    const[passuser,setPassuser]=useState("");
    const nav=useNavigate()

    function sign(){
        const loggedUser=user.find(
            (userData)=>userData.mail===mailuser && userData.password===passuser
           )
           
           if(loggedUser){
            setLoguser(loggedUser)
            alert("login sucessful");
            nav("/");
           }
           else{
            alert("invalid email or password");
           }
    
           console.log("log user",loggedUser);
        
     }
 
  return (
    <div>
    <div className='login'>
        <h1 className='h1-login'>Login</h1>
      <div className='login-input'>
    
     {/* <label>Name:</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br></br> */}
      <label>Email:</label>
      <input type="email" value={mailuser} onChange={(e)=>setMailuser(e.target.value)}/>
      <br></br>
      <label>Password:</label>
      <input type="password" value={passuser} onChange={(e)=>setPassuser(e.target.value)}/>
      <br></br>
      <button  onClick={sign} className='login-btn'>Sign in</button>
      <br></br>
      </div>
      
    </div>
    <div className='log-reg'>
        <h3 className='log-h3'>Don't have an account?  <Link  to={'/register'}>Register</Link> </h3>
      </div>
    </div>
  )
}

export default Login;
