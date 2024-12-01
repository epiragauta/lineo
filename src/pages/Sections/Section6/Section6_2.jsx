// ./src/pages/Sections/Section6/Formulario6_2.js

import React, { useState } from "react";
import { operationQuestions } from "../../../questions/operation_questions";
import { questions6_2 } from "../../../questions/questions6/questions6_2";
import FormWrapper from "../../../components/FormWrapper";

const Formulario6_2 = () => {
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

    // Preguntas específicas de la sección 6.2
    fuentes_secundarias: "",
    calidad_datos_fuentes: "",
    aspectos_calidad: [],
    fuentes_datos_evidencia1: "",
    fuentes_datos_evidencia2: "",
    fuentes_datos_evidencia3: "",
    sugerencias_fuentes_datos: "",
    accion: "",
    responsableSNS: "",
    fechaCumplimiento: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const currentValues = formData[name] || [];
      setFormData({
        ...formData,
        [name]: checked ? [...currentValues, value] : currentValues.filter((item) => item !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario 6.2 enviado", formData);
  };

  const mainTitle = "Sección 6.2 - Confirmar el Tipo de Fuente de Información";

  const introductions = [
    "Contenido: La confirmación del tipo de fuente de datos constituye un aspecto estratégico en el diseño del proceso estadístico. En el marco de la NTC PE 1000:2020, esta sección aborda la necesidad de validar si las fuentes identificadas (administrativas, censales, muestrales o mixtas) cumplen con los criterios de calidad, oportunidad y representatividad requeridos para responder a las necesidades de información, y si estas son accesibles dentro del marco legal e institucional aplicable.",
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange)}
      formQuestions={questions6_2(formData, handleChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Formulario6_2;
