// src/pages/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar lógica de validación del usuario
    if (email && password) {
      onLogin(); // Llama la función de autenticación
      navigate("/add-restaurant"); // Redirige al dashboard
    }
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

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Introduce tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

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
