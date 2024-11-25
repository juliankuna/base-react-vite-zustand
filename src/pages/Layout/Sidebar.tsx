// Sidebar.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./layout.css";

const Sidebar: React.FC = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <aside
      className={`sidebar ${isSidebarExpanded ? "expanded" : "collapsed"}`}
      onMouseEnter={() => setIsSidebarExpanded(true)}
      onMouseLeave={() => setIsSidebarExpanded(false)}
    >
      <div
        className="items"
        style={isSidebarExpanded ? { textAlign: "left" } : { textAlign: "center" }}
      >
        <div className="item" onClick={() => navigate("/home")}>
          <span className="icon">🏠</span>
          {isSidebarExpanded && <span className="label">Inicio</span>}
        </div>
        <div className="item" onClick={() => navigate("/projects")}>
          <span className="icon">📂</span>
          {isSidebarExpanded && <span className="label">Proyectos</span>}
        </div>
        <div className="item" onClick={() => navigate("/settings")}>
          <span className="icon">⚙</span>
          {isSidebarExpanded && <span className="label">Configuración</span>}
        </div>
        <div className="item" onClick={() => navigate("/contact")}>
          <span className="icon">📞</span>
          {isSidebarExpanded && <span className="label">Contacto</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
