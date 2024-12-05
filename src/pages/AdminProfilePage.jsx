import React, { useState, useEffect } from 'react';

function UserProfilePage() {
  // Estado para almacenar los datos del usuario
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Aquí deberías hacer una solicitud para obtener los datos del usuario
    // Esto es solo un ejemplo estático
    const mockUserData = {
      name: 'Juan Pérez',
      email: 'juan.perez@teceats.com',
      role: 'Usuario',
    };

    setUserData(mockUserData);
  }, []);

  return (
    <div className="user-profile-container">
      <h1>Perfil de Usuario</h1>

      {userData ? (
        <div className="user-profile">
          <div className="profile-item">
            <strong>Nombre:</strong>
            <span>{userData.name}</span>
          </div>
          <div className="profile-item">
            <strong>Correo Electrónico:</strong>
            <span>{userData.email}</span>
          </div>
          <div className="profile-item">
            <strong>Rol:</strong>
            <strong>:</strong>

            <span>{userData.role}</span>
          </div>
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
}

export default UserProfilePage;
