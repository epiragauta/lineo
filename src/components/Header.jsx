// src/components/Header.jsx
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Botón para abrir la Sidebar en móviles */}
      <button onClick={toggleSidebar} className="md:hidden">
        <FaBars size={24} />
      </button>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      {/* Puedes agregar otros elementos al header aquí */}
    </header>
  );
};

export default Header;
