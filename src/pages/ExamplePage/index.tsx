import { useLocation } from "react-router-dom";
import reactLogo from "@assets/react.svg";

export const ExamplePage: React.FC = () => {
  const location = useLocation();
  console.log("🚀 ~ location:", location)

  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h3>Hola desde {location.pathname} !</h3>
    </div>
  );
};
