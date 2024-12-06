// ./src/pages/Sections/Section5/Form5_1.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../../questions/operation_questions"; // Asegúrate de tener este archivo si aplica
import { questions5_1 as form5_1Questions } from "./questions5_1"; // Importación del arreglo de preguntas 5.1
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form5_1 = () => {
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

    // Preguntas 5.1

    // Identificación de Usuarios Relevantes
    identificacion_usuarios_relevantes_pregunta: "",
    identificacion_usuarios_relevantes_detalle: [],
    identificacion_usuarios_relevantes_evidencia1: "",
    identificacion_usuarios_relevantes_evidencia2: "",
    identificacion_usuarios_relevantes_evidencia3: "",

    // Mecanismos de Consulta a Usuarios
    mecanismos_consulta_usuarios_pregunta: "",
    mecanismos_consulta_usuarios_metodos: [],
    mecanismos_consulta_usuarios_evidencia1: "",
    mecanismos_consulta_usuarios_evidencia2: "",
    mecanismos_consulta_usuarios_evidencia3: "",

    // Documentación y Conservación de la Información de Usuarios
    documentacion_conservacion_info_usuarios_pregunta: 3,
    documentacion_conservacion_info_usuarios_evidencia1: "",
    documentacion_conservacion_info_usuarios_evidencia2: "",
    documentacion_conservacion_info_usuarios_evidencia3: "",

    // Identificación y Documentación de Necesidades de Información
    identificacion_documentacion_necesidades_info_pregunta: 3,
    identificacion_documentacion_necesidades_info_evidencia1: "",
    identificacion_documentacion_necesidades_info_evidencia2: "",
    identificacion_documentacion_necesidades_info_evidencia3: "",

    // Revisión y Actualización de Necesidades de Información
    revision_actualizacion_necesidades_info_pregunta: 3,
    revision_actualizacion_necesidades_info_evidencia1: "",
    revision_actualizacion_necesidades_info_evidencia2: "",
    revision_actualizacion_necesidades_info_evidencia3: "",

    // Sugerencias para mejorar la Identificación de Usuarios y Necesidades de Información
    sugerencias_mejorar_identificacion_usuarios_necesidades_info_pregunta: "",

    // Acciones Requeridas
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
    console.log("Form 5.1 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 5.1 - Identificación de Usuarios y Necesidades de Información";

  const introductions = [
    "La identificación de usuarios y sus necesidades de información constituye el punto inicial indispensable para garantizar que las operaciones estadísticas se ajusten a los requerimientos específicos de sus beneficiarios. Según la NTC PE 1000:2020, esta sección describe directrices para reconocer y caracterizar a los usuarios potenciales y sus demandas, priorizando un enfoque participativo y estructurado. Este proceso permite alinear la planeación estadística con las expectativas y los objetivos estratégicos definidos por la entidad productora de estadísticas."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form5_1Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form5_1;
