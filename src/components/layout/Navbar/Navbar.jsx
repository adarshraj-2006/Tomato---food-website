import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className="font-bold text-xl text-foreground">FoodieX</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/offers"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            Offers
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Auth */}
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/user/dashboard" className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="hidden sm:block text-sm font-medium">
                  {user?.name}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
