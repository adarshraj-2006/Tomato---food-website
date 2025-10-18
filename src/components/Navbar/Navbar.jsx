import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from '../../context/StoreContext'; // ✅ correct import

const Navbar = ({ setShowLogin, showLogin }) => {  
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext); // ✅ use context correctly

  // Disable scroll when login popup is open
  useEffect(() => {
    document.body.style.overflow = showLogin ? "hidden" : "auto";
  }, [showLogin]);

  return (
    <div className='navbar'>
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className='logo' />
      </Link>

      {/* Menu Items */}
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>Mobile App</li>
        <li className={menu === "contact us" ? "active" : ""} onClick={() => setMenu("contact us")}>Contact Us</li>
      </ul>

      {/* Right Section */}
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search icon" />

        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="basket icon" />
          </Link>
          {/* ✅ Dot only when there’s something in cart */}
          <div className={getTotalCartAmount() ? "dot" : ""}></div>
        </div>

        {/* Sign-in Button */}
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
