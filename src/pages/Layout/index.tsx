// import React, { useState } from "react";
// import "./Layout.css";

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

//   return (
//     <div className="layout">
//       <header className="header">Header</header>
//       <aside
//         className={`sidebar ${isSidebarExpanded ? "expanded" : "collapsed"}`}
//         onMouseEnter={() => setIsSidebarExpanded(true)}
//         onMouseLeave={() => setIsSidebarExpanded(false)}
//       >
//         <ul>
//           <li>🏠 Inicio</li>
//           <li>📂 Proyectos</li>
//           <li>⚙ Configuración</li>
//           <li>📞 Contacto</li>
//         </ul>
//       </aside>
//       <main className="main-content">{children}</main>
//       <footer className="footer">Footer</footer>
//     </div>
//   );
// };

// export default Layout;
import React, { useState } from "react";
import "./Layout.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="layout">
      <header className="header">
        <span>Header</span>
        <button
          className="menu-toggle"
          onClick={() => setIsSidebarExpanded((prev) => !prev)}
        >
          ☰
        </button>
      </header>
      <aside
        className={`sidebar ${isSidebarExpanded ? "expanded" : "collapsed"}`}
        onMouseEnter={() => setIsSidebarExpanded(true)}
        onMouseLeave={() => setIsSidebarExpanded(false)}
      >
        <ul>
          <li>🏠 Inicio</li>
          <li>📂 Proyectos</li>
          <li>⚙ Configuración</li>
          <li>📞 Contacto</li>
        </ul>
      </aside>
      <main className="main-content">{children}</main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Layout;
