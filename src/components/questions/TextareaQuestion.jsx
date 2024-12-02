// ./src/components/questions/TextAreaQuestion.js

import React from "react";
import { Textarea } from "@material-tailwind/react";
import QuestionLabel from "./QuestionLabel";

const TextareaQuestion = ({ label, name, value, onChange, placeholder, rows = 4 }) => {
  return (
    <div className="mb-6">
      {label && <QuestionLabel label={label} />}
      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        color="black"
        rows={rows}
      />
    </div>
  );
};

export default TextareaQuestion;
