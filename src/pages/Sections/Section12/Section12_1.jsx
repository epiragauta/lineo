import React, { useState } from "react";
import { operationQuestions } from "./../../../questions/operation_questions";
import { questions12_1 as form12_1Questions } from "./../../../questions/questions12/questions12_1";
import FormWrapper from "../../../components/FormWrapper";

const Formulario12_1 = () => {
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
    console.log("Formulario 12.1 enviado", formData);
  };

  const mainTitle = "Sección 12.1 - Análisis de la evaluación del desempeño";

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

export default Formulario12_1;