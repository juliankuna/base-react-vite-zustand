import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/userStore";
import "./index.css";

export const LoginPage: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    debugger

    // Lógica de autenticación simulada (puedes reemplazar esto con una llamada a tu backend)
    if (email === "user@gmail.com" && password === "user123") {
      // Crear un usuario simulado
      const user = {
        firstName: "John",
        lastName: "Doe",
        email,
        password,
        phone: "123456789",
        token: "fakeToken123",
        roles: ["user"],
        change_password: false,
      };

      // Guardar usuario en la store de Zustand
      setUser(user);

      // Redirigir al home
      navigate("/home");
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Iniciar Sesión</h1>
        <form onSubmit={handleLogin} className="login-form">
          {error && <p className="login-error">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              placeholder="Ingresa tu correo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
          <p className="login-footer">
            ¿No tienes una cuenta? <a href="/register">Regístrate</a>
          </p>
        </form>
      </div>
    </div>
  );
};
