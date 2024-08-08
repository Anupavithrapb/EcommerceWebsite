import React,{useState,useEffect,useContext} from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { myContext } from './Context';
import { FcLike } from "react-icons/fc";

import { RiLogoutCircleRLine } from "react-icons/ri";
import Search from './Search';

function Navbar(){
  
  const[menu,setMenu]=useState("home")
  const{cart,setCart,setUserid,setUser,setName}=useContext(myContext)
  const{cartCount,setCartCount,setLoguser,loguser,like,setlike}=useContext(myContext)
//  const[loggedIn,setLoggedIn]=useState(true)
const [isLoggedIn, setIsLoggedIn] = useState(false)


 

  const nav=useNavigate()
  // function loginbtn(){
  // nav('/login')
  // }
  function navlike(){
    nav("/likepage")
  }
  // function navlogin(){
  //   nav("/login")
  // }
  function navlogout(){
    if(loguser){
      setLoguser(false);
      setCart([])
      setlike([])
      alert('Logged Out Successfully!')
      }else{
        alert("Please Log In")
        nav('/login')
      }

  };
//   React.useEffect(()=>{
//     const pathname = location.pathname.substring(1);
//     setMenu(pathname || "home");
// }),[location]
  useEffect(()=>{
    setCartCount(cart.length);
  },[cart,setCartCount])


 
  return (
   
    <div>
       <div className='navbar'>
        <div className='nav-logo'>
            <img src='https://images.squarespace-cdn.com/content/v1/5e24ee450c7db33ad77854c7/1618532911518-C7PAW4TXZ81WN3RXRRN3/Artboard+6.jpg'
            alt='logo' style={{width:'100px'}}/>
            {/* <h2>Sugar&Peach</h2> */}
        </div>

        {/* <Search/> */}

        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none', color:'peachpuff'}} to={'/'}>Home</Link></li>
          <li onClick={()=>{setMenu("face")}}><Link  style={{textDecoration:'none', color:'peachpuff'}} to={'/face'}>Face</Link></li> 
         <li onClick={()=>{setMenu("body")}}><Link  style={{textDecoration:'none', color:'peachpuff'}} to={'/body'}>Body</Link></li> 
          <li onClick={()=>{setMenu("lips")}}><Link  style={{textDecoration:'none', color:'peachpuff'}} to={'/lips'}>Lips</Link></li>
        </ul>
        {/* <div className='nav-login'>
          <button className='nav-login-btn' onClick={navlogin}>Login</button>
        </div> */}
         <div className='nav-logout'>
          <button className='nav-logout-btn' onClick={navlogout}><RiLogoutCircleRLine /></button>
        </div> 

        <div className='nav-like'>
        <button  onClick={navlike} className='nav-likebtn'> <FcLike style={{ fontSize: '30px',  }} /></button>
        </div>
        <div className='nav-cart'>
          {/* <Link to='/login'><button>Login</button></Link> */}
          {/* <button onClick={loginbtn}>Login</button> */}
          <Link to='/cart'><BsCart4 style={{width:'100px',height:'30px'}}/></Link>
          <div className="nav-cart-count">{cartCount}</div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
