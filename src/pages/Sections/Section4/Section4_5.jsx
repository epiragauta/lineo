// ./src/pages/Sections/Section4/Formulario4_5.js

import React, { useState, useEffect } from "react";
import { questions4_5 as form4_5Questions } from "./../../../questions/questions4/questions4_5"; // Importación del arreglo de preguntas 4.5
import { operationQuestions } from "./../../../questions/operation_questions"; // Importación del arreglo de preguntas de operación
import FormWrapper from "../../../components/FormWrapper"; // Asegúrate de tener este componente

const Formulario4_5 = () => {
  const [formData, setFormData] = useState({
    // Preguntas de 4.5

    // Determinación y Provisión de Personal
    determinacion_provision_personal_pregunta: "",
    determinacion_provision_personal_evidencia1: "",
    determinacion_provision_personal_evidencia2: "",
    determinacion_provision_personal_evidencia3: "",

    // Competencia del Personal
    competencia_personal_pregunta1: "",
    competencia_personal_pregunta2: "",
    competencia_personal_evidencia1: "",
    competencia_personal_evidencia2: "",
    competencia_personal_evidencia3: "",

    // Efectividad en el Mantenimiento de Registros
    efectividad_mantenimiento_registros_pregunta: 3,
    efectividad_mantenimiento_registros_evidencia1: "",
    efectividad_mantenimiento_registros_evidencia2: "",
    efectividad_mantenimiento_registros_evidencia3: "",

    // Implementación de Acciones de Entrenamiento
    implementacion_acciones_entrenamiento_pregunta: 3,
    implementacion_acciones_entrenamiento_evidencia1: "",
    implementacion_acciones_entrenamiento_evidencia2: "",
    implementacion_acciones_entrenamiento_evidencia3: "",

    // Cumplimiento de Perfiles
    cumplimiento_perfiles_pregunta: 3,
    cumplimiento_perfiles_evidencia1: "",
    cumplimiento_perfiles_evidencia2: "",
    cumplimiento_perfiles_evidencia3: "",

    // Sugerencias para Personal del Proceso Estadístico
    sugerencias_personal_proceso_estadistico_pregunta: "",

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
    console.log("Formulario 4.5 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 4.5 - Personal del Proceso Estadístico";

  const introductions = [
    "El personal involucrado en el proceso estadístico desempeña un rol fundamental en la implementación efectiva de los lineamientos de la NTC PE 1000:2020. Esta sección aborda los requisitos relacionados con la formación, competencias y asignación de responsabilidades del equipo estadístico. Se enfatiza la necesidad de contar con personal calificado y capacitado, asegurando la correcta ejecución de las actividades estadísticas y promoviendo un enfoque de mejora continua a través de planes de capacitación y evaluación de desempeño."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form4_5Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Formulario4_5;
