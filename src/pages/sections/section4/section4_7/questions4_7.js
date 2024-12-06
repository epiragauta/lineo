// ./src/questions/questions4/questions4_7.js

import React from "react";
import { 
    SectionTitle,
    RadioQuestion,
    CheckboxQuestion,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
 } from "../../../../components/questions";

export const questions4_7 = (formData, handleChange, handleSelectChange) => [

//   // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-4-7"
//     title="Sección 4.7 - Gestión de los Riesgos"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-4-7"
//     title="Introducción"
//   />,

//   // Texto de Introducción
//   <div key="texto-introduccion-4-7">
//     <p>
//       La gestión de riesgos en el proceso estadístico es un componente crítico para anticipar, mitigar y controlar posibles eventos que puedan comprometer la calidad, integridad o continuidad del proceso. En el marco de la NTC PE 1000:2020, esta sección establece directrices para identificar, evaluar y gestionar los riesgos asociados a todas las fases del proceso estadístico. Se promueve un enfoque preventivo que integre controles y medidas correctivas, asegurando la sostenibilidad y robustez de las actividades estadísticas.
//     </p>
//   </div>,

  // Subtítulo: Identificación de Riesgos
  <SectionTitle
    key="identificacion_riesgos"
    title="Identificación de Riesgos"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="identificacion_riesgos_pregunta"
    label="¿La entidad identifica y analiza adecuadamente los riesgos del proceso estadístico?"
    name="identificacion_riesgos_pregunta"
    options={["Sí", "No"]}
    value={formData.identificacion_riesgos_pregunta}
    onChange={handleChange}
  />,

  // Preguntas de Tipo Ratio Condicional
  <RadioQuestion
    key="identificacion_riesgos_detalle_a"
    label="Si la respuesta es Sí, ¿la identificación de riesgos incluye una evaluación detallada de los posibles riesgos?"
    name="identificacion_riesgos_detalle_a"
    options={["Sí", "No"]}
    value={formData.identificacion_riesgos_detalle_a}
    onChange={handleChange}
    // Puedes agregar lógica condicional para mostrar solo si la respuesta anterior es "Sí"
  />,

  <RadioQuestion
    key="identificacion_riesgos_detalle_b"
    label="Si la respuesta es Sí, ¿la identificación de riesgos incluye un análisis de la probabilidad y el impacto de cada riesgo?"
    name="identificacion_riesgos_detalle_b"
    options={["Sí", "No"]}
    value={formData.identificacion_riesgos_detalle_b}
    onChange={handleChange}
  />,

  <RadioQuestion
    key="identificacion_riesgos_detalle_c"
    label="Si la respuesta es Sí, ¿la identificación de riesgos incluye una clasificación de los riesgos en función de su gravedad?"
    name="identificacion_riesgos_detalle_c"
    options={["Sí", "No"]}
    value={formData.identificacion_riesgos_detalle_c}
    onChange={handleChange}
  />,

  // Evidencias Documentales para Identificación de Riesgos
  <EvidenciasDocumentales
    key="identificacion_riesgos_evidencias"
    namePrefix="identificacion_riesgos"
    evidencias={[
      formData.identificacion_riesgos_evidencia1,
      formData.identificacion_riesgos_evidencia2,
      formData.identificacion_riesgos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Implementación de controles
  <SectionTitle
    key="implementacion_controles"
    title="Implementación de controles"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="implementacion_controles_pregunta"
    label="¿La entidad implementa controles para minimizar los riesgos identificados en el proceso estadístico?"
    name="implementacion_controles_pregunta"
    options={["Sí", "No"]}
    value={formData.implementacion_controles_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Checkbox Condicional
  <CheckboxQuestion
    key="implementacion_controles_checkbox"
    label="Si la respuesta es Sí, ¿cuáles de los siguientes controles utiliza la entidad? Seleccione todas las opciones que correspondan:"
    name="implementacion_controles_utiliza"
    options={[
      "Medidas preventivas",
      "Procedimientos de mitigación",
      "Planes de contingencia",
      "Revisiones periódicas",
      "Auditorías internas",
      "Capacitación del personal",
      "Establecimiento de responsabilidades claras"
    ]}
    values={formData.implementacion_controles_utiliza || []}
    onChange={handleChange}
  />,

  // Evidencias Documentales para Implementación de Controles
  <EvidenciasDocumentales
    key="implementacion_controles_evidencias"
    namePrefix="implementacion_controles"
    evidencias={[
      formData.implementacion_controles_evidencia1,
      formData.implementacion_controles_evidencia2,
      formData.implementacion_controles_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Acciones ante la Materialización de Riesgos
  <SectionTitle
    key="acciones_materializacion_riesgos"
    title="Acciones ante la Materialización de Riesgos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="acciones_materializacion_riesgos_pregunta"
    label="Califique (1-5) qué tan efectiva es la entidad en tomar acciones cuando los riesgos se materializan en el proceso estadístico."
    name="acciones_materializacion_riesgos_pregunta"
    value={formData.acciones_materializacion_riesgos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Acciones ante la Materialización de Riesgos
  <EvidenciasDocumentales
    key="acciones_materializacion_riesgos_evidencias"
    namePrefix="acciones_materializacion_riesgos"
    evidencias={[
      formData.acciones_materializacion_riesgos_evidencia1,
      formData.acciones_materializacion_riesgos_evidencia2,
      formData.acciones_materializacion_riesgos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Riesgos y Controles
  <SectionTitle
    key="riesgos_controles"
    title="Riesgos y Controles"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="riesgos_controles_pregunta"
    label="Califique (1-5) en qué medida la entidad documenta y mantiene la información sobre los riesgos identificados y los controles implementados."
    name="riesgos_controles_pregunta"
    value={formData.riesgos_controles_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Riesgos y Controles
  <EvidenciasDocumentales
    key="riesgos_controles_evidencias"
    namePrefix="riesgos_controles"
    evidencias={[
      formData.riesgos_controles_evidencia1,
      formData.riesgos_controles_evidencia2,
      formData.riesgos_controles_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Revisión y Actualización de Riesgos
  <SectionTitle
    key="revision_actualizacion_riesgos"
    title="Revisión y Actualización de Riesgos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="revision_actualizacion_riesgos_pregunta"
    label="¿Cómo evalúa (1-5) los procesos que aplica la entidad para la revisión y actualización periódica de los riesgos y controles en el proceso estadístico, según lo especificado en su documentación de gestión de riesgos?"
    name="revision_actualizacion_riesgos_pregunta"
    value={formData.revision_actualizacion_riesgos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Revisión y Actualización de Riesgos
  <EvidenciasDocumentales
    key="revision_actualizacion_riesgos_evidencias"
    namePrefix="revision_actualizacion_riesgos"
    evidencias={[
      formData.revision_actualizacion_riesgos_evidencia1,
      formData.revision_actualizacion_riesgos_evidencia2,
      formData.revision_actualizacion_riesgos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Sugerencias para Gestión de los Riesgos
  <SectionTitle
    key="sugerencias_gestion_riesgos"
    title="Sugerencias para Gestión de los Riesgos"
  />,

  // Pregunta de Tipo Sugerencias
  <Sugerencias
    key="sugerencias_gestion_riesgos_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, análisis, control y respuesta a los riesgos en el proceso estadístico?"
    name="sugerencias_gestion_riesgos_pregunta"
    value={formData.sugerencias_gestion_riesgos_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_4_7"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_4_7"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
