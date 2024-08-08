
import React, { useContext, useState } from 'react';
import { myContext } from './Context';
import { useNavigate } from 'react-router-dom';
import "../css/AdminReg.css"


function AdminReg() {
  const [adminName, setAdminName] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const { user, setUser } = useContext(myContext);
  const adminuser = { adminName, adminPass };

  const nav = useNavigate();

  function Adminbtn() {
    if (user.find((Data) => Data.adminName !== "admin")) {
      alert('username is incorrect');
    } else if (adminPass !== 'admin@123') {
      alert('password is incorrect');
    } else {
      setUser([...user, adminuser]);
      alert("Login successful");
      nav("/adminpge");
    }
  }

  return (
    <div>
      <h2 className='adminreg-h1'>Admin Login</h2>
      <input type='text' placeholder="Username" className='adminreg-user' onChange={(e) => setAdminName(e.target.value)}></input><br></br>
      <input type='password' placeholder="Password" className='adminreg-pass' onChange={(e) => setAdminPass(e.target.value)}></input><br></br>
      <button className='adminreg-btn' onClick={Adminbtn}>Login</button>
     
    </div>
    
  );
}

export default AdminReg;

