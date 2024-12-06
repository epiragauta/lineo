// ./src/questions/questions6/questions6_1.js

import React from "react";
import {
  SectionTitle,
  RadioQuestion,
  Sugerencias,
  EvidenciasDocumentales,
  AccionesRequeridas,
} from "../../../../components/questions";

export const questions6_1 = (formData, handleChange) => [
  // Título de la Sección
//   <SectionTitle key="titulo-seccion-6-1" title="Sección 6.1 - Verificar las Necesidades" />,

//   // Subtítulo: Introducción
//   <SectionTitle key="introduccion-6-1" title="Introducción" />,
//   <div key="texto-introduccion-6-1">
//     <p>
//       La verificación de las necesidades es un paso primordial para garantizar que las demandas de información identificadas sean precisas, viables y alineadas con los objetivos de la operación estadística. Según los lineamientos de la NTC PE 1000:2020, esta etapa requiere una revisión sistemática de los requisitos recogidos, asegurando su pertinencia y priorización, además de identificar cualquier posible discrepancia o limitación que deba ser abordada antes del diseño de la operación.
//     </p>
//   </div>,

  // Preguntas sobre la verificación de necesidades
  <SectionTitle key="verificacion-necesidades" title="Verificación de Necesidades al Momento del Diseño" />,
  <RadioQuestion
    key="verificacion_necesidades_vigencia"
    label="¿La operación estadística verifica que las necesidades de los usuarios se mantengan vigentes al momento de realizar el diseño?"
    name="verificacion_necesidades_vigencia"
    options={["Sí", "No"]}
    value={formData.verificacion_necesidades_vigencia}
    onChange={handleChange}
  />,
  <RadioQuestion
    key="verificacion_brecha_tiempo"
    label="Si la respuesta es Sí, ¿La verificación se realiza cuando la brecha de tiempo entre la fase de Detección y Análisis de Necesidades y el inicio del Diseño es amplia?"
    name="verificacion_brecha_tiempo"
    options={["Sí", "No"]}
    value={formData.verificacion_brecha_tiempo}
    onChange={handleChange}
  />,
  <EvidenciasDocumentales
    key="evidencias_verificacion"
    namePrefix="verificacion_necesidades"
    evidencias={[
      formData.verificacion_necesidades_evidencia1,
      formData.verificacion_necesidades_evidencia2,
      formData.verificacion_necesidades_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Sugerencias para Mejorar
  <SectionTitle key="mejorar-verificacion" title="Mejorar la Verificación de las Necesidades" />,
  <Sugerencias
    key="sugerencias_verificacion"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de verificación de la vigencia de las necesidades de los usuarios y la alineación de los objetivos en la operación estadística?"
    name="sugerencias_verificacion"
    value={formData.sugerencias_verificacion}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Acciones Requeridas
  <SectionTitle key="acciones-requeridas-6-1" title="Acciones requeridas" />,
  <AccionesRequeridas
    key="acciones_requeridas_6_1"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
