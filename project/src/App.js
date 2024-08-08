
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { myContext } from './Files/Context';

import Navbar from './Files/Navbar';
import Register from './Files/Register';
import Home from './Files/Home';
import Login from './Files/Login';
import { homedatas, skndata } from './Files/Homecategory';
import { datas } from './Files/Category';
import Face from './Files/Face';
import Body from './Files/Body';
import Lips from './Files/Lips';
import Viewproduct from './Files/Viewproduct';
import Likeproduct from './Files/Likeproduct';
import Likepage from './Files/Likepage';
import Cart from './Files/Cart';
import AdminPage from './Files/AdminPage';
import AdminReg from './Files/AdminReg';
import Footer from './Files/Footer';
import Search from './Files/Search';




function App() {
  const [userid, setUserid] = useState("");
  console.log("user", userid);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [confirmpass, setConfirmpass] = useState("")
  const [loguser, setLoguser] = useState(false);
  const [product, setProduct] = useState(homedatas);
  const [items, setItems] = useState(datas);

  const [like, setlike] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [Buynow, setBuynow] = useState([]);
  const [newPrice, setNewPrice] = useState([]);
  const values = {
    userid, setUserid, name, setName, mail, setMail, password, setPassword, user, setUser,
    confirmpass, setConfirmpass, loguser, setLoguser, product, setProduct, items, setItems,
    like, setlike, cart, setCart, items, setItems, cartCount, setCartCount, Buynow, setBuynow, newPrice, setNewPrice
  }

  return (
    <div className="App">


      <BrowserRouter>
        <myContext.Provider value={values}>

          <Routes>
          <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/face' element={<Face />} />
            <Route path='/body' element={<Body />} />
            <Route path='/lips' element={<Lips />} />
            <Route path='/viewproduct/:id' element={<Viewproduct />} />
            {/* <Route path='/likeproducts' element={<Likeproduct/>}/> */}
            <Route path='/likepage' element={<Likepage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/adminpge' element={<AdminPage />} />
            <Route path='/admin' element={<AdminReg />} />
            {/* <Route path='/footer' element={<Footer/>}/>
            <Route path='/search' element={<Search/>}/> */}
          </Routes>
        </myContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
  