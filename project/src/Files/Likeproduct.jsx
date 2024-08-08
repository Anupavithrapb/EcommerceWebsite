// import React,{useContext} from 'react'
// import { myContext } from './Context'
// import { useNavigate } from 'react-router-dom'
// import Navbar from './Navbar'
// import { Link } from 'react-router-dom'

// function Likeproduct() {
//     const{likeproducts,setLikeproducts}=useContext(myContext)

//     const nav=useNavigate()
//     function unlike(prdt){
//         setLikeproducts(likeproducts.filter((del)=>del!==prdt))
//     }
//   return (
//     <div>
//       <Navbar/>
     
//       <div className='Home-container'>
//       {setLikeproducts.map((data)=>(
//           <div className="Home-card" style={{fontFamily:"sans-serif", fontSize:"bold"}}>
//           <Link to={`/viewproduct/${data.id}`}>
            
//           <p><img src={data.image}  alt='img' className='card-image'></img></p>
//           <div className='card-details'>
//           <p>{data.name}</p>
//           <p className='new'>Offer price:{data.new_price}</p>
//           <p className='old'>Price:{data.old_price}</p><br></br>
//           </div>
//           </Link>
// <button onClick={()=>Likeproduct(data)}></button>
//   </div>
//       ))}
//       </div>
//     </div>
//   )
// }

// export default Likeproduct
