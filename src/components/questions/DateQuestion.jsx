// ./src/components/questions/DateQuestion.js

import React from "react";
import { Input } from "@material-tailwind/react";

const DateQuestion = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-6">
      {label && <QuestionLabel label={label} />}
      <Input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        color="black"
      />
    </div>
  );
};

export default DateQuestion;
