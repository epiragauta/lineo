import React from 'react';

const Home = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-7xl mx-auto w-full">  
      <h1 className="text-5xl font-bold mb-4">Bienvenido a Linéo</h1>
      <div className="text-gray-800 text-3xl space-y-4 ">
        {/* <h1 className="text-2xl font-bold">Bienvenido a Linéo</h1> */}
        <p className="leading-relaxed">
          Las estadísticas nacionales son esenciales para el diseño, implementación y evaluación de políticas públicas, proporcionando
          la base para un entendimiento preciso de las dinámicas sociales y económicas de un país. El SENA, como institución rectora de la formación profesional integral,
          cumple una función clave como actor dentro del Sistema Estadístico Nacional. Su compromiso estratégico con la calidad estadística,
          refuerza la confiabilidad de la información, permitiendo una gestión eficiente de los datos.
        </p>
        <p className="leading-relaxed border-t-2 border-primary pt-4">
          Linéo es la herramienta técnica y estratégica diseñada para monitorear y evaluar la implementación de los lineamientos establecidos
          por la Norma Técnica Colombiana NTC PE 1000:2020 dentro del SIIES, el Sistema Integrado de Información Estadística del SENA; busca garantizar el cumplimiento de los mismos y su grado de conformidad
          con los requisitos normativos, identificando fortalezas y oportunidades de mejora que permitan a la entidad certificar su proceso estadístico.
        </p>
      </div>

    </div>
  );
};

export default Home;
