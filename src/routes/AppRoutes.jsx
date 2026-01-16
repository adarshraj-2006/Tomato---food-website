// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "..src/components/ProtectedRoute/ProtectedRoute";

// Public Pages
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Cart from "../pages/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import Profile from "../pages/profile/profile";
import NotFound from "../pages/NotFound";

// User Pages
import UserDashboard from "../pages/user/UserDashboard";
import UserOrders from "../pages/user/UserOrders";
import UserProfile from "../pages/user/UserProfile";
import OrderConfirmation from "../pages/user/OrderConfirmation";

// Seller Pages
import SellerDashboard from "../pages/seller/SellerDashboard";
import SellerOverview from "../pages/seller/SellerOverview";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/profile" element={<Profile />} />

      {/* User Protected Routes */}
      <Route
        path="/user"
        element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<UserProfile />} />
        <Route path="orders" element={<UserOrders />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>

      <Route
        path="/order-confirmation"
        element={
          <ProtectedRoute role="user">
            <OrderConfirmation />
          </ProtectedRoute>
        }
      />

      {/* Seller Protected Routes */}
      <Route
        path="/seller"
        element={
          <ProtectedRoute role="seller">
            <SellerDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<SellerOverview />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;
