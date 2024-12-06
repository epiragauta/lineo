// ./src/pages/Sections/Section6/Form6_1.js

import React, { useState } from "react";
import { operationQuestions } from "../../../../questions/operationQuestions";
import { questions6_1 } from "./questions6_1";
import FormWrapper from "../../../../components/FormWrapper";

const Form6_1 = () => {
  const [formData, setFormData] = useState({
    // Preguntas de operación
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

    // Preguntas específicas de la sección 6.1
    verificacion_necesidades_vigencia: "",
    verificacion_brecha_tiempo: "",
    verificacion_necesidades_evidencia1: "",
    verificacion_necesidades_evidencia2: "",
    verificacion_necesidades_evidencia3: "",
    sugerencias_verificacion: "",
    accion: "",
    responsableSNS: "",
    fechaCumplimiento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form 6.1 enviado", formData);
  };

  const mainTitle = "Sección 6.1 - Verificar las Necesidades";

  const introductions = [
    "La verificación de las necesidades es un paso primordial para garantizar que las demandas de información identificadas sean precisas, viables y alineadas con los objetivos de la operación estadística. Según los lineamientos de la NTC PE 1000:2020, esta etapa requiere una revisión sistemática de los requisitos recogidos, asegurando su pertinencia y priorización, además de identificar cualquier posible discrepancia o limitación que deba ser abordada antes del diseño de la operación.",
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange)}
      formQuestions={questions6_1(formData, handleChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form6_1;
