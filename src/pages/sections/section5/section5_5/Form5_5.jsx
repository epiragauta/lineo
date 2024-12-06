// ./src/pages/Sections/Section5/Form5_5.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../../questions/operation_questions"; // Asegúrate de tener este archivo si aplica
import { questions5_5 as form5_5Questions } from "./questions5_5"; // Importación del arreglo de preguntas 5.5
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form5_5 = () => {
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

    // Preguntas 5.5

    // Identificación de Conceptos Básicos
    identificacion_conceptos_basicos_pregunta: 3,
    identificacion_conceptos_basicos_evidencia1: "",
    identificacion_conceptos_basicos_evidencia2: "",
    identificacion_conceptos_basicos_evidencia3: "",

    // Identificación de Variables Estadísticas
    identificacion_variables_estadisticas_pregunta: 3,
    identificacion_variables_estadisticas_evidencia1: "",
    identificacion_variables_estadisticas_evidencia2: "",
    identificacion_variables_estadisticas_evidencia3: "",

    // Identificación de Indicadores Estadísticos
    identificacion_indicadores_estadisticas_pregunta: 3,
    identificacion_indicadores_estadisticas_evidencia1: "",
    identificacion_indicadores_estadisticas_evidencia2: "",
    identificacion_indicadores_estadisticas_evidencia3: "",

    // Revisión y Actualización de Conceptos, Variables e Indicadores
    revision_actualizacion_conceptos_variables_indicadores_pregunta: 3,
    revision_actualizacion_conceptos_variables_indicadores_evidencia1: "",
    revision_actualizacion_conceptos_variables_indicadores_evidencia2: "",
    revision_actualizacion_conceptos_variables_indicadores_evidencia3: "",

    // Mejorar la Identificación de Conceptos, Variables e Indicadores
    mejorar_identificacion_conceptos_variables_indicadores_pregunta: "",

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
    console.log("Form 5.5 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 5.5 - Identificación de Conceptos";

  const introductions = [
    "La identificación de conceptos estadísticos es un paso imprescindible para garantizar la coherencia y comparabilidad de los datos generados. Según la NTC PE 1000:2020, esta sección aborda la definición precisa y consensuada de términos, categorías y clasificaciones utilizados en la operación estadística. Este proceso debe alinearse con estándares nacionales e internacionales, asegurando la interoperabilidad y la comprensión homogénea de los resultados."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form5_5Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form5_5;
