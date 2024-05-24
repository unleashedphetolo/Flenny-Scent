import React from 'react';
import image from '../assets/logo-flenny.jpg'
import Men from '../assets/perfumes-for-men.jpeg';
import Women from '../assets/Women-Perfumes.jpg';
import '../styles/Navigation.css';
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";

function Navigation() {
  return (
    <div>
    <nav style={{display:'flex', justifyContent:'space-between'}}>
      <img src={image} alt="Flenny Scent Logo" style= {{height: "70%",top:"-150px",right:"40px", position: "relative",borderRadius: '155px'}}/>
      <div className='container'>
      <div className="overlay">
            <div style={{marginTop:'170px'}}>
            <h1 style={{fontSize:'20px', fontFamily:"Lucida Handwriting, cursive",color:'brown'}}>Unveil a captivating array of perfumes for everyone</h1>
            <h2 style={{fontFamily: "Times New Roman"}}>find your perfect scent today.</h2>
            </div>
            <button className="shop-all">Shop Now</button>
          </div>
      </div>

      <div>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html">Brands</a></li>
        <li><a href="index.html">Men</a></li>
        <li><a href="index.html">Women</a></li>
        <li><a href="index.html">Offers</a></li>
        <li><a href="About.js">About us</a></li>
        <li><a href="Contact.js">Contact</a></li>
        <li><a href="Search.js"><IoSearch /></a></li>
        <li><a href="Login.js"><FaUser /></a></li>
        <li className="cart-link"><a href="Cart.js" className="cart-icon"><PiShoppingCartBold /></a></li>



      </ul>
      </div>
    </nav>
    
    <div className="container">
        <div className="image-container">
        <h2 className="perfume-title">Perfumes for Men</h2>
          <img src={Men} alt="Men" />
          <div className="overlay">
            <button className="men-shop">Shop Now</button>
          </div>
        </div>

        <div className="image-container">
        <h2 className="perfume-title2">Perfumes for Women</h2>
          <img src={Women} alt="Women" />
          <div className="overlay">
            <button className="women-shop">Shop Now</button>
          </div>
        </div>
    </div>

    </div>
  );
}

export default Navigation;
