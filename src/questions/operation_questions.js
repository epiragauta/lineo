// ./../../../questions/operation_questions.js

import React from "react";
import RadioQuestion from "../components/questions/RadioQuestion";
import InputQuestion from "../components/questions/InputQuestion";
import SelectBoxQuestion from "../components/questions/SelectBoxQuestion";

export const operationQuestions = (formData, handleChange, handleSelectChange) => [
  <InputQuestion
    key="nombreOperacion"
    label="Nombre de la Operación Estadística"
    name="nombreOperacion"
    value={formData.nombreOperacion}
    onChange={handleChange}
    placeholder="Ingrese el nombre"
  />,
  <SelectBoxQuestion
    key="dependencia"
    label="Dependencia Encargada"
    name="dependencia"
    value={formData.dependencia}
    onChange={handleSelectChange}
    options={[
      { value: "direccion", label: "Dirección de Innovación y Desarrollo" },
      { value: "subdireccion", label: "Subdirección de Analítica" },
      { value: "ti", label: "Subdirección de TI" },
      { value: "interno", label: "Control Interno" },
      { value: "metodologia", label: "Subdirección de Metodología" },
    ]}
  />,
  <RadioQuestion
    key="registroAdmin"
    label="Categorización como Registro Administrativo"
    name="registroAdmin"
    options={["Sí", "No"]}
    value={formData.registroAdmin}
    onChange={handleChange}
  />,
  <InputQuestion
    key="objetivo"
    label="Objetivo de la Operación"
    name="objetivo"
    value={formData.objetivo}
    onChange={handleChange}
    placeholder="Describe el objetivo"
  />,
  <InputQuestion
    key="poblacion"
    label="Población Objetivo"
    name="poblacion"
    value={formData.poblacion}
    onChange={handleChange}
    placeholder="Describe la población objetivo"
  />,
  <InputQuestion
    key="anioInicio"
    label="Año de Inicio"
    name="anioInicio"
    type="date"
    value={formData.anioInicio}
    onChange={handleChange}
  />,
  <SelectBoxQuestion
    key="areaTematica"
    label="Área Temática"
    name="areaTematica"
    value={formData.areaTematica}
    onChange={handleSelectChange}
    options={[
      { value: "economica", label: "Económica" },
      { value: "sociodemografica", label: "Sociodemográfica" },
      { value: "ambiental", label: "Ambiental" },
    ]}
  />,
  <InputQuestion
    key="periodicidad"
    label="Periodicidad de la Operación Estadística"
    name="periodicidad"
    value={formData.periodicidad}
    onChange={handleChange}
    placeholder="Ejemplo: Mensual, Anual"
  />,
  <SelectBoxQuestion
    key="unidadEstudio"
    label="Unidades de Estudio"
    name="unidadEstudio"
    value={formData.unidadEstudio}
    onChange={handleSelectChange}
    options={[
      { value: "Personas", label: "Personas" },
      { value: "IPS", label: "IPS" },
      { value: "EAPB", label: "EAPB" },
      { value: "Otras", label: "Otras" },
    ]}
  />,
  <InputQuestion
    key="variablesPrincipales"
    label="Variables Principales"
    name="variablesPrincipales"
    value={formData.variablesPrincipales}
    onChange={handleChange}
    placeholder="Ingrese sugerencias"
  />,
  <InputQuestion
    key="coberturaGeografica"
    label="Cobertura Geográfica"
    name="coberturaGeografica"
    value={formData.coberturaGeografica}
    onChange={handleChange}
    placeholder="Ingrese cobertura geográfica"
  />,
  <InputQuestion
    key="periodoReferencia"
    label="Período de Referencia"
    name="periodoReferencia"
    value={formData.periodoReferencia}
    onChange={handleChange}
    placeholder="Ingrese período de referencia"
  />,
  <InputQuestion
    key="metodoRecoleccion"
    label="Método de Recolección de Información"
    name="metodoRecoleccion"
    type="text"
    value={formData.metodoRecoleccion}
    onChange={handleChange}
    placeholder="Ingrese método de recolección"
  />,
];


// export default operationQuestions;