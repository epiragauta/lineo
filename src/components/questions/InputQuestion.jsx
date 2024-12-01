// ./src/components/questions/InputQuestion.js

import React from "react";
import { Input } from "@material-tailwind/react";
import QuestionLabel from "./QuestionLabel";

const InputQuestion = ({ label, name, value, onChange, placeholder, type = "text" }) => {
  return (
    <div className="mb-6">
      {label && <QuestionLabel label={label} />}
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        color="black"
      />
    </div>
  );
};

export default InputQuestion;
