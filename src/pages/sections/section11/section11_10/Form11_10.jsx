// src/pages/sections/section11/section11_10/Form11_10.jsx

import React from "react";
import { questions11_10 as formQuestions } from "./questions11_10"; 
import { operationQuestions } from "../../../../questions/operationQuestions"; 
import GeneralForm from "../../../../components/GeneralForm"; 
import { getInitialFormData } from "../../../../utils/getInitialFormData"; 

const Form11_10 = ({label, subsection, introductions}) => {
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

export default Form11_10;

