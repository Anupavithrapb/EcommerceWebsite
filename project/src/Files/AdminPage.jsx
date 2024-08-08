import React, { useContext } from 'react'
import { myContext } from './Context'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "../css/AdminPage.css"
import Footer from './Footer'
import Navbar from './Navbar'



const AdminPage = () => {
    const{items,setItems} = useContext(myContext)
    const [editingProduct, setEditingProduct] = useState([]);
  const [editName, setEditName] = useState('');
  const [editImage, setEditImage] = useState([]);
  const [editOldPrice, setEditOldPrice] = useState([]);
  const [editNewPrice, setEditNewPrice] = useState([]);
  const[editcategory,setEditCategory]=useState([]);
  const [editingModalOpen, setEditingModalOpen] = useState(false);

  const [addingProduct, setAddingProduct] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');
  const [newProductMRP, setNewProductMRP] = useState('');
  const [newProductOfferPrice, setNewProductOfferPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState('');

  const [showadminMessage, setShowAdminMessage] = useState(false);
  const [prdctRemove, setPrdctRemove] = useState(null);

  const handleSaveEdit = () => {
    setItems((prevProducts) =>
      prevProducts.map((item) =>
        item.id === editingProduct.id
          ? {
              ...item,
              name: editName,
              image: editImage,
              old_price: editOldPrice,
              new_price: editNewPrice,
              category:editcategory,
            }
          : item
      )
    );
    setEditingProduct(null);
    setEditName('');
    setEditImage('');
    setEditOldPrice('');
    setEditNewPrice('');
    setEditCategory('');
    setEditingModalOpen(false);
  };



    const handleRemove = (itemId) => {
      // setItems((prevProducts) => prevProducts.filter((item) => item.id !== itemId));
    //  alert("will you remove this product?")
    setPrdctRemove(itemId);
    
    setShowAdminMessage(true);
    };
    function confirmadmin(itemId) {
      setItems((prevProducts) => prevProducts.filter((item) => item.id !== itemId));
  // setCartCount((prevCount) => prevCount - 1);
  // setCart(cart.filter((del) => del !== productRemove));
  setShowAdminMessage(false);
  }
  
  function canceladmin() {
  setShowAdminMessage(false);
  }
  
    const handleEdit = (itemId) => {
      const selectedItem = items.find((item) => item.id === itemId);
      setEditingProduct(selectedItem);
      setEditName(selectedItem.name);
      setEditImage(selectedItem.image);
      setEditCategory(selectedItem.category);
      setEditOldPrice(selectedItem.old_price);
      setEditNewPrice(selectedItem.new_price);
      setEditingModalOpen(true);
     
    };
    const handleCancelEdit = () => {
      setEditingProduct(null);
      setEditName('');
      setEditImage('');
      setEditOldPrice('');
      setEditNewPrice('');
      setEditCategory('');
      setEditingModalOpen(false);
      alert("are you sure to cancel the editing?")
    };
    const handleAddProduct = () => {
      if(!newProductName||! newProductImage||! newProductMRP||!newProductOfferPrice||!newProductCategory){
        alert("Please fill in all fields");
        return;
      }
      const newProduct = {
        id: new Date().getTime(),
        name: newProductName,
        image: newProductImage,
        old_price: newProductMRP,
        new_price: newProductOfferPrice,
        category: newProductCategory,
      };
      setItems([...items, newProduct]);

    setNewProductName('');
    setNewProductImage('');
    setNewProductMRP('');
    setNewProductOfferPrice('');
    setNewProductCategory('');
    setAddingProduct(false);
  };

  const handleOpenAddModal = () => {
    setAddingProduct(true);
  };

  const handleCloseAddModal = () => {
    setNewProductName('');
    setNewProductImage('');
    setNewProductMRP('');
    setNewProductOfferPrice('');
    setNewProductCategory('');
    setAddingProduct(false);
  };

  return (
    <div>
      <Navbar/>
       <div className='admin-container'>
    <h2 className='admin-header'>Admin Page</h2>
    <button className='admin-add-btn' onClick={handleOpenAddModal}>
      Add Product
    </button>

    {addingProduct && (
      <div className='add-modal'>
        <h2>Add New Product</h2>
        <label>Product Name</label>
        <input type='text' value={newProductName} onChange={(e) => setNewProductName(e.target.value)} />
        <label>Image URL</label>
        <input type='text' value={newProductImage} onChange={(e) => setNewProductImage(e.target.value)} />
        <label>Category</label>
        <input type='text' value={newProductCategory} onChange={(e) => setNewProductCategory(e.target.value)} />
        <label>MRP</label>
        <input type='text' value={newProductMRP} onChange={(e) => setNewProductMRP(e.target.value)} />
        <label>Offer Price</label>
        <input type='text' value={newProductOfferPrice} onChange={(e) => setNewProductOfferPrice(e.target.value)} />
        <button onClick={handleAddProduct} className='admin-add'>Add</button>
        <button onClick={handleCloseAddModal} className='admin-cancel'>Cancel</button>
      </div>
    )}
    <div className='admin'>
      {items.map((item=>(
        <div className="admin-data">
            <Link to = {`/viewproducts/${item.id}`}>
            <img src={item.image} alt={item.name} />
            </Link>
            <div>{item.name}</div>
            <div>₹{item.old_price}</div>
        <div>₹{item.new_price}</div>
        <div className="admin-buttons">
            <button className='admin-remove-btn' onClick={() => handleRemove(item.id)}>Remove</button><br/>
            <button className='admin-edit-btn' onClick={() => handleEdit(item.id)}>Edit</button>
          </div>

          {editingProduct && editingProduct.id === item.id && (
            <div className='edit-modal'>
              <h2>Edit Product</h2>
              <div className='admin-label'>
              <label>Product Name</label>
              <input type='text' value={editName} onChange={(e) => setEditName(e.target.value)} />
              <label>Image URL</label>
              <input type='text' value={editImage} onChange={(e) => setEditImage(e.target.value)} />
              <label>MRP</label>
              <input type='text' value={editOldPrice} onChange={(e) => setEditOldPrice(e.target.value)} />
              <label>Site Price</label>
              <input type='text' value={editNewPrice} onChange={(e) => setEditNewPrice(e.target.value)} />
              <label>Category</label>
              </div>
              <input type='text' value={editcategory} onChange={(e) => setEditCategory(e.target.value)}/>
              <button className='adminsave'  onClick={handleSaveEdit}>Save</button>
              <button className='admincancel' onClick={handleCancelEdit}>Cancel</button>
            </div>
          )}
        </div>
      )))}
  </div>
  {showadminMessage && (
                <div className="message-box">
                    <div className="message-box-content">
                        <p>Do you want to remove this product?</p>
                        <button className='msg-box-yes' onClick={() => confirmadmin(prdctRemove)}>Yes</button>

                        <button className='msg-box-no' onClick={canceladmin}>No</button>
                    </div>
                </div>
            )}
    </div>
    <div className='footer'> <Footer/>
       </div>
    </div>
  )
}

export default AdminPage
