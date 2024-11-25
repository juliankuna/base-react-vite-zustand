import { useLocation } from "react-router-dom";
import reactLogo from "@assets/react.svg";
import "./index.css";

export const ExamplePage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="example-page">
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h3>Hola desde {location.pathname}!</h3>
    </div>
  );
};
