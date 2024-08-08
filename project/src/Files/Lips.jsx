import React,{useContext} from 'react'
import { myContext } from './Context'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import "../css/Lips.css"
import Footer from './Footer';

function Lips() {
    const{items,setItems,like,setlike,cart,setCart,loguser,setLoguser}=useContext(myContext)
    const lipitems=items.filter((item)=>item.category==="lips")
  console.log("lips",lipitems);
const nav=useNavigate()
  // function btn(product) {

    // if (!like.includes(product)) {
    //     setlike([...like, product]);
    // } else {
    //     setlike(like.filter((del) => del !== product));
    // }
    // nav("/like");
    function lipbtn(product) {
      if(loguser){
      if (like.includes(product)) {
        setlike(like.filter((del) => del !== product));
      } else if (!like.some((data) => data.id === product.id)) {
        setlike([...like, product]);
      }
    }
    else{
      alert("you must login!! do you want to continue?")
      nav("/login")
    }
    }
    const HandleAddToCart=(product)=>{
      if(loguser){
      // if (cart.includes(product)) {
      //   setCart(cart.filter((del) => del !== product));
      // } else if (!cart.some((data) => data.id === product.id)) {
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
    const handleBuyNow = (product)=>{
      
    }

  return (
    <div>
       <Navbar/>
    <div className='Home-container'>
    {lipitems.map((data)=>(
        <div  className="Home-card" style={{fontFamily:"sans-serif", fontSize:"bold"}}>
        <Link to={`/viewproduct/${data.id}`}>
        <p><img src={data.image}  alt='img' className='card-image'></img></p>
        </Link>
        <div className='card-details'>
        <p>{data.name}</p>
        <p className='new'>Offer Price:₹{data.new_price}</p>
        <p className='old'>MRP:₹{data.old_price}</p><br></br>
        </div>
        <div>
        <button className='likebtn' onClick={()=>lipbtn(data)}>
                    {like.includes(data)?<FcDislike />:<FcLike />}
                </button>
                <button className="add-cart" onClick={()=> HandleAddToCart(data)}>
                {/* {cart.includes(data)?"Remove Cart":"Add Cart"} */}
                {cart.some((cartItem)=>cartItem.id === data.id)?"Go to cart":"Add cart"}
                
                </button>
                
        </div>
       
</div>

    ))}
    </div>
    <div className='footer'> <Footer/>
       </div>
    </div>
  )
}

export default Lips
