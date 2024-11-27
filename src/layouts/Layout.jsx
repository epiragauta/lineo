import React from 'react';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar fija */}
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex-1 ml-64 p-4 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
