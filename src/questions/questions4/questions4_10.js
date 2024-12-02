// ./src/questions/questions4/questions4_10.js

import React from "react";
import { 
    SectionTitle,
    CheckboxQuestion,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
} from "../../components/questions";

export const questions4_10 = (formData, handleChange, handleSelectChange) => [

//   // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-4-10"
//     title="Sección 4.10 - Seguimiento y Medición"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-4-10"
//     title="Introducción"
//   />,

//   // Texto de Introducción
//   <div key="texto-introduccion-4-10">
//     <p>
//       El seguimiento y la medición son herramientas clave para evaluar el desempeño del proceso estadístico y garantizar su mejora continua. Esta sección establece directrices para la implementación de sistemas de monitoreo que permitan medir indicadores de calidad, eficiencia y efectividad en todas las fases del proceso. Los resultados de estas mediciones constituyen la base para realizar ajustes, documentar lecciones aprendidas y fortalecer la capacidad institucional en la generación de información estadística confiable.
//     </p>
//   </div>,

  // Subtítulo: Definición de Mecanismos de Seguimiento y Medición
  <SectionTitle
    key="definicion_mecanismos_seguimiento_medicion"
    title="Definición de Mecanismos de Seguimiento y Medición"
  />,

  // Pregunta de Tipo Checkbox con sub-preguntas
  <CheckboxQuestion
    key="definicion_mecanismos_seguimiento_medicion_pregunta"
    label="¿La dependencia encargada de la operación estadística define mecanismos de seguimiento y medición en cada fase del proceso estadístico para asegurar que la operación estadística:"
    name="definicion_mecanismos_seguimiento_medicion_pregunta"
    options={[
      "Cumple los objetivos establecidos",
      "Cumple con la metodología",
      "Es oportuna en la generación y difusión de información estadística",
      "Identifica mejoras y lecciones aprendidas"
    ]}
    values={formData.definicion_mecanismos_seguimiento_medicion_pregunta || []}
    onChange={handleChange}
    subLabels={[
      "a) ¿cumple los objetivos establecidos?",
      "b) ¿cumple con la metodología?",
      "c) ¿Es oportuna en la generación y difusión de información estadística?",
      "d) ¿identifica mejoras y lecciones aprendidas?"
    ]}
  />,

  // Evidencias Documentales para Definición de Mecanismos de Seguimiento y Medición
  <EvidenciasDocumentales
    key="definicion_mecanismos_seguimiento_medicion_evidencias"
    namePrefix="definicion_mecanismos_seguimiento_medicion"
    evidencias={[
      formData.definicion_mecanismos_seguimiento_medicion_evidencia1,
      formData.definicion_mecanismos_seguimiento_medicion_evidencia2,
      formData.definicion_mecanismos_seguimiento_medicion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Determinación del Seguimiento y Medición
  <SectionTitle
    key="determinacion_seguimiento_medicion"
    title="Determinación del Seguimiento y Medición"
  />,

  // Pregunta de Tipo Checkbox con sub-preguntas
  <CheckboxQuestion
    key="determinacion_seguimiento_medicion_pregunta"
    label="¿La dependencia encargada de la operación estadística determina:"
    name="determinacion_seguimiento_medicion_pregunta"
    options={[
      "La necesidad de seguimiento para cada fase del proceso estadístico",
      "Cuándo y quién realiza el seguimiento y la medición",
      "Cuándo y quién analiza y evalúa los resultados del seguimiento y la medición"
    ]}
    values={formData.determinacion_seguimiento_medicion_pregunta || []}
    onChange={handleChange}
    subLabels={[
      "a) la necesidad de seguimiento para cada fase del proceso estadístico?",
      "b) ¿Cuándo y quién realiza el seguimiento y la medición?",
      "c) ¿Cuándo y quién analiza y evalúa los resultados del seguimiento y la medición?"
    ]}
  />,

  // Evidencias Documentales para Determinación del Seguimiento y Medición
  <EvidenciasDocumentales
    key="determinacion_seguimiento_medicion_evidencias"
    namePrefix="determinacion_seguimiento_medicion"
    evidencias={[
      formData.determinacion_seguimiento_medicion_evidencia1,
      formData.determinacion_seguimiento_medicion_evidencia2,
      formData.determinacion_seguimiento_medicion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Documentación de Mecanismos de Seguimiento y Medición
  <SectionTitle
    key="documentacion_mecanismos_seguimiento_medicion"
    title="Documentación de Mecanismos de Seguimiento y Medición"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="documentacion_mecanismos_seguimiento_medicion_pregunta"
    label="Califique (1-5) qué tan efectiva es la dependencia encargada de la operación estadística en conservar la evidencia de los mecanismos de seguimiento y medición."
    name="documentacion_mecanismos_seguimiento_medicion_pregunta"
    value={formData.documentacion_mecanismos_seguimiento_medicion_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Documentación de Mecanismos de Seguimiento y Medición
  <EvidenciasDocumentales
    key="documentacion_mecanismos_seguimiento_medicion_evidencias"
    namePrefix="documentacion_mecanismos_seguimiento_medicion"
    evidencias={[
      formData.documentacion_mecanismos_seguimiento_medicion_evidencia1,
      formData.documentacion_mecanismos_seguimiento_medicion_evidencia2,
      formData.documentacion_mecanismos_seguimiento_medicion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Pruebas y Evaluación
  <SectionTitle
    key="pruebas_evaluacion"
    title="Pruebas y Evaluación"
  />,

  // Pregunta de Tipo Checkbox con sub-preguntas
  <CheckboxQuestion
    key="pruebas_evaluacion_pregunta"
    label="¿La dependencia encargada de la operación estadística garantiza que se realicen las pruebas y la evaluación en las siguientes fases?"
    name="pruebas_evaluacion_pregunta"
    options={[
      "Diseño y construcción",
      "Recolección o acopio",
      "Procesamiento",
      "Análisis",
      "Difusión"
    ]}
    values={formData.pruebas_evaluacion_pregunta || []}
    onChange={handleChange}
    subLabels={[
      "a) diseño y construcción",
      "b) recolección o acopio",
      "c) procesamiento",
      "d) análisis",
      "e) difusión"
    ]}
  />,

  // Evidencias Documentales para Pruebas y Evaluación
  <EvidenciasDocumentales
    key="pruebas_evaluacion_evidencias"
    namePrefix="pruebas_evaluacion"
    evidencias={[
      formData.pruebas_evaluacion_evidencia1,
      formData.pruebas_evaluacion_evidencia2,
      formData.pruebas_evaluacion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Acciones Correctivas y Eficacia
  <SectionTitle
    key="acciones_correctivas_eficacia"
    title="Acciones Correctivas y Eficacia"
  />,

  // Pregunta de Tipo Textarea
  <Sugerencias
    key="acciones_correctivas_eficacia_pregunta"
    label="¿Cómo evalúa la dependencia encargada de la operación estadística la toma de acciones y la garantía de su eficacia, teniendo en cuenta las conclusiones de las pruebas y la evaluación?"
    name="acciones_correctivas_eficacia_pregunta"
    value={formData.acciones_correctivas_eficacia_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus comentarios aquí..."
    rows={4}
  />,

  // Evidencias Documentales para Acciones Correctivas y Eficacia
  <EvidenciasDocumentales
    key="acciones_correctivas_eficacia_evidencias"
    namePrefix="acciones_correctivas_eficacia"
    evidencias={[
      formData.acciones_correctivas_eficacia_evidencia1,
      formData.acciones_correctivas_eficacia_evidencia2,
      formData.acciones_correctivas_eficacia_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Sugerencias para el Seguimiento y Medición
  <SectionTitle
    key="sugerencias_seguimiento_medicion"
    title="Sugerencias para el Seguimiento y Medición"
  />,

  // Pregunta de Tipo Sugerencias
  <Sugerencias
    key="sugerencias_seguimiento_medicion_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el seguimiento y la medición de los indicadores de calidad, eficiencia y efectividad en el proceso estadístico?"
    name="sugerencias_seguimiento_medicion_pregunta"
    value={formData.sugerencias_seguimiento_medicion_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_4_10"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_4_10"
    accion={formData.accion}
    responsableSNS={formData.responsableSNS}
    fechaCumplimiento={formData.fechaCumplimiento}
    handleChange={handleChange}
  />,
];
