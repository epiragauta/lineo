// ./src/questions/questions5/questions5_3.js

import React from "react";
import { 
    SectionTitle,
    RadioQuestion,
    CheckboxQuestion,
    SliderQuestion,
    TextareaQuestion, // Asegúrate de que este componente exista o usa Sugerencias si es apropiado
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
} from "../../../../components/questions";

export const questions5_3 = (formData, handleChange, handleSelectChange) => [

  // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-5-3"
//     title="Sección 5.3 - Relevancia de los Resultados de la Operación Estadística para la Política Pública"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-5-3"
//     title="Introducción"
//   />,

//   // Texto de Introducción
//   <div key="texto-introduccion-5-3">
//     <p>
//       La relevancia de los resultados de la operación estadística radica en su capacidad de influir en la formulación, seguimiento y evaluación de políticas públicas. De acuerdo con la NTC PE 1000:2020, esta sección destaca la importancia de vincular los objetivos y resultados estadísticos con los marcos de política pública existentes, asegurando que los datos generados contribuyan efectivamente a la toma de decisiones basadas en evidencia. Esto exige un análisis detallado del contexto institucional y de las prioridades estratégicas de la entidad y del país.
//     </p>
//   </div>,

  // Subtítulo: Identificación de Relevancia
  <SectionTitle
    key="identificacion_relevancia"
    title="Identificación de Relevancia"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="identificacion_relevancia_pregunta"
    label="¿La dependencia encargada de la operación estadística identifica y documenta adecuadamente la relevancia de la operación estadística y su relación con la política pública?"
    name="identificacion_relevancia_pregunta"
    options={["Sí", "No"]}
    value={formData.identificacion_relevancia_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Checkbox Condicional
  <CheckboxQuestion
    key="identificacion_relevancia_evidencia"
    label="Si la respuesta es Sí, la relevancia está evidenciada a través de:"
    name="identificacion_relevancia_evidencia"
    options={[
      "Leyes, decretos, resoluciones",
      "Plan Nacional de Desarrollo",
      "Documentos del CONPES",
      "Planes de Desarrollo Territoriales",
      "Acuerdos internacionales",
      "Plan Estadístico Nacional",
      "Documentos de política pública"
    ]}
    values={formData.identificacion_relevancia_evidencia || []}
    onChange={handleChange}
    subLabels={[
      "a) Leyes, decretos, resoluciones",
      "b) Plan Nacional de Desarrollo",
      "c) Documentos del CONPES",
      "d) Planes de Desarrollo Territoriales",
      "e) Acuerdos internacionales",
      "f) Plan Estadístico Nacional",
      "g) Documentos de política pública"
    ]}
  />,

  // Evidencias Documentales para Identificación de Relevancia
  <EvidenciasDocumentales
    key="identificacion_relevancia_evidencias"
    namePrefix="identificacion_relevancia"
    evidencias={[
      formData.identificacion_relevancia_evidencia1,
      formData.identificacion_relevancia_evidencia2,
      formData.identificacion_relevancia_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Documentación de Relevancia
  <SectionTitle
    key="documentacion_relevancia"
    title="Documentación de Relevancia"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="documentacion_relevancia_pregunta"
    label="¿La dependencia encargada de la operación estadística evidencia la relevancia de la información estadística en términos de su importancia para el país?"
    name="documentacion_relevancia_pregunta"
    options={["Sí", "No"]}
    value={formData.documentacion_relevancia_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Range Condicional
  <SliderQuestion
    key="documentacion_relevancia_calificacion"
    label="Si la respuesta es Sí, califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en identificar y documentar la relevancia de la operación estadística en relación con la política pública?"
    name="documentacion_relevancia_calificacion"
    value={formData.documentacion_relevancia_calificacion}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Documentación de Relevancia
  <EvidenciasDocumentales
    key="documentacion_relevancia_evidencias"
    namePrefix="documentacion_relevancia"
    evidencias={[
      formData.documentacion_relevancia_evidencia1,
      formData.documentacion_relevancia_evidencia2,
      formData.documentacion_relevancia_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Evaluación de Relación con Políticas
  <SectionTitle
    key="evaluacion_relacion_politicas"
    title="Evaluación de Relación con Políticas"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="evaluacion_relacion_politicas_pregunta"
    label="Califique (1-5) ¿En qué medida la dependencia encargada de la operación estadística asegura que los resultados de la operación estadística están alineados con las políticas públicas establecidas?"
    name="evaluacion_relacion_politicas_pregunta"
    value={formData.evaluacion_relacion_politicas_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Evaluación de Relación con Políticas
  <EvidenciasDocumentales
    key="evaluacion_relacion_politicas_evidencias"
    namePrefix="evaluacion_relacion_politicas"
    evidencias={[
      formData.evaluacion_relacion_politicas_evidencia1,
      formData.evaluacion_relacion_politicas_evidencia2,
      formData.evaluacion_relacion_politicas_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Revisión y Actualización de Relevancia
  <SectionTitle
    key="revision_actualizacion_relevancia"
    title="Revisión y Actualización de Relevancia"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="revision_actualizacion_relevancia_pregunta"
    label="¿Cómo evalúa la dependencia encargada de la operación estadística la revisión y actualización de la relevancia de los resultados de la operación estadística en función de cambios en las políticas públicas?"
    name="revision_actualizacion_relevancia_pregunta"
    options={["Sí", "No"]}
    value={formData.revision_actualizacion_relevancia_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Textarea Condicional
  <TextareaQuestion
    key="revision_actualizacion_relevancia_descripcion"
    label="Si la respuesta es Sí, ¿qué mecanismos se utilizan para esta revisión? (Describa brevemente)"
    name="revision_actualizacion_relevancia_descripcion"
    value={formData.revision_actualizacion_relevancia_descripcion}
    onChange={handleChange}
    placeholder="Describa brevemente los mecanismos utilizados..."
    rows={4}
  />,

  // Evidencias Documentales para Revisión y Actualización de Relevancia
  <EvidenciasDocumentales
    key="revision_actualizacion_relevancia_evidencias"
    namePrefix="revision_actualizacion_relevancia"
    evidencias={[
      formData.revision_actualizacion_relevancia_evidencia1,
      formData.revision_actualizacion_relevancia_evidencia2,
      formData.revision_actualizacion_relevancia_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Sugerencias para Mejorar la Relevancia de las Operaciones Estadísticas en la Política Pública
  <SectionTitle
    key="sugerencias_mejorar_relevancia_operaciones_estadisticas"
    title="Sugerencias para Mejorar la Relevancia de las Operaciones Estadísticas en la Política Pública"
  />,

  // Pregunta de Tipo Textarea
  <Sugerencias
    key="sugerencias_mejorar_relevancia_operaciones_estadisticas_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y evidencia de la relevancia de sus operaciones estadísticas en relación con la política pública?"
    name="sugerencias_mejorar_relevancia_operaciones_estadisticas_pregunta"
    value={formData.sugerencias_mejorar_relevancia_operaciones_estadisticas_pregunta}
    onChange={handleChange}
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_5-3"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_5-3"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
