// src/pages/sections/section12/section12_2/Form12_2.jsx

import React from "react";
import { questions12_2 as formQuestions } from "./questions12_2"; 
import { operationQuestions } from "../../../../questions/operationQuestions"; 
import GeneralForm from "../../../../components/GeneralForm"; 
import { getInitialFormData } from "../../../../utils/getInitialFormData"; 

const Form12_2 = ({label, subsection, introductions}) => {
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

export default Form12_2;

