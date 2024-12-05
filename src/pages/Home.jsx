import React from 'react';

const Home = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a Lineo</h1>
      <div className="text-gray-800 text-xl space-y-4">
        <p>
          El Departamento Administrativo Nacional de Estadística (DANE), en cumplimiento de lo
          establecido en el artículo 155 de la Ley 1955 de 2019 y el Decreto 2404 de 2019, actualizó y
          publicó la presente norma técnica para garantizar la calidad del proceso de producción y
          difusión de las estadísticas oficiales.
        </p>
        <p>
          El documento que se presenta a continuación tiene como finalidad dar cumplimiento a este
          mandato legal y contribuir a que las entidades y las organizaciones que conforman el
          Sistema Estadístico Nacional (SEN) produzcan estadísticas oficiales con estándares de
          calidad.
        </p>
        <p>
          El SEN está integrado por las entidades que producen y difunden estadísticas o son
          responsables de registros administrativos, así:
        </p>
        <ul className="list-disc list-inside pl-5">
          <li>
            Pertenecientes a las Ramas del Poder Público, en todos los niveles de la estructura
            estatal, central o descentralizada por servicios o territorialmente; del orden nacional,
            departamental, municipal y distrital.
          </li>
          <li>
            Los órganos, organismos o entidades estatales independientes o autónomos de control.
          </li>
          <li>Las personas jurídicas, públicas o privadas, que presten servicios públicos.</li>
          <li>
            Cualquier persona jurídica o dependencia de persona jurídica que desempeñe función
            pública o de autoridad pública.
          </li>
          <li>
            Personas jurídicas que posean, produzcan o administren registros administrativos, en el
            desarrollo de su objeto social, que sean insumos necesarios para la producción de
            estadísticas oficiales.
          </li>
        </ul>
        <p>
          De este modo, el DANE, en conjunto con el Instituto Colombiano de Normas Técnicas y
          Certificación (ICONTEC), estableció la primera norma en versión del 2017. Luego de esto se
          elabora esta actualización con el objeto de incorporar lo definido en los Lineamientos para
          el Proceso Estadístico versión 2, cuyo referente corresponde al Modelo genérico del proceso
          estadístico (GSBPM por sus siglas en inglés) versión 5.1, y las mejoras identificadas en su
          aplicación entre las que se cuentan el promover la producción estadística basada en
          procesos, para ser adoptado dentro de la gestión organizacional y en la implementación en
          todas las entidades del SEN, sin importar su tamaño y características.
        </p>
      </div>

    </div>
  );
};

export default Home;
