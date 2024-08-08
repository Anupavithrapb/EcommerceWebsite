import { useContext } from 'react'
import React from 'react'
import { myContext } from './Context'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/Home.css'
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import Search from './Search'
import { Navigate } from 'react-router-dom'
function Home() {
  const{items,setItems,like,setlike,cart,setCart,loguser, setLoguser}=useContext(myContext)
  const nav=useNavigate()
  function homebtn(product) {
    if(loguser){
    if (like.includes(product)) {
      setlike(like.filter((del) => del !== product));
    } else if (!like.some((data) => data.id === product.id)) {
      setlike([...like, product]);
    }

    console.log('Like:', like);
    
    
  }
  else{
    alert("you must login!! do you want to continue?")
    nav("/login")
  }
  }
  
  // const HandleAddToCart=(product)=>{
  //   if(loguser){
  //   if (cart.includes(product)) {
  //     setCart(cart.filter((del) => del !== product));
  //   } else if (!cart.some((data) => data.id === product.id)) {
  //     setCart([...cart, product]);
  //   }

  const HandleAddToCart=(product)=>{
    if(loguser){
    if (cart.some((data)=> data.id === product.id)){
      nav("/cart")
    }
    else{
       setCart([...cart, {...product, count:1}])
    }
  
  }
  else{
    alert("you must login!! do you want to continue?")
    nav("/login")
  }
}
    // console.log('Current Cart:', cart);
  
    // if (cart && Array.isArray(cart) && cart.includes(product)) {
    //   setCart(cart.filter((del) => del !== product));
    // } else if (!cart || (Array.isArray(cart) && !cart.includes(product))) {
    //   setCart([...(cart || []), product]);
    // }
  // }
  // else{
  //   alert("you must login!! do you want to continue?")
  //   nav("/login")
  // }
  

  return (
    <div>
      <Navbar/>
      <Search/>
      <div>
      
        <img src="https://sundree.com/cdn/shop/articles/Untitled_1200_x_1000_px_Presentation_169_4_20b88c08-aa87-4e1f-9e87-f5684e91b212.png?v=1685144177" 
            alt='img' style={{width:'100%', height:'600px'}}></img>
       </div>
       <div className='dealdata'>
        <h1 className='heading'>OFFER ZONE</h1>
        <hr/>
        <div className='Home-container'>
        {items.map((data)=>(
          // <div className='Home-card' style={{fontFamily:"sans-serif", fontWeight:"bold"}}>
          <div key={data.id} className='Home-card' style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
         
         <Link to={`/viewproduct/${data.id}`}>
            
            <p><img src={data.image}  alt='img' className='card-image'></img></p>
            </Link>
        <div className='card-details'>
         <h3>{data.name}</h3>
          <h3 className='new'>Offer price:₹{data.new_price}</h3>
          <h3 className='old'>MRP:₹{data.old_price}</h3>
          <br></br>
          <div>
          <button className="likebtn" onClick={()=>homebtn(data)} style={{ width: '30px', fontSize:"24px" }}>
                    {like.includes(data)?<FcDislike />:<FcLike />}
                </button>
                <button className="add-cart" onClick={()=> HandleAddToCart(data)}>
                {/* {cart.includes(data)?"Remove Cart":"Add Cart"} */}
                  {cart.some((cartItem)=>cartItem.id === data.id)? "Go to cart":"Add cart"}
                </button>
                {/* <button className="buynow"onClick={()=>handleBuyNow(data)}>BuyNow</button> */}
  </div>
       </div>   
  </div>
      ))}
        </div>
       </div>
       <div className='footer'> <Footer/>
       </div>
    </div>
  )
}

export default Home

