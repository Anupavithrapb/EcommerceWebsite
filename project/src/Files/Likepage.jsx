// import React,{useContext} from 'react'
// import { myContext } from './Context'
// import { useNavigate } from 'react-router-dom';
// import "../css/Likepage.css"
// import Navbar from './Navbar';
// import { FcDislike } from "react-icons/fc";
// import Footer from './Footer';

// function Like() {
//     const{like,setlike,cart,setCart,loguser,setLoguser}=useContext(myContext)
//     console.log("like page",like);

//     const nav=useNavigate()
//     function unlike(pro){

//         setlike(like.filter((del)=>del!==pro))
// alert("Do you want to unlike this")
//     }
//     const HandleAddToCart=(product)=>{
//       if(loguser){
//       if (cart.includes(product)) {
//         setCart(cart.filter((del) => del !== product));
//       } else if (!cart.some((data) => data.id === product.id)) {
//         setCart([...cart, product]);
//       }
//     }
//     else{
//       alert("you must login!! do you want to continue?")
//       nav("/login")
//     }
//   }
//   return (
//     <div>
//       <Navbar/>
//      {like.map((data)=>(
//         <div className='likepage'>
         
//                 {/* <div>{data.id}</div> */}
                
//                 {/* <p>{data.category}</p> */}
//                 <img src={data.image} alt="img" style={{height:"200px", width:"200px"}} className='likepage-img'></img>
               
//                 <div className='likepage-name'>{data.name}</div>
//                <div className='new'>Offer Price:₹{data.new_price}</div>
//           <div className='old'>MRP:₹{data.old_price}</div><br></br>

//                <button className='unlike-btn' onClick={()=>unlike(data)}><FcDislike /></button>
//                <button className="add-cart" onClick={()=> HandleAddToCart(data)}>
//                 {cart.includes(data)?"Remove Cart":"Add Cart"}
                 
//                 </button>
//         </div>
        
//     ))}
//     {/* <Footer/> */}
//     </div>
//   )
// }

// export default Like


import React, { useContext, useState } from 'react';
import { myContext } from './Context';
import { useNavigate } from 'react-router-dom';
import "../css/Likepage.css";
import Navbar from './Navbar';
import { FcDislike } from "react-icons/fc";
import Footer from './Footer';

function Like() {
    const { like, setlike, cart, setCart, loguser, setLoguser } = useContext(myContext);
    const nav = useNavigate();
    const [showUnlikeMessage, setShowUnlikeMessage] = useState(false);
    const [showLoginMessage, setShowLoginMessage] = useState(false);
    const [productToRemove, setProductToRemove] = useState(null);

    function unlike(pro) {
        setProductToRemove(pro);
        setShowUnlikeMessage(true);
    }

    function confirmUnlike() {
        setlike(like.filter((del) => del !== productToRemove));
        setShowUnlikeMessage(false);
    }

    function cancelUnlike() {
        setShowUnlikeMessage(false);
    }

    function HandleAddToCart(product) {
        if (loguser) {
            // if (cart.includes(product)) {
            //     setCart(cart.filter((del) => del !== product));
            // } else if (!cart.some((data) => data.id === product.id)) {
            //     setCart([...cart, product]);
            // }
            if (cart.some((data)=> data.id === product.id)){
                nav("/cart")
              }
              else{
                setCart([...cart, {...product, count:1}])
              }
        } else {
            setShowLoginMessage(true);
        }
    }

    // function handleLogin() {
    //     setShowLoginMessage(false);
    //     nav("/login");
    // }

    return (
        <div>
            <Navbar />
            {like.map((data) => (
                <div className='likepage' key={data.id}>
                    <img src={data.image} alt="img" style={{ height: "200px", width: "200px" }} className='likepage-img' />
                    <div className='likepage-name'>{data.name}</div>
                    <div className='new'>Offer Price:₹{data.new_price}</div>
                    <div className='old'>MRP:₹{data.old_price}</div><br></br>
                    <button className='unlike-btn' onClick={() => unlike(data)}><FcDislike /></button>
                    <button className="add-cart" onClick={() => HandleAddToCart(data)}>
                        {/* {cart.includes(data) ? "Remove Cart" : "Add Cart"} */}
                        {cart.some((cartItem)=>cartItem.id === data.id)?"Go to cart":"Add cart"}
                    </button>
                </div>
            ))}
            {showUnlikeMessage && (
                <div className="message-box">
                    <div className="message-box-content">
                        <p>Do you want to unlike this product?</p>
                        <button className='msg-box-yes' onClick={confirmUnlike}>Yes</button>
                        <button className='msg-box-no' onClick={cancelUnlike}>No</button>
                    </div>
                </div>
            )}
            {/* {showLoginMessage && (
                <div className="message-box">
                    <div className="message-box-content">
                        <p>You must login!! Do you want to continue?</p>
                        <button className='msg-box-yes' onClick={handleLogin}>Yes</button>
                        <button className='msg-box-no' onClick={() => setShowLoginMessage(false)}>No</button>
                    </div>
                </div>
            )} */}
            <Footer />
        </div>
    );
}

export default Like;
