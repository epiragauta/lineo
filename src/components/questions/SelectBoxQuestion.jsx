// ./src/components/questions/SelectBoxQuestion.js

import React from "react";
import { Select, Option } from "@material-tailwind/react";
import QuestionLabel from "./QuestionLabel";

const SelectBoxQuestion = ({ label, name, value, onChange, options, placeholder }) => {
  return (
    <div className="mb-6">
      {label && <QuestionLabel label={label} />}
      <Select
        name={name}
        value={value}
        onChange={(value) => onChange(name, value)}
        label={placeholder}
        className="text-black"
      >
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectBoxQuestion;
