import React, { useContext, useState, useEffect } from 'react';
import { myContext } from './Context';
import { Link } from 'react-router-dom';
import '../css/Cart.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Cart = () => {
  const { cart, setCart, setCartCount, cartCount,Buynow,setBuyNow } = useContext(myContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showcartMessage, setShowCartMessage] = useState(false);
  const [productRemove, setProductRemove] = useState(null);

  useEffect(() => {
    const calculatedTotalAmount = cart.reduce((total, item) => {
      return total + item.new_price * (item.count || 1);
    }, 0);

    setTotalAmount(calculatedTotalAmount);
  }, [cart]);
  if (cart.length === 0) {
  


    return (
      <div>
      <Navbar/>
      <div className='empty-cart'>
        <img src="https://cdn-icons-png.flaticon.com/512/2037/2037457.png" alt='Empty Cart' />
        <h1 className='emptycart-font'>Your cart is empty!!</h1>
      </div>
      </div>
    );
  }

  const handleIncrement = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              count: Math.max((item.count || 1) + 1, 1),
            }
          : item
      )
    );
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              count: Math.max((item.count || 1) - 1, 1),
            }
          : item
      )
    );
    setCartCount((prevCount) => prevCount - 1);
  };

  const handleRemove = (itemId) => {
    // setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    // setCartCount((prevCount) => prevCount - 1);
    setProductRemove(itemId);
    
        setShowCartMessage(true);
    // alert("Do you want to remove this product?")
  };
  function confirmCart(itemId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
setCartCount((prevCount) => prevCount - 1);
// setCart(cart.filter((del) => del !== productRemove));
setShowCartMessage(false);
}

function cancelCart() {
setShowCartMessage(false);
}
  
    const handleBuyNow = () => {
      // Create a shallow copy of the cart array
      const buyNowItems = [...cart];
    
      setCart(prevCart => {
        if (prevCart === cart) {
          return buyNowItems;
        } else {
          return prevCart;
        }
      });
    
      
      setBuyNow(buyNowItems);
    };
 

  const handleOrder = () => {
    const isConfirmed = window.confirm('Are you sure you want to place the order?');

    if (isConfirmed) {
      alert('Order placed successfully!');
      // Additional logic for order placement
    }
   
  };

 

  return (
    <div>
      <Navbar/>
    <div className='cart'>
      
      {cart.map((item) => (
        <div className="cartdata" key={item.id}>
          <Link to={`/viewproduct/${item.id}`}>
            <img src={item.image} alt={item.name} />
          </Link>
          <div className='cart-name'>{item.name}</div>
          <div className='cart-price'>₹{item.new_price * (item.count || 1)}</div>
          <div>
            <button className='cart-button' onClick={() => handleDecrement(item.id)}>
              -
            </button>
            <span>{item.count || 1}</span>
            <button className='cart-button' onClick={() => handleIncrement(item.id)}>
              +
            </button>
          </div>
          <button className='cart-remove' onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <div className='cart-buttons'>
          {/* <button className='buy-now-button' onClick={handleBuyNow}>
            Buy Now
          </button> */}
        </div>
      )}
      <div className='total-amount'>
        <p>Total Amount: ₹{totalAmount}</p>
        <button className='order-button' onClick={handleOrder}>
          BuyNow
        </button>
      </div>
      
    </div>
    {showcartMessage && (
                <div className="message-box">
                    <div className="message-box-content">
                        <p>Do you want to remove this product?</p>
                        <button className='msg-box-yes' onClick={() => confirmCart(productRemove)}>Yes</button>

                        <button className='msg-box-no' onClick={cancelCart}>No</button>
                    </div>
                </div>
            )}
    </div>
  );
};

export default Cart;


