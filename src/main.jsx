import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { AuthProvider } from "./components/context/AuthContext/AuthContext.jsx";
import { CartProvider } from "./components/context/CartContext/CartContext.jsx";
import { ThemeProvider } from "./components/context/ThemeContext/ThemeContext.jsx";
import StoreContextProvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <StoreContextProvider>
              <App />
            </StoreContextProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
