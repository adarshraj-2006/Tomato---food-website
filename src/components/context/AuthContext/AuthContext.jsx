// AuthContext.jsx
// Handles authentication state and actions

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);

  // Load user from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login
  const login = async (email, password) => {
    setIsLoading(true);

    // fake delay (API simulation)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // demo auth logic
    const loggedInUser = {
      id: Date.now(),
      name: email.split("@")[0],
      email,
      role: email.includes("admin")
        ? "admin"
        : email.includes("seller")
        ? "seller"
        : "user",
    };

    setUser(loggedInUser);
    localStorage.setItem("authUser", JSON.stringify(loggedInUser));
    setIsLoading(false);
  };

  // Signup
  const signup = async (name, email, password, role = "user") => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newUser = {
      id: Date.now(),
      name,
      email,
      role,
    };

    setUser(newUser);
    localStorage.setItem("authUser", JSON.stringify(newUser));
    setIsLoading(false);
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    redirectPath,
    setRedirectPath,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;