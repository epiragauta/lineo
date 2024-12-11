// src/components/EnviosPanel.jsx
import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const EnviosPanel = () => {
  // Estado para almacenar los envíos
  const [envios, setEnvios] = useState([]);
  
  // Estado para controlar el acordeón abierto
  const [open, setOpen] = useState(0);
  
  // Función para manejar la apertura de acordeones
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // Simulación de datos de envíos
  useEffect(() => {
    // Aquí deberías reemplazar esto con una llamada a tu API para obtener los envíos
    const datosEjemplo = [
      {
        id: 1,
        usuario: "Juan Pérez",
        fecha: "2024-04-20",
        hora: "14:35",
        subseccion: "Contacto",
        resumen: {
          nombre: "Juan Pérez",
          email: "juan.perez@example.com",
          mensaje: "Estoy interesado en sus servicios."
        }
      },
      {
        id: 2,
        usuario: "María López",
        fecha: "2024-04-21",
        hora: "09:15",
        subseccion: "Registro",
        resumen: {
          nombre: "María López",
          email: "maria.lopez@example.com",
          usuario: "maria_l",
          contraseña: "******"
        }
      },
      // Agrega más envíos según necesites
    ];

    setEnvios(datosEjemplo);
  }, []);

  // Función para formatear la fecha
  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Envíos de Formularios</h1>
      <div className="space-y-4">
        {envios.map((envio, index) => (
          <Accordion
            key={envio.id}
            open={open === envio.id}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-200 ${open === envio.id ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            }
            onClick={() => handleOpen(envio.id)}
            className="border rounded-lg"
          >
            <AccordionHeader>
              <div className="flex justify-between w-full">
                <div className="font-semibold">{envio.usuario}</div>
                <div className="text-sm text-gray-500">
                  {formatearFecha(envio.fecha)} a las {envio.hora}
                </div>
                <div className="text-sm text-gray-500">{envio.subseccion}</div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Resumen del Envío</h3>
                <table className="min-w-full table-auto">
                  <tbody>
                    {Object.entries(envio.resumen).map(([clave, valor]) => (
                      <tr key={clave} className="border-t">
                        <th className="text-left px-4 py-2 capitalize">{clave}</th>
                        <td className="px-4 py-2">{valor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default EnviosPanel;
