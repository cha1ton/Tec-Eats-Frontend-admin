// src/pages/AddMenu.jsx

import React, { useState } from "react";

function AddMenu() {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Plato agregado:", { dishName, description, price });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Agregar Plato/ Menú</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-4 p-4 border rounded shadow"
      >
        <div className="mb-3">
          <label htmlFor="dishName" className="form-label">
            Nombre del plato
          </label>
          <input
            type="text"
            id="dishName"
            className="form-control"
            placeholder="Nombre del plato"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <textarea
            id="description"
            className="form-control"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Guardar Plato
        </button>
      </form>
    </div>
  );
}

export default AddMenu;
