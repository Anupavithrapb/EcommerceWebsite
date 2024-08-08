import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { myContext } from './Context';
import Navbar from './Navbar';
import "../css/Viewproduct.css"
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

export default function ViewProduct() {
  const { id } = useParams();
  const { items,cart, setCart,like, setlike,loguser } = useContext(myContext);
  const prdct = items.find((prod) => prod.id === parseInt(id));
  const nav=useNavigate()

  function handleCartButtonClick(prod) {
    if(loguser){
    // if (cart.includes(prod)) {
    //   setCart(cart.filter((item) => item !== prod));
    // } else {
    //   setCart([...cart, prod]);
    // }
     if (cart.some((data)=> data.id === prod.id)){
      nav("/cart")
    }
    else{
      setCart([...cart, {...prod, count:1}])
    }
  }
  else{
    alert("you must login!! do you want to continue?")
      nav("/login")
  }
}
  function viewbtn(product) {
      if(loguser){
    // if (like.includes(product)) {
    //   setlike(like.filter((del) => del !== product));
    // } else if (!like.some((data) => data.id === product.id)) {
    //   setlike([...like, product]);
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
  function handleGoBack(){
    nav('/');
  }

  return (
    <div>
        <Navbar/>
    <div className="product-container">
        
      <h2>MY PRODUCTS</h2>
      <div>
        <img className="product-image" src={prdct.image} alt={prdct.name} />
        <div className="product-details">
          <h1 className="product-name">{prdct.name}</h1>
          <p className="product-old-price">{prdct.old_price}</p>
          <p className="product-price">MRP: {prdct.new_price}</p>
        </div>
      </div>
      <div>
      <button className='likebtn' onClick={()=>viewbtn(prdct)}>
                    {like.includes(prdct)?<FcDislike />:<FcLike />}
                </button>
        <button
          onClick={() => handleCartButtonClick(prdct)}
          className="add-to-cart-button"
        >
          {/* {cart.includes(prdct) ? 'Remove from cart' : 'Add to cart'} */}
          {cart.some((cartItem)=>cartItem.id === prdct.id)?"Go to cart":"Add cart"}
        </button>
        <button onClick={handleGoBack}className="add-to-cart-button">Go Back to Home</button>
      </div>
    </div>
    </div>
  );
}




