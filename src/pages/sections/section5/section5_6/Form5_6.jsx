// ./src/pages/Sections/Section5/Form5_6.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../../questions/operation_questions"; // Asegúrate de tener este archivo si aplica
import { questions5_6 as form5_6Questions } from "./questions5_6"; // Importación del arreglo de preguntas 5.6
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form5_6 = () => {
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

    // Preguntas 5.6

    // Verificación de Existencia de Información Estadística
    verificacion_existencia_info_estadistica_pregunta: "",
    evita_produccion_informacion_duplica_pregunta: "",
    verificacion_existencia_info_estadistica_evidencia1: "",
    verificacion_existencia_info_estadistica_evidencia2: "",
    verificacion_existencia_info_estadistica_evidencia3: "",

    // Determinación de Fuentes de Datos
    determinacion_fuentes_datos_pregunta: "",
    fuentes_datos_utiliza: [],
    determinacion_fuentes_datos_evidencia1: "",
    determinacion_fuentes_datos_evidencia2: "",
    determinacion_fuentes_datos_evidencia3: "",

    // Comprobación de Archivos de Datos
    comprobacion_archivos_datos_identificacion_interaccion_pregunta: 3,
    comprobacion_archivos_datos_utilidad_variables_pregunta: 3,
    comprobacion_archivos_datos_homologacion_unidades_pregunta: 3,
    comprobacion_archivos_datos_desagregacion_geografica_pregunta: 3,
    comprobacion_archivos_datos_relevancia_datos_pregunta: 3,
    comprobacion_archivos_datos_alcance_variables_pregunta: 3,
    comprobacion_archivos_datos_ausencia_duplicidad_pregunta: 3,
    comprobacion_archivos_datos_transmision_oportuna_pregunta: 3,
    comprobacion_archivos_datos_capacidades_tecnologicas_pregunta: 3,
    comprobacion_archivos_datos_confidencialidad_pregunta: 3,
    comprobacion_archivos_datos_evidencia1: "",
    comprobacion_archivos_datos_evidencia2: "",
    comprobacion_archivos_datos_evidencia3: "",

    // Documentación de Comparación y Homologación de Datos
    documentacion_comparacion_homologacion_datos_pregunta: 3,
    documentacion_comparacion_homologacion_datos_evidencia1: "",
    documentacion_comparacion_homologacion_datos_evidencia2: "",
    documentacion_comparacion_homologacion_datos_evidencia3: "",

    // Evaluación de la Metodología Basada en Disponibilidad de Datos
    evaluacion_metodologia_disponibilidad_datos_pregunta: "",
    evaluacion_metodologia_disponibilidad_datos_evidencia1: "",
    evaluacion_metodologia_disponibilidad_datos_evidencia2: "",
    evaluacion_metodologia_disponibilidad_datos_evidencia3: "",

    // Mejorar la Comprobación de la Disponibilidad de Datos
    mejorar_comprobacion_disponibilidad_datos_pregunta: "",

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
    console.log("Form 5.6 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 5.6 - Comprobación de la Disponibilidad de Datos";

  const introductions = [
    "La comprobación de la disponibilidad de datos resulta fundamental para evaluar la viabilidad técnica de la operación estadística. Esta sección de la NTC PE 1000:2020 establece los procedimientos para identificar, analizar y validar las fuentes de información existentes, determinando si son suficientes, pertinentes y confiables para satisfacer los objetivos planteados. En caso de insuficiencia, se deben diseñar estrategias complementarias de recolección de datos o ajustes en los objetivos de la operación."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form5_6Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form5_6;
