// ./src/pages/Sections/Section4/Form4_4.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../../questions/operation_questions"; // Importación del arreglo de preguntas de operación
import { questions4_4 as form4_4Questions } from "./questions4_4"; // Importación del arreglo de preguntas 4.4
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form4_4 = () => {
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

    // Preguntas 4.4
    documentacion_metodologica_pregunta: "",
    documentacion_metodologica_incluye: [],
    disponibilidad_documentacion_pregunta: "",
    disponibilidad_documentacion_evidencia1: "",
    disponibilidad_documentacion_evidencia2: "",
    disponibilidad_documentacion_evidencia3: "",
    conservacion_evidencia_pregunta: 3,
    conservacion_evidencia_evidencia1: "",
    conservacion_evidencia_evidencia2: "",
    conservacion_evidencia_evidencia3: "",
    identificacion_descripcion_pregunta: 3,
    identificacion_descripcion_evidencia1: "",
    identificacion_descripcion_evidencia2: "",
    identificacion_descripcion_evidencia3: "",
    control_proteccion_pregunta: "",
    control_proteccion_evidencia1: "",
    control_proteccion_evidencia2: "",
    control_proteccion_evidencia3: "",
    sugerencias_informacion_documentada_pregunta: "",
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
    console.log("Form 4.4 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 4.4. - Información Documentada del Proceso Estadístico";

  const introductions = [
    "Introducción",
    "La información documentada constituye la base para garantizar la trazabilidad, transparencia y reproducibilidad del proceso estadístico. Esta sección detalla los requisitos para registrar y organizar toda la documentación relacionada con las actividades estadísticas, incluidas las metodologías, procedimientos, flujos de trabajo y decisiones tomadas. Esta información no solo debe ser accesible y comprensible, sino que también debe mantenerse actualizada, permitiendo evaluaciones técnicas y auditorías que aseguren el cumplimiento de los estándares establecidos.",
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form4_4Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form4_4;
