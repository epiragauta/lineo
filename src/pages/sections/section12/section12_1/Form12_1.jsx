// src/pages/sections/section12/section12_1/Form12_1.jsx

import React from "react";
import { questions12_1 as formQuestions } from "./questions12_1"; 
import { operationQuestions } from "../../../../questions/operationQuestions"; 
import GeneralForm from "../../../../components/GeneralForm"; 
import { getInitialFormData } from "../../../../utils/getInitialFormData"; 

const Form12_1 = ({label, subsection, introductions}) => {
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

export default Form12_1;

