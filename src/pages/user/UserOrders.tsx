// src/pages/user/UserOrders.jsx

import React from "react";
import { Link } from "react-router-dom";
import { userOrders } from "../../components/data/data";
import { Package, ChevronRight } from "lucide-react";

const UserOrders = () => {
  if (!userOrders || userOrders.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <Package className="mx-auto mb-4 text-gray-400" size={48} />
        <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
        <p className="text-gray-500 mb-4">
          You haven’t placed any orders yet.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600"
        >
          Start Ordering
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Orders</h1>

      {userOrders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="flex-1">
            <h2 className="font-semibold text-lg">
              {order.restaurantName}
            </h2>
            <p className="text-sm text-gray-500">
              Order ID: {order.id}
            </p>
            <p className="text-sm text-gray-500">
              {order.date}
            </p>

            <div className="mt-2">
              {order.items.map((item, index) => (
                <p
                  key={index}
                  className="text-sm text-gray-600"
                >
                  {item.name} × {item.quantity}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === "delivered"
                  ? "bg-green-100 text-green-600"
                  : order.status === "preparing"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {order.status}
            </span>

            <p className="font-bold text-lg">₹{order.total}</p>

            <Link
              to={`/restaurant/${order.restaurantId}`}
              className="flex items-center gap-1 text-orange-600 hover:underline text-sm"
            >
              Order Again
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserOrders;
