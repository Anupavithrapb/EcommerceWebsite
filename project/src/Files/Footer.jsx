import React from 'react'
import "../css/Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src='https://images.squarespace-cdn.com/content/v1/5e24ee450c7db33ad77854c7/1618532911518-C7PAW4TXZ81WN3RXRRN3/Artboard+6.jpg' alt=''/>
       <p>Sugar&Peach</p>        
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <ul className='footer-link'>
        <li><Link to="/admin">Admin Login</Link></li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
        <FaInstagram />
        </div>
        <div className="footer-icons-container">
          <FaPinterest />
          </div>
          <div className="footer-icons-container">
            <FaWhatsapp />
            </div>
         </div>
         <div className="footer-copyright">
            <hr />
            <p className='footer-text'>Copyright @ 2023 - All right Reserved.</p>
         </div>
    </div>
  )
}

export default Footer
