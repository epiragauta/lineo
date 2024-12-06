// ./src/pages/Sections/Section4/Form4_10.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../../questions/operation_questions"; // Asegúrate de tener este archivo
import { questions4_10 as form4_10Questions } from "./questions4_10"; // Importación del arreglo de preguntas 4.10
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form4_10 = () => {
  const [formData, setFormData] = useState({
    // Preguntas de Operation (si aplica)
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

    // Preguntas 4.10

    // Definición de Mecanismos de Seguimiento y Medición
    definicion_mecanismos_seguimiento_medicion_pregunta: [],
    definicion_mecanismos_seguimiento_medicion_evidencia1: "",
    definicion_mecanismos_seguimiento_medicion_evidencia2: "",
    definicion_mecanismos_seguimiento_medicion_evidencia3: "",

    // Determinación del Seguimiento y Medición
    determinacion_seguimiento_medicion_pregunta: [],
    determinacion_seguimiento_medicion_evidencia1: "",
    determinacion_seguimiento_medicion_evidencia2: "",
    determinacion_seguimiento_medicion_evidencia3: "",

    // Documentación de Mecanismos de Seguimiento y Medición
    documentacion_mecanismos_seguimiento_medicion_pregunta: 3,
    documentacion_mecanismos_seguimiento_medicion_evidencia1: "",
    documentacion_mecanismos_seguimiento_medicion_evidencia2: "",
    documentacion_mecanismos_seguimiento_medicion_evidencia3: "",

    // Pruebas y Evaluación
    pruebas_evaluacion_pregunta: [],
    pruebas_evaluacion_evidencia1: "",
    pruebas_evaluacion_evidencia2: "",
    pruebas_evaluacion_evidencia3: "",

    // Acciones Correctivas y Eficacia
    acciones_correctivas_eficacia_pregunta: "",
    acciones_correctivas_eficacia_evidencia1: "",
    acciones_correctivas_eficacia_evidencia2: "",
    acciones_correctivas_eficacia_evidencia3: "",

    // Sugerencias para el Seguimiento y Medición
    sugerencias_seguimiento_medicion_pregunta: "",

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
    console.log("Form 4.10 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 4.10 - Seguimiento y Medición";

  const introductions = [
    "El seguimiento y la medición son herramientas clave para evaluar el desempeño del proceso estadístico y garantizar su mejora continua. Esta sección establece directrices para la implementación de sistemas de monitoreo que permitan medir indicadores de calidad, eficiencia y efectividad en todas las fases del proceso. Los resultados de estas mediciones constituyen la base para realizar ajustes, documentar lecciones aprendidas y fortalecer la capacidad institucional en la generación de información estadística confiable."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form4_10Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form4_10;
