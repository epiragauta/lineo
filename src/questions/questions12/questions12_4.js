import React from "react";
import {
  SectionTitle,
  RadioQuestion,
  CheckboxQuestion,
  TextareaQuestion,
  EvidenciasDocumentales,
  AccionesRequeridas,
} from "../../components/questions";

export const questions12_4 = (formData, handleChange) => [
  <SectionTitle
    key="evaluacion-fases"
    title="Evaluación de las Fases del Proceso Estadístico"
  />,

  <RadioQuestion
    key="evaluacion_fases_proceso"
    label="¿La dependencia encargada de la operación estadística realiza evaluaciones del desempeño al culminar cada una de las fases del proceso estadístico?"
    name="evaluacion_fases_proceso"
    options={["Sí", "No"]}
    value={formData.evaluacion_fases_proceso}
    onChange={handleChange}
  />,

  <SectionTitle
    key="revision-diseno"
    title="Revisión del Diseño del Proceso"
  />,

  <RadioQuestion
    key="revision_diseno_proceso"
    label="¿La dependencia encargada de la operación estadística realiza revisiones periódicas del diseño del proceso estadístico a intervalos planificados?"
    name="revision_diseno_proceso"
    options={["Sí", "No"]}
    value={formData.revision_diseno_proceso}
    onChange={handleChange}
  />,

  <CheckboxQuestion
    key="revision_aspectos"
    label="Si la respuesta es Sí, ¿la revisión incluye evaluación de cambios en los siguientes aspectos?"
    name="revision_aspectos"
    options={[
      "Objeto de estudio",
      "Necesidades de los usuarios",
      "Normatividad",
      "Métodos de producción estadística",
      "Disponibilidad de datos",
    ]}
    values={formData.revision_aspectos || []}
    onChange={handleChange}
  />,

  <SectionTitle
    key="documentacion-resultados"
    title="Documentación de Resultados y Acciones de Mejora"
  />,

  <RadioQuestion
    key="documentacion_resultados_acciones"
    label="¿La dependencia encargada de la operación estadística documenta los resultados de la revisión del diseño y las acciones de mejora, cuando aplicable?"
    name="documentacion_resultados_acciones"
    options={["Sí", "No"]}
    value={formData.documentacion_resultados_acciones}
    onChange={handleChange}
  />,

  <SectionTitle
    key="evaluacion-final"
    title="Evaluación Final del Proceso Estadístico"
  />,

  <RadioQuestion
    key="evaluacion_final_proceso"
    label="¿La dependencia encargada de la operación estadística realiza una evaluación final del proceso estadístico para su mejora continua y lecciones aprendidas?"
    name="evaluacion_final_proceso"
    options={["Sí", "No"]}
    value={formData.evaluacion_final_proceso}
    onChange={handleChange}
  />,

  <RadioQuestion
    key="evaluacion_final_incluye"
    label="Si la respuesta es sí, ¿la evaluación final incluye el análisis de hallazgos, conclusiones y recomendaciones de evaluaciones anteriores?"
    name="evaluacion_final_incluye"
    options={["Sí", "No"]}
    value={formData.evaluacion_final_incluye}
    onChange={handleChange}
  />,

  <SectionTitle
    key="analisis-seguimiento"
    title="Análisis de Resultados del Seguimiento y Medición"
  />,

  <RadioQuestion
    key="analisis_resultados_seguimiento"
    label="¿La dependencia encargada de la operación estadística analiza y documenta los resultados del mecanismo de seguimiento y medición del proceso estadístico, incluyendo las dificultades encontradas y las acciones tomadas para enfrentarlas?"
    name="analisis_resultados_seguimiento"
    options={["Sí", "No"]}
    value={formData.analisis_resultados_seguimiento}
    onChange={handleChange}
  />,

  <TextareaQuestion
    key="sugerencias_fuente_datos"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?"
    name="sugerencias_fuente_datos"
    value={formData.sugerencias_fuente_datos}
    onChange={handleChange}
    rows={4}
  />,

  <EvidenciasDocumentales
    key="evidencias_documentales"
    namePrefix="evaluacion"
    evidencias={[
      formData.doc1,
      formData.doc2,
      formData.doc3,
    ]}
    handleChange={handleChange}
  />,

  <AccionesRequeridas
    key="acciones_requeridas_12_1"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];