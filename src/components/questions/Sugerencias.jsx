// ./src/components/questions/Sugerencias.js

import React from "react";
import TextAreaQuestion from "./TextareaQuestion";
import QuestionLabel from "./QuestionLabel";

const Sugerencias = ({ label, name, value, handleChange }) => {
  return (
    <div className="mb-6">
      <QuestionLabel label={label} />
      <TextAreaQuestion
        name={name}
        value={value}
        onChange={handleChange}
        placeholder="Ingrese su sugerencia o comentario"
        rows={4}
      />
    </div>
  );
};

export default Sugerencias;
