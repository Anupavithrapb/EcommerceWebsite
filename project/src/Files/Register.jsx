import React, { useContext } from 'react';
import { myContext } from './Context';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css';
import { Link } from 'react-router-dom';

function Register() {
  const { userid, setUserid, name, setName, mail, setMail, password, setPassword,user,setUser,confirmpass,setConfirmpass } = useContext(myContext);
  console.log("user", userid);
 
  const nav = useNavigate()
      
    function RegisterBtn(){
      const userData={userid,name,mail,password,confirmpass}
    console.log("userdata",userData);


      if (!name || !mail || !password || !confirmpass) {
          alert("Please fill in all fields");
      }
   else if (!/@/.test(mail)) {
    alert("Invalid email format");
    }
 else if(user.find((data)=>data.mail===mail)){
      alert("User already registered");
  }
  else if(password !== confirmpass){
      alert("Password does not match")
  }
  else{
      setUser([...user,userData])
      alert("Registration Successful")
      nav("/login")
  }

  }
  console.log("user",user);
   
    
  
  return (
    <div>
    <div className='register'>
      <h1 className='h1-register'>Register</h1>
      <div className='input-register'>
      {/* <label>User Id:</label>
      <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)} /><br/> */}
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
      <label>Email:</label>
      <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} /><br/>
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <label>Confirm Password:</label>
      <input type="password" value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} /><br/>
      <button onClick={RegisterBtn} className='reg-btn'>Login</button>
      </div>
     
    </div>
    <div className='log-reg'>
        <h3 className='log-h3'>Already have an account?  <Link  to={'/login'}>Login</Link> </h3>
      </div>
    </div>
  );
}

export default Register;
