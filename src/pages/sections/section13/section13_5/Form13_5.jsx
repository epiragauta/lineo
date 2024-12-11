// src/pages/sections/section13/section13_5/Form13_5.jsx

import React from "react";
import { questions13_5 as formQuestions } from "./questions13_5"; 
import { operationQuestions } from "../../../../questions/operationQuestions"; 
import GeneralForm from "../../../../components/GeneralForm"; 
import { getInitialFormData } from "../../../../utils/getInitialFormData"; 

const Form13_5 = ({label, subsection, introductions}) => {
  const formId = subsection; 
  const initialFormData = getInitialFormData(operationQuestions, formQuestions);

  return (
    <GeneralForm
      formId={formId}
      label={label}
      initialFormData={initialFormData}
      operationQuestions={operationQuestions}
      formQuestions={formQuestions}
      introductions={introductions}
    />
  );
};

export default Form13_5;

