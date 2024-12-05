// src/components/user/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";  // Importamos Link para la navegación interna

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Usamos Link para redirigir al inicio */}
        <Link className="navbar-brand" to="/home">
          <img
            src="/images/logo-Tec-Eats-blanco.png"  // Asegúrate de tener la imagen en la ruta correcta
            alt="Tec Eats Logo"
            width="120"  // Ajusta el tamaño según sea necesario
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/add-restaurant">
                Agregar Restaurante
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/add-menu">
                Agregar Menú
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/profile">
                Usuario
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light" to="/">
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
