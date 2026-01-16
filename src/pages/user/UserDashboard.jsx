// src/pages/user/UserDashboard.jsx

import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  User,
  Package,
  MapPin,
  Wallet,
  Bell,
  Star,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { icon: User, label: "Profile", path: "/user/dashboard" },
    { icon: Package, label: "Orders", path: "/user/orders" },
    { icon: MapPin, label: "Addresses", path: "/user/addresses" },
    { icon: Wallet, label: "Wallet", path: "/user/wallet" },
    { icon: Bell, label: "Notifications", path: "/user/notifications" },
    { icon: Star, label: "Reviews", path: "/user/reviews" },
    { icon: HelpCircle, label: "Help & Support", path: "/user/help" },
    { icon: Settings, label: "Settings", path: "/user/settings" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow p-6 sticky top-24">
              <div className="flex items-center gap-4 pb-6 border-b">
                <img
                  src={
                    user?.avatar ||
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
                  }
                  alt={user?.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-bold">{user?.name}</h2>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>

              <nav className="mt-6 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      isActive(item.path)
                        ? "bg-orange-100 text-orange-600 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                    <ChevronRight className="ml-auto" size={16} />
                  </Link>
                ))}

                <button
                  onClick={logout}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 w-full"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
