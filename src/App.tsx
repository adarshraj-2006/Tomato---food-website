// src/App.jsx

import AppRoutes from "./routes/AppRoutes";

// Context Providers
import { AuthProvider } from "./components/context/AuthContext/AuthContext";
import { CartProvider } from "./components/context/CartContext/CartContext";
import { ThemeProvider } from "./components/context/ThemeContext/ThemeContext";
import Chatbot from "./components/Chatbot/Chatbot";

const App = () => {
  return (
    <div className="app min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <AppRoutes />
            <Chatbot />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
