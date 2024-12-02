// ./src/components/FormWrapper.js

import React from "react";
import Divider from "./Divider";
import { Button } from "@material-tailwind/react";
import SectionTitle from "./questions/SectionTitle";

const FormWrapper = ({ mainTitle, introductions, operationQuestions, formQuestions, handleSubmit }) => {
  let questionIndex = 0; // Contador para alternar colores solo en preguntas

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
      {/* Título Principal */}
      <h1 className="text-3xl font-bold mb-6">{mainTitle}</h1>
      
      {/* Introducciones */}
      {introductions.map((intro, index) => (
        <h3 key={index} className="text-xl font-semibold mb-6">
          {intro}
        </h3>
      ))}

      <Divider />

      {/* Operación Estadística */}
      <h3 className="text-xl font-normal mb-6 text-gray-700">Operación Estadística</h3>

      {operationQuestions.map((question, index) => {
        const bgColor = questionIndex % 2 === 0 ? "bg-gray-100" : "bg-primary_light";
        questionIndex++;
        return (
          <div key={index} className={`mb-6 ${bgColor} p-4 border rounded shadow-sm`}>
            {question}
          </div>
        );
      })}

      <Divider />

      {formQuestions.map((question, index) => {
        const isSection =
          React.isValidElement(question) && question.type === SectionTitle;

        if (isSection) {
          // Renderizar la sección sin estilos de fondo
          return (
            <div key={index} className="mb-6">
              {question}
            </div>
          );
        } else {
          // Es una pregunta, aplicar alternancia de colores
          const bgColor =
            questionIndex % 2 === 0
              ? "bg-gray-100 border-primary"
              : "bg-primary_light border-gray-700";
          questionIndex++; // Incrementar el contador solo para preguntas

          return (
            <div key={index} className={`mb-6 ${bgColor} p-4 border rounded shadow-sm`}>
              {question}
            </div>
          );
        }
      })}

      <Divider />

      {/* Botón de Envío */}
      <Button type="submit" className="mt-6 bg-primary text-white">
        Enviar
      </Button>
    </form>
  );
};

export default FormWrapper;
