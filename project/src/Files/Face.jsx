import React,{useContext} from 'react'
import Navbar from './Navbar'
import { myContext } from './Context'
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import "../css/Lips.css"
import Footer from './Footer';


function Face() {
  const{items,setItems,like,setlike,cart,setCart,loguser,setLoguser}=useContext(myContext);
  const faceitems=items.filter((item)=>item.category==="face")
  console.log("face",faceitems);
  const nav=useNavigate()
 
  
  console.log("faceprdt page",like);

  function facebtn(product) {
    if(loguser){
    if (like.includes(product)) {
      setlike(like.filter((del) => del !== product));
    }
     else if (!like.some((data) => data.id === product.id)) {
      setlike([...like, product]);
    }
  }
  else{
    alert("you must login!! do you want to continue?")
    nav("/login")
  }
}

  function HandleAddToCart(product){
    if(loguser){
    // if (cart.includes(product)) {
    //   setCart(cart.filter((del) => del !== product));
    // }
    //  else if (!cart.some((data) => data.id === product.id)) {
    //   setCart([...cart, product]);
    // }
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

  
  return (
    <div>
      <Navbar/>
      {/* <img src='https://cew.org/wp-content/uploads/2020/10/CEW-image_1400x600.jpg' alt='img' width="100%" height="50%" ></img> */}
      <div className='Home-container'>
      {faceitems.map((data)=>(
          <div className="Home-card" style={{fontFamily:"sans-serif", fontSize:"bold"}}>
          <Link to={`/viewproduct/${data.id}`}>
            
          <p><img src={data.image}  alt='img' className='card-image'></img></p>
          </Link>
          {/* <div className='card-details'> */}
          <div>{data.name}</div>
          <div className='new'>Offer Price:₹{data.new_price}</div>
          <div className='old'>MRP:₹{data.old_price}</div><br></br>
          {/* </div> */}
          
          <div>
          <button  className="likebtn" onClick={()=>facebtn(data)}>
                    {like.includes(data)?<FcDislike />:<FcLike />}
                </button>
                <button className="add-cart" onClick={()=> HandleAddToCart(data)}>
                {/* {cart.includes(data)?"Remove Cart":"Add Cart"} */}
                {cart.some((cartItem)=>cartItem.id === data.id)?"Go to cart":"Add cart"}
                 
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

export default Face




