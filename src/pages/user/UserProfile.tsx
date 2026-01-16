// src/pages/user/UserProfile.jsx

import React from "react";
import { useAuth } from "../../components/context/AuthContext/AuthContext";
import { userOrders, userAddresses } from "../../components/data/data";
import { User, Package, MapPin, Wallet, Star, Edit } from "lucide-react";

const UserProfile = () => {
  const { user: authUser } = useAuth();
  
  const user = {
    name: authUser?.name || "User",
    email: authUser?.email || "user@example.com",
    phone: "+91 9876543210",
    avatar:
      authUser?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
  };

  const stats = [
    { icon: Package, label: "Orders", value: userOrders.length },
    { icon: MapPin, label: "Addresses", value: userAddresses.length },
    { icon: Wallet, label: "Wallet", value: "₹250" },
    { icon: Star, label: "Reviews", value: "12" },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Edit size={16} />
            Edit
          </button>
        </div>

        <div className="flex items-center gap-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-xl object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow p-4 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-orange-100 flex items-center justify-center">
              <stat.icon className="text-orange-600" size={24} />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="space-y-4">
          {userOrders.slice(0, 2).map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{order.restaurantName}</p>
                <p className="text-sm text-gray-500">
                  {order.date} • ₹{order.total}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === "delivered"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
