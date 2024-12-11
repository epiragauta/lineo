// ./src/utils/renderQuestions.js

import React from "react";
import {
  SectionTitle,
  RadioQuestion,
  CheckboxQuestion,
  SliderQuestion,
  EvidenciasDocumentales,
  Sugerencias,
  AccionesRequeridas,
  InputQuestion,
  SelectBoxQuestion,
  TextareaQuestion,
} from "../components/questions";

export const renderQuestions = (questions, formData, handleChange, handleSelectChange) => {
  return questions.map((question) => {
    switch (question.type) {
      case "sectionTitle":
        return (
          <SectionTitle key={question.key} title={question.title} />
        );
      case "input":
        return (
          <InputQuestion
            key={question.key}
            label={question.label}
            name={question.name}
            value={formData[question.name]}
            onChange={handleChange}
            placeholder={question.placeholder}
            type={question.type === "date" ? "date" : "text"}
          />
        );
        case "date":
          return (
            <InputQuestion
              key={question.key}
              label={question.label}
              name={question.name}
              value={formData[question.name]}
              onChange={handleChange}
              placeholder={question.placeholder}
              type={question.type === "date" ? "date" : "text"}
            />
          );
      case "select":
        return (
          <SelectBoxQuestion
            key={question.key}
            label={question.label}
            name={question.name}
            value={formData[question.name]}
            onChange={handleSelectChange}
            options={question.options}
          />
        );

      case "textarea":
        return (
          <TextareaQuestion
            key={question.key}
            label={question.label}
            name={question.name}
            value={formData[question.name]}
            onChange={handleChange}
            options={question.options}
          />
        );

      case "radio":
        return (
          <RadioQuestion
            key={question.key}
            label={question.label}
            name={question.name}
            options={question.options}
            value={formData[question.name]}
            onChange={handleChange}
          />
        );

      case "checkbox":
        return (
          <CheckboxQuestion
            key={question.key}
            label={question.label}
            name={question.name}
            options={question.options}
            value={formData[question.name]}
            onChange={handleChange}
          />
        );

      case "slider":
        return (
          <SliderQuestion
            key={question.key}
            label={question.label}
            name={question.name}
            min={question.min}
            max={question.max}
            step={question.step}
            value={formData[question.name]}
            onChange={handleSelectChange}
          />
        );

      case "evidencias":
        return (
          <EvidenciasDocumentales
            key={question.key}
            namePrefix={question.namePrefix}
            formData={formData}
            handleChange={handleChange}
          />
        );

      case "sugerencias":
        return (
          <Sugerencias
            key={question.key}
            label={question.label}
            name={question.name}
            value={formData[question.name]}
            onChange={handleChange}
          />
        );

      case "accionesRequeridas":
        return (
          <AccionesRequeridas
            key={question.key}
            formData={formData}
            handleChange={handleChange}
          />
        );

      default:
        return <div key={question.key}>Tipo de pregunta no reconocido</div>;
    }
  });

};
