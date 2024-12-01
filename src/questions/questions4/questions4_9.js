// ./src/questions/questions4/questions4_9.js

import React from "react";
import { 
    SectionTitle,
    RadioQuestion,
    CheckboxQuestion,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
} from "../../components/questions";

export const questions4_9 = (formData, handleChange, handleSelectChange) => [

  // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-4-9"
//     title="Sección 4.9 - Subcontratación para el Desarrollo de la Operación Estadística"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-4-9"
//     title="Introducción"
//   />,

//   // Texto de Introducción
//   <div key="texto-introduccion-4-9">
//     <p>
//       La subcontratación en el contexto del proceso estadístico debe realizarse bajo criterios claros y estrictos que garanticen el cumplimiento de los estándares de calidad definidos por la NTC PE 1000:2020. Esta sección detalla los requisitos para la selección, contratación, supervisión y evaluación de terceros encargados de desarrollar actividades específicas del proceso estadístico. La gestión adecuada de la subcontratación asegura que los resultados se alineen con los objetivos estratégicos y normativos de la operación estadística.
//     </p>
//   </div>,

  // Subtítulo: Definición e Implementación de Controles para Operadores
  <SectionTitle
    key="definicion_implementacion_controles_operadores"
    title="Definición e Implementación de Controles para Operadores"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="definicion_implementacion_controles_operadores_pregunta"
    label="¿La dependencia encargada de la operación estadística define e implementa los controles y acciones necesarios para asegurar que el operador subcontratado cumple con los requisitos establecidos en la norma y en cada iteración del proceso?"
    name="definicion_implementacion_controles_operadores_pregunta"
    options={["Sí", "No"]}
    value={formData.definicion_implementacion_controles_operadores_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Checkbox Condicional
  <CheckboxQuestion
    key="definicion_implementacion_controles_operadores_checkbox"
    label="Si la respuesta es Sí, ¿qué tipo de contratación se realiza con el operador? Seleccione todas las opciones que correspondan."
    name="definicion_implementacion_controles_operadores_contratacion"
    options={[
      "Contrato",
      "Alianza",
      "Convenio",
      "Acuerdo de nivel de servicio",
      "Otro"
    ]}
    values={formData.definicion_implementacion_controles_operadores_contratacion || []}
    onChange={handleChange}
  />,

  // Evidencias Documentales para Definición e Implementación de Controles para Operadores
  <EvidenciasDocumentales
    key="definicion_implementacion_controles_operadores_evidencias"
    namePrefix="definicion_implementacion_controles_operadores"
    evidencias={[
      formData.definicion_implementacion_controles_operadores_evidencia1,
      formData.definicion_implementacion_controles_operadores_evidencia2,
      formData.definicion_implementacion_controles_operadores_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Responsabilidad de la Producción Estadística
  <SectionTitle
    key="responsabilidad_produccion_estadistica"
    title="Responsabilidad de la Producción Estadística"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="responsabilidad_produccion_estadistica_pregunta"
    label="¿La dependencia encargada de la operación estadística mantiene la responsabilidad de la producción estadística aun cuando se subcontrate el desarrollo de fases o la producción total?"
    name="responsabilidad_produccion_estadistica_pregunta"
    options={["Sí", "No"]}
    value={formData.responsabilidad_produccion_estadistica_pregunta}
    onChange={handleChange}
  />,

  // Evidencias Documentales para Responsabilidad de la Producción Estadística
  <EvidenciasDocumentales
    key="responsabilidad_produccion_estadistica_evidencias"
    namePrefix="responsabilidad_produccion_estadistica"
    evidencias={[
      formData.responsabilidad_produccion_estadistica_evidencia1,
      formData.responsabilidad_produccion_estadistica_evidencia2,
      formData.responsabilidad_produccion_estadistica_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Evaluación de la Subcontratación
  <SectionTitle
    key="evaluacion_subcontratacion"
    title="Evaluación de la Subcontratación"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="evaluacion_subcontratacion_pregunta"
    label="Califique (1-5) qué tan efectiva es la dependencia encargada de la operación estadística en la definición e implementación de controles para los operadores subcontratados en el desarrollo de la operación estadística."
    name="evaluacion_subcontratacion_pregunta"
    value={formData.evaluacion_subcontratacion_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Evaluación de la Subcontratación
  <EvidenciasDocumentales
    key="evaluacion_subcontratacion_evidencias"
    namePrefix="evaluacion_subcontratacion"
    evidencias={[
      formData.evaluacion_subcontratacion_evidencia1,
      formData.evaluacion_subcontratacion_evidencia2,
      formData.evaluacion_subcontratacion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Monitoreo de Cumplimiento de Requisitos
  <SectionTitle
    key="monitoreo_cumplimiento_requisitos"
    title="Monitoreo de Cumplimiento de Requisitos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="monitoreo_cumplimiento_requisitos_pregunta"
    label="¿Cómo calificaría (1-5) la dependencia encargada de la operación estadística el monitoreo del cumplimiento de los requisitos por parte de los operadores subcontratados?"
    name="monitoreo_cumplimiento_requisitos_pregunta"
    value={formData.monitoreo_cumplimiento_requisitos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Monitoreo de Cumplimiento de Requisitos
  <EvidenciasDocumentales
    key="monitoreo_cumplimiento_requisitos_evidencias"
    namePrefix="monitoreo_cumplimiento_requisitos"
    evidencias={[
      formData.monitoreo_cumplimiento_requisitos_evidencia1,
      formData.monitoreo_cumplimiento_requisitos_evidencia2,
      formData.monitoreo_cumplimiento_requisitos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Responsabilidad en la Subcontratación
  <SectionTitle
    key="responsabilidad_subcontratacion"
    title="Responsabilidad en la Subcontratación"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="responsabilidad_subcontratacion_pregunta"
    label="¿Cómo evalúa (1-5) la dependencia encargada de la operación estadística su responsabilidad en la producción estadística, incluso cuando se subcontratan fases o la producción total?"
    name="responsabilidad_subcontratacion_pregunta"
    value={formData.responsabilidad_subcontratacion_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Responsabilidad en la Subcontratación
  <EvidenciasDocumentales
    key="responsabilidad_subcontratacion_evidencias"
    namePrefix="responsabilidad_subcontratacion"
    evidencias={[
      formData.responsabilidad_subcontratacion_evidencia1,
      formData.responsabilidad_subcontratacion_evidencia2,
      formData.responsabilidad_subcontratacion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Sugerencias para Subcontratación para el Desarrollo de la Operación Estadística
  <SectionTitle
    key="sugerencias_subcontratacion"
    title="Sugerencias para Subcontratación para el Desarrollo de la Operación Estadística"
  />,

  // Pregunta de Tipo Sugerencias
  <Sugerencias
    key="sugerencias_subcontratacion_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y actualización de los usuarios y sus necesidades de información estadística?"
    name="sugerencias_subcontratacion_pregunta"
    value={formData.sugerencias_subcontratacion_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_4-9"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_4-9"
    accion={formData.accion}
    responsableSNS={formData.responsableSNS}
    fechaCumplimiento={formData.fechaCumplimiento}
    handleChange={handleChange}
  />,
];
