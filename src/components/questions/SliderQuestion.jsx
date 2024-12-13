// ./src/components/questions/SliderQuestion.js

import React from "react";
import Slider from "@mui/material/Slider";
import QuestionLabel from "./QuestionLabel";

const SliderQuestion = ({ label, name, value = 2, onChange, min = 1, max = 5, step = 1 }) => {
  return (
    <div className="mb-6">
      {label && <QuestionLabel label={label} />}
      <div className="flex flex-col gap-2">
        <Slider
          value={value}
          onChange={(event, newValue) => onChange(name, newValue)}
          min={min}
          max={max}
          step={step}
          aria-labelledby={`${name}-slider`}
        />
        <span className="ml-2 text-black">{value}</span>
      </div>
    </div>
  );
};

export default SliderQuestion;
