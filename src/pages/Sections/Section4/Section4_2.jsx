// ./src/pages/Sections/Section4/Formulario4_2.js

import React, { useState } from "react";
import { operationQuestions } from "./../../../questions/operation_questions"; // Importación del arreglo de preguntas de operación
import { questions4_2 as form4_2Questions } from "./../../../questions/questions4/questions4_2"; // Importación del arreglo de preguntas 4.2
import FormWrapper from "../../../components/FormWrapper"; // Asegúrate de tener este componente

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

  const mainTitle = "Sección 4.2 - Requisitos de la entidad";

  const introductions = [
    "Introducción",
    "Establece los requisitos fundamentales que deben cumplir las entidades para garantizar la implementación efectiva de los procesos estadísticos con calidad. Esta sección se enfoca en asegurar que la organización cuente con la infraestructura, los procedimientos y los recursos necesarios para soportar las actividades estadísticas de manera eficiente y conforme a los principios establecidos en la norma.",
    "Entre los aspectos clave, se incluye la importancia de adoptar una política de calidad estadística, documentar procesos, y establecer un sistema de gestión que permita el monitoreo y la mejora continua. La alineación de estos requisitos con los objetivos institucionales asegura una base sólida para cumplir con las demandas de transparencia, confiabilidad y accesibilidad de los datos.",
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form4_2Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Formulario4_2;
