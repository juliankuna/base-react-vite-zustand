// Layout.tsx
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Layout;
