import React, { useContext } from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import '../css/Search.css'
import { myContext } from './Context';
import { FcDislike } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { Navigate } from 'react-router-dom';

export default function Search() {
  const{items,setItems,like,setlike,cart,setCart,loguser,setLoguser}=useContext(myContext)
    const[searchInput,setSearchInput]=useState("");
    const[filtereditems,setFilteredItems]=useState([])
//     const nav=useNavigate()
//     const PathtoMap ={
//         fa:"/face",
//         bo:"/body",
//         li:'/lips'

//     }
//     function handleSearch(){
//         const lowercaseInput = searchInput.toLowerCase();
//     for(const keyword in PathtoMap){
//         if(lowercaseInput.startsWith(keyword)){
// return PathtoMap[keyword];
//     }
// }
//     }
const nav=useNavigate()
const handleSearch=()=>{
  const filtered=items.filter((items)=>items.name.toLowerCase().includes(searchInput.toLowerCase())
  ||items.category.toLowerCase().includes(searchInput.toLowerCase())
  );

  setFilteredItems(filtered);
}

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
  nav("/login")
}
}

  return (
    <div>
        <div className="searchbar">
      <input type="text" placeholder="Search Here" className='search-input' onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}/>
                
           <button className='search-btn' onClick={handleSearch}><FaSearch /></button>
                </div>
                {/* <div className='search-product-details'>
                  {(filtereditems.length?filtereditems:items).map((data,index)=>(
                    <div key={index}>
                      <Link to={`/viewproducts/${data.id}`}>
                        <img src={data.image} alt='img'/>
                        <h1 className='search-h1'>{data.name}</h1>
                        <h3 className='search-h3'>Category:{data.category}</h3>
                      </Link>
                      </div>
                  ))}
                </div> */}
                 {searchInput && (
        <div className='search-product-details'>
          {filtereditems.map((data, index) => (
            <div key={index}>
              <Link to={`/viewproducts/${data.id}`}>
                <img src={data.image} alt='img' className='search-img'/>
                </Link>
                <h1 className='search-h1'>{data.name}</h1>
                <h3 className='search-price'>₹{data.new_price}</h3>
                <h3 className='search-h3'>Category: {data.category}</h3>
              
                <button className='likebtn' style={{fontSize:"17px"}}
                onClick={()=>lipbtn(data)}>
                    {like.includes(data)?<FcDislike />:<FcLike />}
                </button>

                <button className="add-cart" onClick={()=> HandleAddToCart(data)}>
                {cart.includes(data)?"Go to Cart":"Add Cart"}
                
                </button>
            </div>
          ))}
        </div>
      )}
                
    </div>
  )
}


