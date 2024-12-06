// ./src/pages/Sections/Section5/Form5_3.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "../../../../questions/operationQuestions"; // Asegúrate de tener este archivo si aplica
import { questions5_3 as form5_3Questions } from "./questions5_3"; // Importación del arreglo de preguntas 5.3
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form5_3 = () => {
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

    // Preguntas 5.3

    // Identificación de Relevancia
    identificacion_relevancia_pregunta: "",
    identificacion_relevancia_evidencia: [],
    identificacion_relevancia_evidencia1: "",
    identificacion_relevancia_evidencia2: "",
    identificacion_relevancia_evidencia3: "",

    // Documentación de Relevancia
    documentacion_relevancia_pregunta: "",
    documentacion_relevancia_calificacion: 3,
    documentacion_relevancia_evidencia1: "",
    documentacion_relevancia_evidencia2: "",
    documentacion_relevancia_evidencia3: "",

    // Evaluación de Relación con Políticas
    evaluacion_relacion_politicas_pregunta: 3,
    evaluacion_relacion_politicas_evidencia1: "",
    evaluacion_relacion_politicas_evidencia2: "",
    evaluacion_relacion_politicas_evidencia3: "",

    // Revisión y Actualización de Relevancia
    revision_actualizacion_relevancia_pregunta: "",
    revision_actualizacion_relevancia_descripcion: "",
    revision_actualizacion_relevancia_evidencia1: "",
    revision_actualizacion_relevancia_evidencia2: "",
    revision_actualizacion_relevancia_evidencia3: "",

    // Sugerencias para Mejorar la Relevancia de las Operaciones Estadísticas en la Política Pública
    sugerencias_mejorar_relevancia_operaciones_estadisticas_pregunta: "",

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
    console.log("Form 5.3 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 5.3 - Relevancia de los Resultados de la Operación Estadística para la Política Pública";

  const introductions = [
    "La relevancia de los resultados de la operación estadística radica en su capacidad de influir en la formulación, seguimiento y evaluación de políticas públicas. De acuerdo con la NTC PE 1000:2020, esta sección destaca la importancia de vincular los objetivos y resultados estadísticos con los marcos de política pública existentes, asegurando que los datos generados contribuyan efectivamente a la toma de decisiones basadas en evidencia. Esto exige un análisis detallado del contexto institucional y de las prioridades estratégicas de la entidad y del país."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form5_3Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form5_3;
