import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import AddRestaurantPage from "./pages/AddRestaurantPage";
import AddMenuPage from "./pages/AddMenuPage";
import MainPage from "./pages/MainPage";
import AdminProfilePage from "./pages/AdminProfilePage";

import "./styles/LoginPage.css";
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
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={<LoginPage onLogin={handleLogin} />} // Pasamos la función de login
          />

          <Route
            path="/main"
            element={
              isAuthenticated ? <MainPage /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/add-restaurant"
            element={
              isAuthenticated ? (
                <AddRestaurantPage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/add-menu"
            element={
              isAuthenticated ? (
                <AddMenuPage />
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
                <AdminProfilePage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
