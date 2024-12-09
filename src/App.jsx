import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AddRestaurant from "./pages/AddRestaurant";
import AddMenu from "./pages/AddMenu";
import AdminProfile from "./pages/AdminProfile";

import "./styles/Login.css";
import "./styles/navbar.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Cambia el estado a "autenticado" después de iniciar sesión
  };

  return (
    <Router>
      {isAuthenticated && <Navbar />}{" "}
      {/* Navbar se muestra solo si está autenticado */}
        <Routes>
          <Route
            path="/"
            element={<Login onLogin={handleLogin} />} // Pasamos la función de login
          />


          <Route
            path="/add-restaurant"
            element={
              isAuthenticated ? (
                <AddRestaurant />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/add-menu"
            element={
              isAuthenticated ? (
                <AddMenu />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="*"
            element={
              <h2 className="text-center text-danger">Página no encontrada</h2>
            }
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <AdminProfile />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
    </Router>
  );
}

export default App;
