// ./src/pages/Sections/Section4/Form4_6.js

import React, { useState, useEffect } from "react";
import { operationQuestions } from "./../../../../questions/operation_questions"; // Importación del arreglo de preguntas de operación
import { questions4_6 as form4_6Questions } from "./questions4_6"; // Importación del arreglo de preguntas 4.6
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

const Form4_6 = () => {
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

    // Preguntas 4.6

    // Implementación de Buenas Prácticas Estadísticas
    implementacion_buenas_practicas_pregunta: "",
    implementacion_buenas_practicas_incluye: [],
    implementacion_buenas_practicas_evidencia1: "",
    implementacion_buenas_practicas_evidencia2: "",
    implementacion_buenas_practicas_evidencia3: "",

    // Uso de Estándares Estadísticos
    uso_estandares_estadisticos_pregunta: "",
    uso_estandares_estadisticos_calificacion: 3,
    uso_estandares_estadisticos_evidencia1: "",
    uso_estandares_estadisticos_evidencia2: "",
    uso_estandares_estadisticos_evidencia3: "",

    // Documentación y Aplicación de Estándares
    documentacion_aplicacion_estandares_pregunta: 3,
    documentacion_aplicacion_estandares_evidencia1: "",
    documentacion_aplicacion_estandares_evidencia2: "",
    documentacion_aplicacion_estandares_evidencia3: "",

    // Comparabilidad e Interoperabilidad
    comparabilidad_interoperabilidad_pregunta: 3,
    comparabilidad_interoperabilidad_evidencia1: "",
    comparabilidad_interoperabilidad_evidencia2: "",
    comparabilidad_interoperabilidad_evidencia3: "",

    // Evaluación de Estándares Estadísticos
    evaluacion_estandares_estadisticos_pregunta: 3,
    evaluacion_estandares_estadisticos_evidencia1: "",
    evaluacion_estandares_estadisticos_evidencia2: "",
    evaluacion_estandares_estadisticos_evidencia3: "",

    // Sugerencias para Uso y Aplicación de Lineamientos Estadísticos
    sugerencias_uso_lineamientos_pregunta: "",

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
    console.log("Form 4.6 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "4.6 - Uso y Aplicación de Lineamientos Estadísticos";

  const introductions = [
    "El uso y la aplicación de lineamientos estadísticos son esenciales para la estandarización y la calidad de los productos generados. La NTC PE 1000:2020, establece la necesidad de adoptar normas, metodologías y buenas prácticas reconocidas que garanticen la consistencia, comparabilidad y utilidad de los datos. La implementación rigurosa de estos lineamientos asegura la alineación con estándares nacionales e internacionales, fortaleciendo la credibilidad del proceso estadístico."
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(formData, handleChange, handleSelectChange)}
      formQuestions={form4_6Questions(formData, handleChange, handleSelectChange)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form4_6;
