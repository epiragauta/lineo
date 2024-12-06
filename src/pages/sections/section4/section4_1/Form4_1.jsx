// src/pages/Sections/Section4/Form4_1.jsx

import React from "react";
import { questions4_1 as form4_1Questions } from "./questions4_1"; // Importación del arreglo de componentes
import { operationQuestions } from "../../../../questions/operationQuestions"; // Importación del arreglo de componentes
import GeneralForm from "../../../../components/GeneralForm"; // Import the generic form
import { getInitialFormData } from "../../../../utils/getInitialFormData"; // Import the function to get initial form data

const Form4_1 = ({label, subsection}) => {
  const formId = subsection; // Unique identifier for the form

  const initialFormData = getInitialFormData(operationQuestions, form4_1Questions); // Get initial form data
  
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
