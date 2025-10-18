import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div id="main">
      {/* ✅ Show popup only when true */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}


      {/* Pass function to Navbar so it can open popup */}
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
