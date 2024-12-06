// ./src/pages/Sections/Section5/Form5_4.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../../questions/operation_questions"; // Asegúrate de tener este archivo si aplica
import { questions5_4 as form5_4Questions } from "./questions5_4"; // Importación del arreglo de preguntas 5.4
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form5_4 = () => {
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

    // Preguntas 5.4

    // Determinación de los Objetivos Generales y Específicos
    determinacion_objetivos_generales_especificos_pregunta: 3,
    determinacion_objetivos_generales_especificos_evidencia1: "",
    determinacion_objetivos_generales_especificos_evidencia2: "",
    determinacion_objetivos_generales_especificos_evidencia3: "",

    // Congruencia de los Objetivos con las Necesidades de Información
    congruencia_objetivos_necesidades_info_pregunta: 3,
    congruencia_objetivos_necesidades_info_evidencia1: "",
    congruencia_objetivos_necesidades_info_evidencia2: "",
    congruencia_objetivos_necesidades_info_evidencia3: "",

    // Capacidad de Seguimiento y Medición de los Objetivos
    capacidad_seguimiento_medicion_objetivos_pregunta: 3,
    capacidad_seguimiento_medicion_objetivos_evidencia1: "",
    capacidad_seguimiento_medicion_objetivos_evidencia2: "",
    capacidad_seguimiento_medicion_objetivos_evidencia3: "",

    // Comunicación de los Objetivos a las Partes Interesadas
    comunicacion_objetivos_partes_interesadas_pregunta: 3,
    comunicacion_objetivos_partes_interesadas_evidencia1: "",
    comunicacion_objetivos_partes_interesadas_evidencia2: "",
    comunicacion_objetivos_partes_interesadas_evidencia3: "",

    // Actualización de los Objetivos
    actualizacion_objetivos_pregunta: 3,
    actualizacion_objetivos_evidencia1: "",
    actualizacion_objetivos_evidencia2: "",
    actualizacion_objetivos_evidencia3: "",

    // Cuadros de priorización de objetivos
    cuadros_priorizacion_objetivos_pregunta: 3,
    cuadros_priorizacion_objetivos_evidencia1: "",
    cuadros_priorizacion_objetivos_evidencia2: "",
    cuadros_priorizacion_objetivos_evidencia3: "",

    // Mejorar la Gestión de Objetivos en las Operaciones Estadísticas
    mejorar_gestion_objetivos_operaciones_estadisticas_pregunta: "",

    // Sugerencias para Mejorar la Gestión de Objetivos en las Operaciones Estadísticas
    sugerencias_mejorar_gestion_objetivos_operaciones_estadisticas_pregunta: "",

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
    console.log("Form 5.4 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 5.4 - Objetivos de la Operación Estadística";

  const introductions = [
    "Los objetivos de la operación estadística constituyen la referencia principal que orienta todo el desarrollo del proceso estadístico. En el contexto de la NTC PE 1000:2020, esta sección establece la necesidad de formular objetivos claros, medibles y alineados con las necesidades de información identificadas. Estos, deben guiar la planificación, ejecución y evaluación de la operación, asegurando que los recursos se empleen de manera eficiente y los resultados sean consistentes con las expectativas de los usuarios."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form5_4Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form5_4;
