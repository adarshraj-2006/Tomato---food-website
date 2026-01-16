import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const MainLayout = ({ children, showFooter = true }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-[70px]">{children}</main>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
