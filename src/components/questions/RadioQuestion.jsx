// ./src/components/questions/RadioQuestion.js

import React from "react";
import QuestionLabel from "./QuestionLabel";
import RadioInput from "./RadioInput";

const RadioQuestion = ({ label, name, options, value, onChange }) => {
  return (
    <div className="mb-6">
      {label && <QuestionLabel label={label} />}
      <div className="flex gap-4">
        <RadioInput
          name={name}
          options={options}
          value={value}
          onChange={onChange} // Pasamos directamente onChange
        />
      </div>
    </div>
  );
};

export default RadioQuestion;
