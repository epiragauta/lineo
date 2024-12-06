// ./src/pages/Sections/Section5/Form5_2.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "../../../../questions/operationQuestions"; // Asegúrate de tener este archivo si aplica
import { questions5_2 as form5_2Questions } from "./questions5_2"; // Importación del arreglo de preguntas 5.2
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form5_2 = () => {
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

    // Preguntas 5.2

    // Análisis de las Necesidades Recolectadas
    analisis_necesidades_recolectadas_pregunta: 3,
    analisis_necesidades_recolectadas_detalle: [],
    analisis_necesidades_recolectadas_evidencia1: "",
    analisis_necesidades_recolectadas_evidencia2: "",
    analisis_necesidades_recolectadas_evidencia3: "",

    // Documentación y Conservación de Necesidades Prioritarias
    documentacion_conservacion_necesidades_prioritarias_pregunta: 3,
    documentacion_conservacion_necesidades_prioritarias_evidencia1: "",
    documentacion_conservacion_necesidades_prioritarias_evidencia2: "",
    documentacion_conservacion_necesidades_prioritarias_evidencia3: "",

    // Consulta y Confirmación de Necesidades Prioritarias con los Usuarios
    consulta_confirmacion_necesidades_prioritarias_pregunta: 3,
    consulta_confirmacion_necesidades_prioritarias_evidencia1: "",
    consulta_confirmacion_necesidades_prioritarias_evidencia2: "",
    consulta_confirmacion_necesidades_prioritarias_evidencia3: "",

    // Comunicación a los Usuarios sobre las Necesidades Consideradas y No Consideradas
    comunicacion_necesidades_consideradas_pregunta: 3,
    comunicacion_necesidades_consideradas_evidencia1: "",
    comunicacion_necesidades_consideradas_evidencia2: "",
    comunicacion_necesidades_consideradas_evidencia3: "",

    // Sugerencias para Análisis de las Necesidades Recogidas
    sugerencias_analisis_necesidades_recogidas_pregunta: "",

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
    console.log("Form 5.2 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 5.2 - Análisis de las Necesidades Recogidas";

  const introductions = [
    "El análisis de las necesidades recogidas asegura que las demandas identificadas se traduzcan en requisitos técnicos y metodológicos viables. La NTC PE 1000:2020 señala que este análisis debe considerar la factibilidad técnica, la disponibilidad de recursos, el marco normativo y el impacto potencial de la información estadística. Este ejercicio garantiza que las operaciones estén diseñadas para maximizar su pertinencia, utilidad y calidad, de acuerdo con las necesidades detectadas en la fase previa."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form5_2Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form5_2;
