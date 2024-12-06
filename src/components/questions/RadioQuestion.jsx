// ./src/components/questions/RadioQuestion.js

import React from "react";
import { Radio } from "@material-tailwind/react";
import QuestionLabel from "./QuestionLabel";

const RadioQuestion = ({ label, name, options, value, onChange }) => {
  return (
    <div className="mb-6">
      {label && <QuestionLabel label={label} />}
      <div className="flex gap-4">
      {options.map((option, index) =>
      index === 0 ? (
        <Radio
          key={index}
          name={name}
          label={<span className="text-black font-semibold">{option}</span>}
          value={index}
          onChange={onChange}
          color="black"
          defaultChecked
        />
      ) : (
        <Radio
          key={index}
          name={name}
          label={<span className="text-black font-semibold">{option}</span>}
          value={index}
          onChange={onChange}
          color="black"
        />
      )
    )}
      </div>
    </div>
  );
};

export default RadioQuestion;
