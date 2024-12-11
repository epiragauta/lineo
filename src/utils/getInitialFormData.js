// ./src/utils/getInitialFormData.js

export const getInitialFormData = (operationQuestions, sectionQuestions) => {
    let questions =  operationQuestions.reduce((acc, question) => {
         acc[question.name] = question.initialValue;
        return acc;
    }, {});

    questions = {
        ...questions,
        ...sectionQuestions.reduce((acc, question) => {
          switch (question.type) {
            case "evidencias":
              question.fields.forEach((field) => {
                acc[field.name] = field.initialValue;
              });
              break;
            
            case "accionesRequeridas":
              question.fields.forEach((field) => {
                acc[field.name] = field.initialValue;
              });
              break;
            
            default:
              acc[question.name] = question.initialValue;
              break;
          }
          return acc;
        }, {})
    }
    return questions;
  };
  