// src/App.jsx

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

// Context Providers
import { AuthProvider } from "./components/context/AuthContext/AuthContext.jsx";
import { CartProvider } from "./components/context/CartContext/CartContext.jsx";
import { ThemeProvider } from "./components/context/ThemeContext/ThemeContext.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
