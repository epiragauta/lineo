import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  FaHome,
  FaGavel,
  FaBook,
  FaRegLightbulb,
  FaTools,
  FaDatabase,
  FaCog,
  FaChartLine,
  FaShareAlt,
  FaChartPie,
  FaWrench,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle
} from "react-icons/fa";
import SNSaludLogo from "../assets/logos/sena/sena_verde.png";
import LineoLogo from "../assets/logos/lineo/lineo_gris.png";
import formsConfig from "../data/formsConfig";
import { supabase } from "../backend/supabaseClient";

const iconMapping = {
  FaHome: <FaHome />,
  FaGavel: <FaGavel />,
  FaBook: <FaBook />,
  FaRegLightbulb: <FaRegLightbulb />,
  FaTools: <FaTools />,
  FaDatabase: <FaDatabase />,
  FaCog: <FaCog />,
  FaChartLine: <FaChartLine />,
  FaShareAlt: <FaShareAlt />,
  FaChartPie: <FaChartPie />,
  FaWrench: <FaWrench />,
  FaChevronDown: <FaChevronDown />,
  FaChevronUp: <FaChevronUp />,
  FaInfoCircle: <FaInfoCircle />
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const handleOpen = (section) => {
    setOpen(open === section ? null : section);
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
      alert("Error al cerrar sesión: " + error.message);
    }
  };

  return (
    <aside className="fixed inset-y-0 left-0 w-64 h-screen bg-white shadow-lg overflow-y-auto">
      {/* Logo Superior */}
      <div className="flex justify-center items-center p-4">
        <img src={SNSaludLogo} alt="SNSalud Logo" className="w-40" />
      </div>

      <div className="bottom-4 left-0 w-full flex justify-center items-center mt-6">
        <img src={LineoLogo} alt="Lineo Logo" className="w-36" />
      </div>

      {/* Navegación */}
      <nav className="mt-6 px-2">
        {/* General */}
        <h3 className="text-gray-900 text-sm font-bold uppercase mb-2">
          General
        </h3>
        <ul>
          <li>
            <Link
              to="/home"
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-primary_light hover:text-primary rounded transition ${location.pathname === "/home" ? "bg-primary_light text-primary" : ""
                }`}
            >
              {iconMapping.FaHome}
              <span className="ml-3">Home</span>
            </Link>
          </li>
        </ul>

        {/* Forms */}
        <h3 className="text-gray-900 text-sm font-bold uppercase mt-4 mb-2">
          Forms
        </h3>
        {formsConfig.map((section) => (
          <Accordion
            key={section.section}
            open={open === section.section}
            icon={
              open === section.section ? (
                <FaChevronUp className="w-4 h-4" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )
            }
            className="mb-2"
          >
            <AccordionHeader onClick={() => handleOpen(section.section)}>
              <div className="flex items-center">
                {iconMapping[section.icon] || <FaRegLightbulb />}
                <span className="ml-3 text-sm font-normal text-primary">
                  {section.sectionLabel}
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <ul>
                {section.subsections.map((form) => (
                  <li key={form.path}>
                    <Link
                      to={form.path}
                      className={`flex items-center px-4 py-2 text-gray-700 hover:bg-primary_light hover:text-primary rounded transition ${location.pathname === form.path
                          ? "bg-primary_light text-primary"
                          : ""
                        }`}
                    >
                      {iconMapping[section.icon] || <FaRegLightbulb />}
                      <span className="ml-3">{form.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionBody>
          </Accordion>
        ))}

        {/* Dashboards */}
        <h3 className="text-gray-900 text-sm font-bold uppercase mt-4 mb-2">
          Dashboards
        </h3>
        <ul>
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-primary_light hover:text-primary rounded transition ${location.pathname === "/dashboard"
                  ? "bg-primary_light text-primary"
                  : ""
                }`}
            >
              {iconMapping.FaChartPie}
              <span className="ml-3">Dashboard General</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Botón de Cerrar Sesión */}
      <div className="mt-6 px-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;