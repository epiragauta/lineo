// ./src/pages/Sections/Section4/Form4_1.js

import React, { useContext } from "react";
import { questions4_1 as form4_1Questions } from "./questions4_1"; // Importación del arreglo de componentes
import { operationQuestions } from "../../../../questions/operation_questions"; // Importación del arreglo de componentes
import FormWrapper from "../../../../components/FormWrapper"; // Asegúrate de tener este componente

import useFormPersistence from "../../../../hooks/useFormPersistence";
import { AuthContext } from "../../../../context/AuthContext";

const Form4_1 = () => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const userId = user ? user.id : null;

  const localStorageKey = "Form4_1";

  const [formData, setFormData] = useFormPersistence(
    localStorageKey,
    {
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
      respRecursosPregunta1: "",
      respRecursosPregunta2: [],
      respRecursosEvidencia1: "",
      respRecursosEvidencia2: "",
      respRecursosEvidencia3: "",
      respMejoraPregunta1: "",
      evaluacionPregunta1: 3,
      respMejoraEvidencia1: "",
      respMejoraEvidencia2: "",
      respMejoraEvidencia3: "",
      asignacionPregunta1: "",
      asignacionPregunta2: [],
      asignacionEvidencia1: "",
      asignacionEvidencia2: "",
      asignacionEvidencia3: "",
      evaluacionPregunta2: 3,
      evaluacionEvidencia1: "",
      evaluacionEvidencia2: "",
      evaluacionEvidencia3: "",
      sugerenciasComentario: "",
      accion: "",
      responsableSNS: "",
      fechaCumplimiento: "",
    },
    userId
  );

  // Función para manejar cambios en inputs de tipo texto, radio y checkbox
  const handleChange = (e) => {
    console.log("e", e.target);
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

  // Función para manejar cambios en sliders
  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form 4.1 enviado", formData);
    // Aquí puedes agregar la lógica para enviar el Form, por ejemplo, una petición POST a tu backend
  };

  const mainTitle = "Sección 4.1 - Responsabilidades de la Alta Dirección";

  const introductions = [
    "Introducción",
    "La Alta Dirección desempeña un papel fundamental en la implementación de la Norma Técnica de Calidad del Proceso Estadístico (NTC PE). Esta subsección destaca la necesidad de un liderazgo comprometido para establecer directrices estratégicas que impulsen la calidad estadística. Se subrayan responsabilidades como la asignación adecuada de recursos, la promoción de una cultura organizacional orientada a la calidad, y la garantía del cumplimiento de los principios éticos y legales asociados al proceso estadístico.",
  ];

  return (
    <FormWrapper
      mainTitle={mainTitle}
      introductions={introductions}
      operationQuestions={operationQuestions(
        formData,
        handleChange,
        handleSelectChange
      )}
      formQuestions={form4_1Questions(
        formData,
        handleChange,
        handleSelectChange
      )}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form4_1;
