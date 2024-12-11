// src/pages/sections/section9/section9_3/Form9_3.jsx

import React from "react";
import { questions9_3 as formQuestions } from "./questions9_3"; 
import { operationQuestions } from "../../../../questions/operationQuestions"; 
import GeneralForm from "../../../../components/GeneralForm"; 
import { getInitialFormData } from "../../../../utils/getInitialFormData"; 

const Form9_3 = ({label, subsection, introductions}) => {
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

export default Form9_3;

