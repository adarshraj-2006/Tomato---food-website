import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx"
import Footer from "./components/Footer/Footer.jsx"
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import FoodDetails from "./components/foodDetail/foodDetail.jsx"

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div id="main">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} showLogin={showLogin} />}

      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food/:id" element={<FoodDetails/>} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
