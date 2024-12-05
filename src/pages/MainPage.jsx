import React from 'react';
import { Link } from 'react-router-dom'; // Si estás usando React Router para la navegación

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Menú Principal</h2>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <Link to="/profile" className="sidebar-link">Perfil</Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/orders" className="sidebar-link">Mis Pedidos</Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/settings" className="sidebar-link">Ajustes</Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/logout" className="sidebar-link">Cerrar sesión</Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <h1 className="welcome-title">Bienvenido a Tec Eats</h1>
        <p className="welcome-text">Aquí podrás gestionar tus pedidos, ver tu perfil y realizar ajustes en tu cuenta.</p>
        
        <div className="card">
          <h3 className="card-title">Tus Pedidos Recientes</h3>
          <p className="card-text">Aquí se mostrarán los pedidos que has realizado recientemente.</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
