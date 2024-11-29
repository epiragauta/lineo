// ./../../../components/Formulario4_2.js

import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { questions as operationQuestions } from "../../../questions/operation_questions";
import { questions4_2 as form4_2Questions } from "../../../questions/questions4/questions4_2"; // Importación del nuevo archivo de preguntas
import Divider from "../../../components/Divider"; // Asegúrate de tener este componente

const Formulario4_2 = () => {
  const [formData, setFormData] = useState({
    // Preguntas de Operation
    nombreOperacion: "",
    dependencia: "",
    registroAdmin: "",
    objetivo: "",
    poblacion: "",
    anioInicio: "",
    areaTematica: "",
    periodicidad: "",
    unidadEstudio: "",
    variablesPrincipales: "",
    coberturaGeografica: "",
    periodoReferencia: "",
    metodoRecoleccion: "",
    // Preguntas 4.2
    estructuraOrganicaPregunta1: "",
    estructuraOrganicaEvidencia1: "",
    estructuraOrganicaEvidencia2: "",
    estructuraOrganicaEvidencia3: "",
    documentacionActividadesPregunta1: "",
    documentacionActividadesPregunta2: "",
    documentacionActividadesEvidencia1: "",
    documentacionActividadesEvidencia2: "",
    documentacionActividadesEvidencia3: "",
    infraestructuraPregunta1: "",
    infraestructuraPregunta2: "",
    infraestructuraEvidencia1: "",
    infraestructuraEvidencia2: "",
    infraestructuraEvidencia3: "",
    mecanismosCooperacionPregunta1: "",
    mecanismosCooperacionEvidencia1: "",
    mecanismosCooperacionEvidencia2: "",
    mecanismosCooperacionEvidencia3: "",
    documentacionControlesPregunta1: 3,
    documentacionControlesEvidencia1: "",
    documentacionControlesEvidencia2: "",
    documentacionControlesEvidencia3: "",
    sugerenciasAltaDireccion: "",
    accion4_2: "",
    responsableSNS4_2: "",
    fechaCumplimiento4_2: "",
  });

  // Función para manejar cambios en inputs de tipo texto, radio y checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const currentValues = formData[name] || [];
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...currentValues, value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: currentValues.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Función para manejar cambios en selects y sliders
  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario 4.2 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una petición POST a tu backend
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-6">
         Sección 4.2 - Requisitos de la entidad
      </h1>
      <h3 className="text-xl font-semibold mb-6">
      Establece los requisitos fundamentales que deben cumplir las entidades para garantizar la implementación efectiva de los procesos estadísticos con calidad. Esta sección se enfoca en asegurar que la organización cuente con la infraestructura, los procedimientos y los recursos necesarios para soportar las actividades estadísticas de manera eficiente y conforme a los principios establecidos en la norma.
      </h3>

      <h3 className="text-xl font-semibold mb-6">
      Entre los aspectos clave, se incluye la importancia de adoptar una política de calidad estadística, documentar procesos, y establecer un sistema de gestión que permita el monitoreo y la mejora continua. La alineación de estos requisitos con los objetivos institucionales asegura una base sólida para cumplir con las demandas de transparencia, confiabilidad y accesibilidad de los datos.
      </h3>
      <Divider />

      {/* Operación Estadística */}
      <h3 className="text-xl font-normal mb-6 text-gray-700">
        Operación Estadística
      </h3>

      {operationQuestions(formData, handleChange, handleSelectChange).map((question, index) => (
        <div key={index} className="mb-6">
          {question.type === "section" ? (
            <h3 className="text-xl font-semibold mb-4">{question.label}</h3>
          ) : (
            <div
              className={`p-4 border rounded shadow-sm ${
                index % 2 === 0 ? "bg-gray-100 border-primary" : "bg-primary_light border-gray-700"
              }`}
            >
              {question.label && (
                <label className="block text-lg font-medium mb-2 text-black">
                  {question.label}
                </label>
              )}
              {question.component}
            </div>
          )}
        </div>
      ))}

      {/* Divider después de las preguntas de Operación Estadística */}
      <Divider />

      {form4_2Questions(formData, handleChange, handleSelectChange).map((question, index) => (
        <div key={index} className="mb-6">
          {question.type === "section" ? (
            <h3 className="text-xl font-semibold mb-4">{question.label}</h3>
          ) : (
            <div
              className={`p-4 border rounded shadow-sm ${
                index % 2 === 0 ? "bg-gray-100 border-primary" : "bg-primary_light border-gray-700"
              }`}
            >
              {question.label && (
                <label className="block text-lg font-medium mb-2 text-black">
                  {question.label}
                </label>
              )}
              {question.component}
            </div>
          )}
        </div>
      ))}

      <Divider />

      <Button type="submit" className="mt-6 bg-primary text-white">
        Enviar
      </Button>
    </form>
  );
};

export default Formulario4_2;
