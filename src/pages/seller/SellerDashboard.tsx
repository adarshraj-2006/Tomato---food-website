// src/pages/seller/SellerDashboard.jsx

import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Store,
  UtensilsCrossed,
  Package,
  DollarSign,
  Star,
  Tag,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../components/context/AuthContext/AuthContext";

const SellerDashboard = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/seller/dashboard" },
    { label: "Restaurant Profile", icon: Store, path: "/seller/profile" },
    { label: "Menu Management", icon: UtensilsCrossed, path: "/seller/menu" },
    { label: "Orders", icon: Package, path: "/seller/orders" },
    { label: "Earnings", icon: DollarSign, path: "/seller/earnings" },
    { label: "Reviews", icon: Star, path: "/seller/reviews" },
    { label: "Offers", icon: Tag, path: "/seller/offers" },
    { label: "Settings", icon: Settings, path: "/seller/settings" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden lg:block">
        <div className="p-6 border-b">
          <h2 className="text-lg font-bold">Seller Panel</h2>
          <p className="text-sm text-gray-500">{user?.name}</p>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive(item.path)
                  ? "bg-orange-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default SellerDashboard;
