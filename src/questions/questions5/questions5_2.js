// ./src/questions/questions5/questions5_2.js

import React from "react";
import { 
    SectionTitle,
    CheckboxQuestion,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
} from "../../components/questions";

export const questions5_2 = (formData, handleChange, handleSelectChange) => [

//   // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-5-2"
//     title="Sección 5.2 - Análisis de las Necesidades Recogidas"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-5-2"
//     title="Introducción"
//   />,

//   // Texto de Introducción
//   <div key="texto-introduccion-5-2">
//     <p>
//       El análisis de las necesidades recogidas asegura que las demandas identificadas se traduzcan en requisitos técnicos y metodológicos viables. La NTC PE 1000:2020 señala que este análisis debe considerar la factibilidad técnica, la disponibilidad de recursos, el marco normativo y el impacto potencial de la información estadística. Este ejercicio garantiza que las operaciones estén diseñadas para maximizar su pertinencia, utilidad y calidad, de acuerdo con las necesidades detectadas en la fase previa.
//     </p>
//   </div>,

  // Subtítulo: Análisis de las Necesidades Recolectadas
  <SectionTitle
    key="analisis_necesidades_recolectadas"
    title="Análisis de las Necesidades Recolectadas"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="analisis_necesidades_recolectadas_pregunta"
    label="Califique (1-5) ¿En qué medida la entidad analiza adecuadamente las necesidades de los usuarios en función del área temática, el alcance de la operación estadística, la normatividad y los recursos disponibles?"
    name="analisis_necesidades_recolectadas_pregunta"
    value={formData.analisis_necesidades_recolectadas_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Pregunta de Tipo Checkbox
  <CheckboxQuestion
    key="analisis_necesidades_recolectadas_detalle"
    label="Este análisis incluye:"
    name="analisis_necesidades_recolectadas_detalle"
    options={[
      "El área temática de estudio",
      "El alcance previsto para la operación estadística",
      "La normatividad (si aplica)",
      "Los recursos"
    ]}
    values={formData.analisis_necesidades_recolectadas_detalle || []}
    onChange={handleChange}
    subLabels={[
      "a) El área temática de estudio",
      "b) El alcance previsto para la operación estadística",
      "c) La normatividad (si aplica)",
      "d) Los recursos"
    ]}
  />,

  // Evidencias Documentales para Análisis de las Necesidades Recolectadas
  <EvidenciasDocumentales
    key="analisis_necesidades_recolectadas_evidencias"
    namePrefix="analisis_necesidades_recolectadas"
    evidencias={[
      formData.analisis_necesidades_recolectadas_evidencia1,
      formData.analisis_necesidades_recolectadas_evidencia2,
      formData.analisis_necesidades_recolectadas_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Documentación y Conservación de Necesidades Prioritarias
  <SectionTitle
    key="documentacion_conservacion_necesidades_prioritarias"
    title="Documentación y Conservación de Necesidades Prioritarias"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="documentacion_conservacion_necesidades_prioritarias_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la entidad en documentar y conservar las necesidades priorizadas de los usuarios según los criterios establecidos?"
    name="documentacion_conservacion_necesidades_prioritarias_pregunta"
    value={formData.documentacion_conservacion_necesidades_prioritarias_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Documentación y Conservación de Necesidades Prioritarias
  <EvidenciasDocumentales
    key="documentacion_conservacion_necesidades_prioritarias_evidencias"
    namePrefix="documentacion_conservacion_necesidades_prioritarias"
    evidencias={[
      formData.documentacion_conservacion_necesidades_prioritarias_evidencia1,
      formData.documentacion_conservacion_necesidades_prioritarias_evidencia2,
      formData.documentacion_conservacion_necesidades_prioritarias_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Consulta y Confirmación de Necesidades Prioritarias con los Usuarios
  <SectionTitle
    key="consulta_confirmacion_necesidades_prioritarias"
    title="Consulta y Confirmación de Necesidades Prioritarias con los Usuarios"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="consulta_confirmacion_necesidades_prioritarias_pregunta"
    label="¿Cómo evalúa (1-5) a la entidad en la consulta y confirmación de las necesidades prioritarias con los usuarios?"
    name="consulta_confirmacion_necesidades_prioritarias_pregunta"
    value={formData.consulta_confirmacion_necesidades_prioritarias_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Consulta y Confirmación de Necesidades Prioritarias con los Usuarios
  <EvidenciasDocumentales
    key="consulta_confirmacion_necesidades_prioritarias_evidencias"
    namePrefix="consulta_confirmacion_necesidades_prioritarias"
    evidencias={[
      formData.consulta_confirmacion_necesidades_prioritarias_evidencia1,
      formData.consulta_confirmacion_necesidades_prioritarias_evidencia2,
      formData.consulta_confirmacion_necesidades_prioritarias_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Comunicación a los Usuarios sobre las Necesidades Consideradas y No Consideradas
  <SectionTitle
    key="comunicacion_necesidades_consideradas"
    title="Comunicación a los Usuarios sobre las Necesidades Consideradas y No Consideradas"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="comunicacion_necesidades_consideradas_pregunta"
    label="Califique (1-5) en qué medida la entidad informa adecuadamente a los usuarios sobre las necesidades que fueron priorizadas y aquellas que no fueron consideradas."
    name="comunicacion_necesidades_consideradas_pregunta"
    value={formData.comunicacion_necesidades_consideradas_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Comunicación a los Usuarios sobre las Necesidades Consideradas y No Consideradas
  <EvidenciasDocumentales
    key="comunicacion_necesidades_consideradas_evidencias"
    namePrefix="comunicacion_necesidades_consideradas"
    evidencias={[
      formData.comunicacion_necesidades_consideradas_evidencia1,
      formData.comunicacion_necesidades_consideradas_evidencia2,
      formData.comunicacion_necesidades_consideradas_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Sugerencias para Análisis de las Necesidades Recogidas
  <SectionTitle
    key="sugerencias_analisis_necesidades_recogidas"
    title="Sugerencias para Análisis de las Necesidades Recogidas"
  />,

  // Pregunta de Tipo Textarea
  <Sugerencias
    key="sugerencias_analisis_necesidades_recogidas_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el análisis, la documentación, la confirmación y la conservación de las necesidades de información estadística recolectadas de los usuarios?"
    name="sugerencias_analisis_necesidades_recogidas_pregunta"
    value={formData.sugerencias_analisis_necesidades_recogidas_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_5-2"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_5-2"
    accion={formData.accion}
    responsableSNS={formData.responsableSNS}
    fechaCumplimiento={formData.fechaCumplimiento}
    handleChange={handleChange}
  />,
];
