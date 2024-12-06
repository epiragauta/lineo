// src/pages/Sections/Section4/Form4_1.jsx

import React from "react";
import { questions4_1 as form4_1Questions } from "./questions4_1"; // Importación del arreglo de componentes
import { operationQuestions } from "../../../../questions/operation_questions"; // Importación del arreglo de componentes
import GeneralForm from "../../../../components/GeneralForm"; // Import the generic form

const Form4_1 = ({label, subsection}) => {
  const formId = subsection; // Unique identifier for the form

  const initialFormData = {
    // Initialize all form fields
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

    respRecursosPregunta1: 1,
    respRecursosPregunta2: [],
    respRecursosEvidencia1: "",
    respRecursosEvidencia2: "",
    respRecursosEvidencia3: "",

    respMejoraPregunta1: 1,
    evaluacionPregunta1: 2,
    respMejoraEvidencia1: "",
    respMejoraEvidencia2: "",
    respMejoraEvidencia3: "",

    asignacionPregunta1: 1,
    asignacionPregunta2: [],
    asignacionEvidencia1: "",
    asignacionEvidencia2: "",
    asignacionEvidencia3: "",

    evaluacionPregunta2: 2,
    evaluacionEvidencia1: "",
    evaluacionEvidencia2: "",
    evaluacionEvidencia3: "",

    sugerenciasComentario: "",
    accion: "",
    responsableSNS: "",
    fechaCumplimiento: "",
  };
  
  const introductions = [
    "Introducción",
    "La Alta Dirección desempeña un papel fundamental en la implementación de la Norma Técnica de Calidad del Proceso Estadístico (NTC PE). Esta subsección destaca la necesidad de un liderazgo comprometido para establecer directrices estratégicas que impulsen la calidad estadística. Se subrayan responsabilidades como la asignación adecuada de recursos, la promoción de una cultura organizacional orientada a la calidad, y la garantía del cumplimiento de los principios éticos y legales asociados al proceso estadístico.",
  ];

  return (
    <GeneralForm
      formId={formId}
      label={label}
      initialFormData={initialFormData}
      operationQuestions={operationQuestions}
      formQuestions={form4_1Questions}
      introductions={introductions}
    />
  );
};

export default Form4_1;
