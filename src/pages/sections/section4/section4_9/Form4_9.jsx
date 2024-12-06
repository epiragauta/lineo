// ./src/pages/Sections/Section4/Form4_9.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "../../../../questions/operationQuestions"; // Importación del arreglo de preguntas de operación
import { questions4_9 as form4_9Questions } from "./questions4_9"; // Importación del arreglo de preguntas 4.9
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form4_9 = () => {
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

    // Preguntas 4.9

    // Definición e Implementación de Controles para Operadores
    definicion_implementacion_controles_operadores_pregunta: "",
    definicion_implementacion_controles_operadores_contratacion: [],
    definicion_implementacion_controles_operadores_evidencia1: "",
    definicion_implementacion_controles_operadores_evidencia2: "",
    definicion_implementacion_controles_operadores_evidencia3: "",

    // Responsabilidad de la Producción Estadística
    responsabilidad_produccion_estadistica_pregunta: "",
    responsabilidad_produccion_estadistica_evidencia1: "",
    responsabilidad_produccion_estadistica_evidencia2: "",
    responsabilidad_produccion_estadistica_evidencia3: "",

    // Evaluación de la Subcontratación
    evaluacion_subcontratacion_pregunta: 3,
    evaluacion_subcontratacion_evidencia1: "",
    evaluacion_subcontratacion_evidencia2: "",
    evaluacion_subcontratacion_evidencia3: "",

    // Monitoreo de Cumplimiento de Requisitos
    monitoreo_cumplimiento_requisitos_pregunta: 3,
    monitoreo_cumplimiento_requisitos_evidencia1: "",
    monitoreo_cumplimiento_requisitos_evidencia2: "",
    monitoreo_cumplimiento_requisitos_evidencia3: "",

    // Responsabilidad en la Subcontratación
    responsabilidad_subcontratacion_pregunta: 3,
    responsabilidad_subcontratacion_evidencia1: "",
    responsabilidad_subcontratacion_evidencia2: "",
    responsabilidad_subcontratacion_evidencia3: "",

    // Sugerencias para Subcontratación para el Desarrollo de la Operación Estadística
    sugerencias_subcontratacion_pregunta: "",

    // Acciones Requeridas
    accion: "",
    responsableSNS: "",
    fechaCumplimiento: "",
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

  // useEffect para monitorear cambios en formData
  useEffect(() => {
    console.log("formData actualizado:", formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form 4.9 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 4.9 - Subcontratación para el Desarrollo de la Operación Estadística";

  const introductions = [
    "La subcontratación en el contexto del proceso estadístico debe realizarse bajo criterios claros y estrictos que garanticen el cumplimiento de los estándares de calidad definidos por la NTC PE 1000:2020. Esta sección detalla los requisitos para la selección, contratación, supervisión y evaluación de terceros encargados de desarrollar actividades específicas del proceso estadístico. La gestión adecuada de la subcontratación asegura que los resultados se alineen con los objetivos estratégicos y normativos de la operación estadística."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form4_9Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form4_9;
