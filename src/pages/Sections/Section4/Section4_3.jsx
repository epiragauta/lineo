// ./src/pages/Sections/Section4/Formulario4_3.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../questions/operation_questions"; // Importación del arreglo de preguntas de operación
import { questions4_3 as form4_3Questions } from "./../../../questions/questions4/questions4_3"; // Importación del arreglo de preguntas 4.3
import FormWrapper from "../../../components/FormWrapper"; // Asegúrate de tener este componente

const Formulario4_3 = () => {
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

    // Preguntas 4.3
    confidencialidad_mecanismos: "",
    confidencialidad_evidencia1: "",
    confidencialidad_evidencia2: "",
    confidencialidad_evidencia3: "",
    conservacion_segura: "",
    conservacion_evidencia1: "",
    conservacion_evidencia2: "",
    conservacion_evidencia3: "",
    efectividad_conservacion: 3,
    efectividad_evidencia1: "",
    efectividad_evidencia2: "",
    efectividad_evidencia3: "",
    cumplimiento_normatividad: 3,
    cumplimiento_evidencia1: "",
    cumplimiento_evidencia2: "",
    cumplimiento_evidencia3: "",
    prevencion_acceso_perdida: "",
    prevencion_evidencia1: "",
    prevencion_evidencia2: "",
    prevencion_evidencia3: "",
    sugerencias_confidencialidad: "",
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
    console.log("Formulario 4.3 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 4.3 - Confidencialidad y Conservación de Datos";

  const introductions = [
    "Introducción",
    "Esta sección aborda los mecanismos implementados por la entidad para garantizar la confidencialidad y la conservación segura de los datos recolectados. Se enfoca en asegurar que la información estadística producida se maneje conforme a la normatividad vigente y los principios fundamentales establecidos por las Naciones Unidas.",
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form4_3Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Formulario4_3;
