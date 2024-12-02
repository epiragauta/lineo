// ./src/components/questions/CheckboxQuestion.js

import React from "react";
import { Checkbox } from "@material-tailwind/react";
import QuestionLabel from "./QuestionLabel";

const CheckboxQuestion = ({ label, name, options, values, onChange }) => {
  return (
    <div className="mb-6">
      {label && <QuestionLabel label={label} />}
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <Checkbox
            key={index}
            name={name}
            label={<span className="text-black font-semibold">{option}</span>}
            value={option}
            onChange={onChange}
            checked={values?.includes(option)}
            color="black"
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxQuestion;
