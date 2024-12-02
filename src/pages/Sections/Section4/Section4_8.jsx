// ./src/pages/Sections/Section4/Formulario4_8.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../questions/operation_questions"; // Importación del arreglo de preguntas de operación
import { questions4_8 as form4_8Questions } from "./../../../questions/questions4/questions4_8"; // Importación del arreglo de preguntas 4.8
import FormWrapper from "../../../components/FormWrapper"; // Asegúrate de tener este componente

const Formulario4_8 = () => {
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

    // Preguntas 4.8

    // Implementación de las Fases del Proceso Estadístico
    implementacion_fases_proceso_estadistico_pregunta: [],
    implementacion_fases_proceso_estadistico_evidencia1: "",
    implementacion_fases_proceso_estadistico_evidencia2: "",
    implementacion_fases_proceso_estadistico_evidencia3: "",

    // Cumplimiento de las Fases del Proceso Estadístico
    cumplimiento_fases_proceso_estadistico_pregunta: "",
    cumplimiento_fases_proceso_estadistico_calificacion: 3,
    cumplimiento_fases_proceso_estadistico_evidencia1: "",
    cumplimiento_fases_proceso_estadistico_evidencia2: "",
    cumplimiento_fases_proceso_estadistico_evidencia3: "",

    // Efectividad en la Implementación del Proceso Estadístico
    efectividad_implementacion_proceso_estadistico_pregunta: 3,
    efectividad_implementacion_proceso_estadistico_evidencia1: "",
    efectividad_implementacion_proceso_estadistico_evidencia2: "",
    efectividad_implementacion_proceso_estadistico_evidencia3: "",

    // Documentación y Aplicación de las fases del Proceso Estadístico
    documentacion_aplicacion_fases_proceso_estadistico_pregunta: 3,
    documentacion_aplicacion_fases_proceso_estadistico_evidencia1: "",
    documentacion_aplicacion_fases_proceso_estadistico_evidencia2: "",
    documentacion_aplicacion_fases_proceso_estadistico_evidencia3: "",

    // Revisión y Actualización del Proceso Estadístico
    revision_actualizacion_proceso_estadistico_pregunta: 3,
    revision_actualizacion_proceso_estadistico_evidencia1: "",
    revision_actualizacion_proceso_estadistico_evidencia2: "",
    revision_actualizacion_proceso_estadistico_evidencia3: "",

    // Sugerencias para Implementación del Proceso Estadístico
    sugerencias_implementacion_proceso_estadistico_pregunta: "",

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
    console.log("Formulario 4.8 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 4.8 - Implementación del Proceso Estadístico";

  const introductions = [
    "La implementación efectiva del proceso estadístico requiere de una planificación estructurada y la ejecución coordinada de todas las fases definidas en la NTC PE 1000:2020. Esta sección describe las actividades esenciales para garantizar que los procesos se desarrollen conforme a los objetivos, lineamientos técnicos y normativos establecidos. Asimismo, incluye las medidas necesarias para la integración de recursos, tecnologías y metodologías que aseguren resultados confiables y oportunos."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form4_8Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Formulario4_8;
