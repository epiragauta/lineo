import React from 'react';
import { Link } from 'react-router-dom';
import SNSaludLogo from '../assets/SNSaludLogo.png';
import LineoLogo from '../assets/LogoLineo-02.png';
import {
  FaHome,
  FaLightbulb,
  FaSignOutAlt,
  FaChartBar,
} from 'react-icons/fa';

const Sidebar = ({ onLogout }) => {
  return (
    <aside className="fixed inset-y-0 left-0 w-64 h-screen bg-white shadow-lg">
      {/* Logo Superior */}
      <div className="flex justify-center items-center p-4">
        <img
          src={SNSaludLogo}
          alt="SNSalud Logo"
          className="w-40"
        />
      </div>

      {/* Navegación */}
      <nav className="mt-6">
        <h3 className="px-4 py-2 text-gray-600 text-sm font-semibold uppercase">
          General
        </h3>
        <ul>
          <li>
            <Link
              to="/home"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded transition"
            >
              <FaHome className="mr-3" />
              Home
            </Link>
          </li>
        </ul>

        <h3 className="px-4 py-2 text-gray-600 text-sm font-semibold uppercase">
          Secciones
        </h3>
        <ul>
          <li>
            <Link
              to="/forms/4/4.1"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded transition"
            >
              <FaLightbulb className="mr-3" />
              4.1 Responsabilidades
            </Link>
          </li>
          <li>
            <Link
              to="/4.2"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded transition"
            >
              <FaLightbulb className="mr-3" />
              4.2 Requisitos
            </Link>
          </li>
        </ul>

        <h3 className="px-4 py-2 text-gray-600 text-sm font-semibold uppercase">
          Dashboards
        </h3>
        <ul>
          <li>
            <Link
              to="/4/4.1"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded transition"
            >
              <FaChartBar className="mr-3" />
              Dashboard 4.1
            </Link>
          </li>
        </ul>
      </nav>

      {/* Botón de Cerrar Sesión */}
      <div className="mt-6 px-4">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>

      {/* Logo Inferior */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center items-center">
        <img
          src={LineoLogo}
          alt="Lineo Logo"
          className="w-32"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
