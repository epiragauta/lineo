// ./src/components/questions/QuestionLabel.js

import React from "react";

const QuestionLabel = ({ label }) => {
  return (
    <label className="block text-lg font-medium mb-2 text-black">
      {label}
    </label>
  );
};

export default QuestionLabel;
