// Header.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./layout.css";
import { useUserStore } from "../../stores/userStore";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { setLogout } = useUserStore();

  const handleLogout = () => {
    setLogout();
    navigate("/login");
  };

  return (
    <header className="header">
      {/* Botón de menú independiente */}
      {/* <span>Header Content</span> */}
      <div className="menu-container">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <div
              className="dropdown-item"
              onClick={() => navigate("/profile")}
            >
              Mi Perfil
            </div>
            <div className="dropdown-item" onClick={handleLogout}>
              Cerrar Sesión
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
