// ./src/pages/Sections/Section5/Form5_7.js

import React, { useState } from "react";
import { questions5_7 } from "./questions5_7";
import { operationQuestions } from "./../../../../questions/operation_questions"; // Asegúrate de tener este archivo si aplica
import FormWrapper from "../../../../components/FormWrapper";

const Form5_7 = () => {
  const [formData, setFormData] = useState({
    // Preguntas de Operation (si aplica)
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
    determinacion_documentacion_necesidades_informacion: 3,
    definicion_documentacion_objetivos: 3,
    alcance_tematico_definicion_conceptos: 3,
    formulacion_indicadores_fuentes_datos: 3,
    exploracion_metodologia_metodos_recoleccion: 3,
    infraestructura_pruebas_diseno_construccion: 3,
    elaboracion_cronograma_asignacion_recursos: 3,
    mejorar_plan_general_operacion_pregunta: "",
    
    accion: "",
    responsableSNS: "",
    fechaCumplimiento: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form 5.7 enviado", formData);
  };

  const mainTitle = "Sección 5.7 - Plan General de la Operación Estadística";

  const introductions = [
    "El plan general de la operación estadística, conforme a la NTC PE 1000:2020, es un documento integrador que organiza las actividades, recursos y cronogramas necesarios para desarrollar el proceso estadístico. Esta sección detalla la importancia de definir roles y responsabilidades, establecer controles de calidad y anticipar posibles riesgos o contingencias. Un plan bien estructurado garantiza la coherencia y la eficiencia en todas las fases del proceso, contribuyendo al éxito de la operación estadística."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={questions5_7(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form5_7;
