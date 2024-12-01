import React, { useState } from "react";
import { operationQuestions } from "../../../questions/operation_questions";
import { questions6_3 } from "../../../questions/questions6/questions6_3";
import FormWrapper from "../../../components/FormWrapper";

const Formulario6_3 = () => {
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

    // Preguntas específicas de la sección 6.3
    alcance_tematico: "",
    marco_teorico: "",
    marco_conceptual: "",
    marco_legal: "",
    referentes_internacionales: "",
    nomenclaturas_clasificaciones: "",
    clasificaciones_documentadas: "",
    conceptos_estandarizados: "",
    justificacion_no_considerados: "",
    variables_indicadores: "",
    instrumento_recoleccion: "",
    acciones_minimizar_desgaste: "",
    evidencias: ["", "", ""],
    sugerencias: "",
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
    console.log("Formulario 6.3 enviado", formData);
  };

  const mainTitle = "Sección 6.3 - Diseño Temático";

  const introductions = [
    "El diseño temático define los temas y variables centrales de la operación estadística, estableciendo el alcance conceptual y el marco lógico para la recolección y análisis de datos.",
    "De acuerdo con la NTC PE 1000:2020, esta sección detalla los procedimientos para seleccionar y estructurar los temas relevantes, garantizando que estén alineados con las necesidades identificadas y se ajusten a clasificaciones y estándares internacionales.",
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange)}
      formQuestions={questions6_3(formData, handleChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Formulario6_3;