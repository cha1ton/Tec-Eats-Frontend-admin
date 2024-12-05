// src/pages/AddRestaurantPage.jsx

import React, { useState } from "react";

function AddRestaurantPage() {
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Restaurante agregado:", { restaurantName, address, type });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Agregar Restaurante</h2>
      <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded shadow">
        <div className="mb-3">
          <label htmlFor="restaurantName" className="form-label">
            Nombre del restaurante
          </label>
          <input
            type="text"
            id="restaurantName"
            className="form-control"
            placeholder="Nombre del restaurante"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Tipo de comida
          </label>
          <input
            type="text"
            id="type"
            className="form-control"
            placeholder="Tipo de comida"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Guardar Restaurante
        </button>
      </form>
    </div>
  );
}

export default AddRestaurantPage;
