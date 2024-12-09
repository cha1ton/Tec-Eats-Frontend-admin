// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate(); // Hook para navegación

  const handleLoginClick = () => {
    onLogin(); // Llama a la función de login
    navigate("/add-restaurant"); // Redirige a la página add-restaurant
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <img
          src="/images/fondo-tecsup-campus.jpeg"
          alt="Tecsup"
          className="login-banner-image"
        />
        <h2 className="welcome-text">Bienvenido a</h2>
        <img
          src="/images/logo-Tec-Eats.png"
          alt="Tec Eat"
          className="login-logo"
        />
        <h2>Admin</h2>
        <p className="description-text text-center">
          Inicia sesión en Tec Eat y disfruta de todas nuestras funcionalidades.
        </p>

        <button onClick={handleLoginClick} className="login-button">
          Iniciar sesión con Google
        </button>

        <div className="register-link">
          <p>¿No tienes cuenta?</p>
          <a href="/register" className="register-link-text">
            Regístrate aquí
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
