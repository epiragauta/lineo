import React, { useState } from "react";
import { operationQuestions } from "./../../../../questions/operation_questions";
import { questions12_4 as form12_1Questions } from "./questions12_4";
import FormWrapper from "../../../../components/FormWrapper";

const Form12_4 = () => {
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

    // Preguntas 12.1
    evaluacion_fases_proceso: "",
    revision_diseno_proceso: "",
    revision_aspectos: [],
    documentacion_resultados_acciones: "",
    evaluacion_final_proceso: "",
    evaluacion_final_incluye: "",
    analisis_resultados_seguimiento: "",
    sugerencias_fuente_datos: "",
    doc1: "",
    doc2: "",
    doc3: "",
    accion: "",
    responsableSNS: "",
    fechaCumplimiento: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form 12.4 enviado", formData);
  };

  const mainTitle = "Sección 12.4 - Análisis de la evaluación del desempeño";

  const introductions = [
    "La evaluación del desempeño de la norma técnica estadística es un proceso esencial para garantizar la efectividad y la calidad de las operaciones estadísticas. De acuerdo con los lineamientos establecidos en la NTC PE 1000:2020, esta fase implica un análisis exhaustivo de la implementación de la norma, evaluando su impacto en la calidad de los datos y su alineación con los objetivos establecidos. La evaluación debe incluir la identificación de fortalezas y áreas de mejora, permitiendo ajustar y optimizar los procedimientos estadísticos, a fin de asegurar que los resultados sean consistentes, confiables y pertinentes para la toma de decisiones."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange)}
      formQuestions={form12_1Questions(formData, handleChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form12_4;