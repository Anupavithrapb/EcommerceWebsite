import React,{useContext} from 'react'
import { myContext } from './Context'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import "../css/Lips.css"
import Footer from './Footer';
import { Navigate } from 'react-router-dom';

function Body() {
  const{items,setItems,like,setlike,cart,setCart,loguser,setLoguser}=useContext(myContext)
  const bodyitems=items.filter((item)=>item.category==="body")
console.log("body",bodyitems);
const nav=useNavigate()

function bodybtn(product) {
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

  

    
    const HandleAddToCart=(product)=>{
      if(loguser){
      if (cart.some((data)=> data.id === product.id)){
        nav("/cart")
      }
      else{
        setCart([...cart, {...product, count:1}])
      }
    
    }
  }
 
  

  const handleBuyNow = (product)=>{
    
  }
  return (
    <div>
       <Navbar/>
    <div className='Home-container'>
      {bodyitems.map((data)=>(
          <div className='Home-card' style={{fontFamily:"sans-serif", fontSize:"bold"}}>
           <Link to={`/viewproduct/${data.id}`}>
          <p><img src={data.image}  alt='img' className='card-image'></img></p>
          </Link>
          <div className='card-details'>
          <p>{data.name}</p>
          <p className='new'>Offer Price:₹{data.new_price}</p>
          <p className='old'>MRP:₹{data.old_price}</p><br></br>
          </div>
        
          <div>
          <button className='likebtn' onClick={()=>bodybtn(data)}>
                    {like.includes(data)?<FcDislike />:<FcLike />}
                </button>
                <button className="add-cart" onClick={()=> HandleAddToCart(data)}>
                {/* {cart.includes(data)?"Remove Cart":"Add Cart"} */}
                {cart.some((cartItem)=>cartItem.id === data.id)?"Go to cart":"Add cart"}
                  {/* {cart.some((cartItem)=>cartItem.id === data.id)?"Remove from cart":"Add to cart"} */}
                </button>
                {/* <button className="buynow"onClick={()=>handleBuyNow(data)}>BuyNow</button> */}
  </div>
  </div>
      ))}
      </div>
      <div className='footer'> <Footer/>
       </div>
    </div>
    
  )
}

export default Body
