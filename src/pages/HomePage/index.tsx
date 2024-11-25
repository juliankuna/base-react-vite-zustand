import React from "react";
import "./index.css";
import reactLogo from "@assets/react.svg";
import viteLogo from "../../../public/vite.svg";
import zustandLogo from "@assets/zustand.svg";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <h1>Bienvenido a Mi Aplicación</h1>
      <p>Realizada con React-Typescript, Vite y Zustand.</p>
      <div className="logos">
        <img src={reactLogo} alt="React Logo" title="React" />
        <img src={viteLogo} alt="Vite Logo" title="Vite" />
        <img src={zustandLogo} alt="Zustand Logo" title="Zustand" />
      </div>
    </div>
  );
};

export default HomePage;
