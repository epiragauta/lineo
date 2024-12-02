// ./src/pages/Sections/Section4/Formulario4_7.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../questions/operation_questions"; // Importación del arreglo de preguntas de operación
import { questions4_7 as form4_7Questions } from "./../../../questions/questions4/questions4_7"; // Importación del arreglo de preguntas 4.7
import FormWrapper from "../../../components/FormWrapper"; // Asegúrate de tener este componente

const Formulario4_7 = () => {
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

    // Preguntas 4.7

    // Identificación de Riesgos
    identificacion_riesgos_pregunta: "",
    identificacion_riesgos_detalle_a: "",
    identificacion_riesgos_detalle_b: "",
    identificacion_riesgos_detalle_c: "",
    identificacion_riesgos_evidencia1: "",
    identificacion_riesgos_evidencia2: "",
    identificacion_riesgos_evidencia3: "",

    // Implementación de controles
    implementacion_controles_pregunta: "",
    implementacion_controles_utiliza: [],
    implementacion_controles_evidencia1: "",
    implementacion_controles_evidencia2: "",
    implementacion_controles_evidencia3: "",

    // Acciones ante la Materialización de Riesgos
    acciones_materializacion_riesgos_pregunta: 3,
    acciones_materializacion_riesgos_evidencia1: "",
    acciones_materializacion_riesgos_evidencia2: "",
    acciones_materializacion_riesgos_evidencia3: "",

    // Riesgos y Controles
    riesgos_controles_pregunta: 3,
    riesgos_controles_evidencia1: "",
    riesgos_controles_evidencia2: "",
    riesgos_controles_evidencia3: "",

    // Revisión y Actualización de Riesgos
    revision_actualizacion_riesgos_pregunta: 3,
    revision_actualizacion_riesgos_evidencia1: "",
    revision_actualizacion_riesgos_evidencia2: "",
    revision_actualizacion_riesgos_evidencia3: "",

    // Sugerencias para Gestión de los Riesgos
    sugerencias_gestion_riesgos_pregunta: "",

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
    console.log("Formulario 4.7 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 4.7 - Gestión de los Riesgos";

  const introductions = [
    "La gestión de riesgos en el proceso estadístico es un componente crítico para anticipar, mitigar y controlar posibles eventos que puedan comprometer la calidad, integridad o continuidad del proceso. En el marco de la NTC PE 1000:2020, esta sección establece directrices para identificar, evaluar y gestionar los riesgos asociados a todas las fases del proceso estadístico. Se promueve un enfoque preventivo que integre controles y medidas correctivas, asegurando la sostenibilidad y robustez de las actividades estadísticas."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form4_7Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Formulario4_7;
