// ./src/questions/questions4/questions4_8.js

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

export const questions4_8 = (formData, handleChange, handleSelectChange) => [

  // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-4-8"
//     title="Sección 4.8 - Implementación del Proceso Estadístico"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-4-8"
//     title="Introducción"
//   />,

//   // Texto de Introducción
//   <div key="texto-introduccion-4-8">
//     <p>
//       La implementación efectiva del proceso estadístico requiere de una planificación estructurada y la ejecución coordinada de todas las fases definidas en la NTC PE 1000:2020. Esta sección describe las actividades esenciales para garantizar que los procesos se desarrollen conforme a los objetivos, lineamientos técnicos y normativos establecidos. Asimismo, incluye las medidas necesarias para la integración de recursos, tecnologías y metodologías que aseguren resultados confiables y oportunos.
//     </p>
//   </div>,

  // Subtítulo: Implementación de las Fases del Proceso Estadístico
  <SectionTitle
    key="implementacion_fases_proceso_estadistico"
    title="Implementación de las Fases del Proceso Estadístico"
  />,

  // Pregunta de Tipo Checkbox
  <CheckboxQuestion
    key="implementacion_fases_proceso_estadistico_pregunta"
    label="La dependencia encargada de la operación estadística asegura que se implementen adecuadamente todas las fases del proceso estadístico, que incluye:"
    name="implementacion_fases_proceso_estadistico_pregunta"
    options={[
      "Detección y análisis de necesidades",
      "Diseño",
      "Construcción",
      "Recolección o acopio",
      "Procesamiento",
      "Análisis",
      "Difusión",
      "Evaluación"
    ]}
    values={formData.implementacion_fases_proceso_estadistico_pregunta || []}
    onChange={handleChange}
  />,

  // Evidencias Documentales para Implementación de las Fases del Proceso Estadístico
  <EvidenciasDocumentales
    key="implementacion_fases_proceso_estadistico_evidencias"
    namePrefix="implementacion_fases_proceso_estadistico"
    evidencias={[
      formData.implementacion_fases_proceso_estadistico_evidencia1,
      formData.implementacion_fases_proceso_estadistico_evidencia2,
      formData.implementacion_fases_proceso_estadistico_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Cumplimiento de las Fases del Proceso Estadístico
  <SectionTitle
    key="cumplimiento_fases_proceso_estadistico"
    title="Cumplimiento de las Fases del Proceso Estadístico"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="cumplimiento_fases_proceso_estadistico_pregunta"
    label="¿La dependencia encargada de la operación estadística sigue la descripción del proceso estadístico según el numeral 0.2 de la norma?"
    name="cumplimiento_fases_proceso_estadistico_pregunta"
    options={["Sí", "No"]}
    value={formData.cumplimiento_fases_proceso_estadistico_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Range Condicional
  <SliderQuestion
    key="cumplimiento_fases_proceso_estadistico_calificacion"
    label="Si la respuesta es Sí, ¿en qué medida cumple la entidad con cada una de las fases del proceso estadístico? (1-5)"
    name="cumplimiento_fases_proceso_estadistico_calificacion"
    value={formData.cumplimiento_fases_proceso_estadistico_calificacion}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Cumplimiento de las Fases del Proceso Estadístico
  <EvidenciasDocumentales
    key="cumplimiento_fases_proceso_estadistico_evidencias"
    namePrefix="cumplimiento_fases_proceso_estadistico"
    evidencias={[
      formData.cumplimiento_fases_proceso_estadistico_evidencia1,
      formData.cumplimiento_fases_proceso_estadistico_evidencia2,
      formData.cumplimiento_fases_proceso_estadistico_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Efectividad en la Implementación del Proceso Estadístico
  <SectionTitle
    key="efectividad_implementacion_proceso_estadistico"
    title="Efectividad en la Implementación del Proceso Estadístico"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="efectividad_implementacion_proceso_estadistico_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la implementación de cada fase del proceso estadístico?"
    name="efectividad_implementacion_proceso_estadistico_pregunta"
    value={formData.efectividad_implementacion_proceso_estadistico_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Efectividad en la Implementación del Proceso Estadístico
  <EvidenciasDocumentales
    key="efectividad_implementacion_proceso_estadistico_evidencias"
    namePrefix="efectividad_implementacion_proceso_estadistico"
    evidencias={[
      formData.efectividad_implementacion_proceso_estadistico_evidencia1,
      formData.efectividad_implementacion_proceso_estadistico_evidencia2,
      formData.efectividad_implementacion_proceso_estadistico_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Documentación y Aplicación de las fases del Proceso Estadístico
  <SectionTitle
    key="documentacion_aplicacion_fases_proceso_estadistico"
    title="Documentación y Aplicación de las fases del Proceso Estadístico"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="documentacion_aplicacion_fases_proceso_estadistico_pregunta"
    label="Califique (1-5) ¿En qué medida la dependencia encargada de la operación estadística documenta y aplica las fases del proceso estadístico?"
    name="documentacion_aplicacion_fases_proceso_estadistico_pregunta"
    value={formData.documentacion_aplicacion_fases_proceso_estadistico_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Documentación y Aplicación de las fases del Proceso Estadístico
  <EvidenciasDocumentales
    key="documentacion_aplicacion_fases_proceso_estadistico_evidencias"
    namePrefix="documentacion_aplicacion_fases_proceso_estadistico"
    evidencias={[
      formData.documentacion_aplicacion_fases_proceso_estadistico_evidencia1,
      formData.documentacion_aplicacion_fases_proceso_estadistico_evidencia2,
      formData.documentacion_aplicacion_fases_proceso_estadistico_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Revisión y Actualización del Proceso Estadístico
  <SectionTitle
    key="revision_actualizacion_proceso_estadistico"
    title="Revisión y Actualización del Proceso Estadístico"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="revision_actualizacion_proceso_estadistico_pregunta"
    label="¿Cómo evalúa la dependencia encargada de la operación estadística la revisión y actualización periódica del proceso estadístico para asegurar la mejora continua? (1 = Muy Insuficiente, 5 = Muy Satisfactoria)."
    name="revision_actualizacion_proceso_estadistico_pregunta"
    value={formData.revision_actualizacion_proceso_estadistico_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Revisión y Actualización del Proceso Estadístico
  <EvidenciasDocumentales
    key="revision_actualizacion_proceso_estadistico_evidencias"
    namePrefix="revision_actualizacion_proceso_estadistico"
    evidencias={[
      formData.revision_actualizacion_proceso_estadistico_evidencia1,
      formData.revision_actualizacion_proceso_estadistico_evidencia2,
      formData.revision_actualizacion_proceso_estadistico_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Sugerencias para Implementación del Proceso Estadístico
  <SectionTitle
    key="sugerencias_implementacion_proceso_estadistico"
    title="Sugerencias para Implementación del Proceso Estadístico"
  />,

  // Pregunta de Tipo Sugerencias
  <Sugerencias
    key="sugerencias_implementacion_proceso_estadistico_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y actualización de los usuarios y sus necesidades de información estadística?"
    name="sugerencias_implementacion_proceso_estadistico_pregunta"
    value={formData.sugerencias_implementacion_proceso_estadistico_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_4_8"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_4_8"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
