// src/pages/About.js

import React from "react";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMembers } from "../data/teamMembers";

const About = () => {
  return (
    <div className="container mx-auto p-6 shadow-md rounded bg-white " >
      {/* Título Principal */}
      <h1 className="text-5xl font-bold mb-8 text-center text-primary">Acerca de</h1>
      
      {/* Sección de Descripción de la Herramienta */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Nuestra Herramienta</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          Nuestra herramienta tiene como objetivo verificar y hacer seguimiento por parte de la Dirección de Innovación y Desarrollo a la implementación y el cumplimiento de las normas NTC. Esto nos permite contar con registros administrativos de alta calidad que facilitan la generación de estadísticas precisas y la toma de acciones informadas basadas en estos datos.
        </p>
      </section>
      
      {/* Sección de Tecnologías Utilizadas */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Tecnologías Utilizadas</h2>
        <ul className="text-xl list-disc list-inside text-gray-700">
          <li>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              React.js
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Tailwind CSS con Material Tailwind
            </a>
          </li>
          <li>
            <a
              href="https://supabase.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Supabase para la base de datos
            </a>
          </li>
        </ul>
      </section>
      
      {/* Sección del Equipo */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
