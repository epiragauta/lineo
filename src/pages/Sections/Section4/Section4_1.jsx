// ./../../../components/Formulario.js

import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { questions as operationQuestions } from "./../../../questions/operation_questions";
import { questions4_1 as form4_1Questions } from "./../../../questions/questions4/questions4_1";
import Divider from "./../../../components/Divider";

const Formulario = () => {
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
    // Preguntas 4.1
    // Responsabilidad de Proporcionar Recursos
    respRecursosPregunta1: "",
    respRecursosPregunta2: [],
    respRecursosEvidencia1: "",
    respRecursosEvidencia2: "",
    respRecursosEvidencia3: "",
    // Responsabilidad en la Mejora del Proceso Estadístico
    respMejoraPregunta1: "",
    respMejoraPregunta2a: 3,
    respMejoraPregunta2b: 3,
    respMejoraPregunta2c: 3,
    respMejoraPregunta2d: 3,
    respMejoraPregunta2e: 3,
    respMejoraPregunta2f: 3,
    respMejoraEvidencia1: "",
    respMejoraEvidencia2: "",
    respMejoraEvidencia3: "",
    // Asignación y Comunicación de Roles y Responsabilidades
    asignacionPregunta1: "",
    asignacionPregunta2: [],
    asignacionEvidencia1: "",
    asignacionEvidencia2: "",
    asignacionEvidencia3: "",
    // Evaluación de la Responsabilidad de la Alta Dirección
    evaluacionPregunta1: 3,
    evaluacionEvidencia1: "",
    evaluacionEvidencia2: "",
    evaluacionEvidencia3: "",
    // Sugerencias
    sugerenciasComentario: "",
    // Acciones requeridas
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
    console.log("Formulario enviado", formData);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  const questionsArray = [
    ...operationQuestions(formData, handleChange),
    ...form4_1Questions(formData, handleChange),
  ];

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-6">
        Sección 4.1: Requisitos de la Alta Dirección
      </h1>
      <h3 className="text-xl font-semibold mb-6">
        La Alta Dirección desempeña un papel fundamental en la implementación de la Norma Técnica de Calidad del Proceso Estadístico (NTC PE). Esta subsección destaca la necesidad de un liderazgo comprometido para establecer directrices estratégicas que impulsen la calidad estadística. Se subrayan responsabilidades como la asignación adecuada de recursos, la promoción de una cultura organizacional orientada a la calidad, y la garantía del cumplimiento de los principios éticos y legales asociados al proceso estadístico.
      </h3>
      <Divider />
      <h3 className="text-xl font-normal mb-6 text-gray-700">
        Operación Estadística
      </h3>

      {questionsArray.map((question, index) => (
        <div key={index} className="mb-6">
          {question.type === "section" ? (
            <h3 className="text-xl font-semibold mb-4">{question.label}</h3>
          ) : (
            <div className="p-4 border border-gray-300 rounded shadow-sm bg-gray-100">
              {question.label && (
                <label className="block text-lg font-medium mb-2">
                  {question.label}
                </label>
              )}
              {question.component}
            </div>
          )}
        </div>
      ))}

      <Divider />

      <Button type="submit" className="mt-6 bg-primary text-white">
        Enviar
      </Button>
    </form>
  );
};

export default Formulario;
