import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin, showLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Disable scrolling when login popup is open
  useEffect(() => {
    document.body.style.overflow = showLogin ? "hidden" : "auto";
  }, [showLogin]);

  // Scroll to section (Home page only)
  const scrollToSection = (id, menuName) => {
    setMenu(menuName);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return;
    }

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/" onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Menu */}
      <ul className="navbar-menu">
        <li
          className={menu === "home" && location.pathname === "/" ? "active" : ""}
          onClick={() => scrollToView("home", "home")}
        >
          Home
        </li>

        <li
          className={menu === "menu" && location.pathname === "/" ? "active" : ""}
          onClick={() => scrollToSection("explore-menu", "menu")}
        >
          Menu
        </li>

        <li
          className={menu === "mobile-app" && location.pathname === "/" ? "active" : ""}
          onClick={() => scrollToSection("app-download", "mobile-app")}
        >
          Mobile App
        </li>

        {/* Contact Page Route */}
        <li
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={() => setMenu("contact")}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() ? "dot" : ""}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
