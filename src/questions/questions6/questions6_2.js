// ./src/questions/questions6/questions6_2.js

import React from "react";
import {
  SectionTitle,
  RadioQuestion,
  CheckboxQuestion,
  Sugerencias,
  EvidenciasDocumentales,
  AccionesRequeridas,
} from "../../components/questions";

export const questions6_2 = (formData, handleChange) => [
  // Título de la Sección
//   <SectionTitle key="titulo-seccion-6-2" title="Sección 6.2 - Confirmar el Tipo de Fuente de Información" />,

//   // Subtítulo: Introducción
//   <SectionTitle key="introduccion-6-2" title="Introducción" />,
//   <div key="texto-introduccion-6-2">
//     <p>
//       La confirmación del tipo de fuente de datos constituye un aspecto estratégico en el diseño del proceso estadístico.
//       En el marco de la NTC PE 1000:2020, esta sección aborda la necesidad de validar si las fuentes identificadas
//       (administrativas, censales, muestrales o mixtas) cumplen con los criterios de calidad, oportunidad y representatividad
//       requeridos para responder a las necesidades de información, y si estas son accesibles dentro del marco legal e
//       institucional aplicable.
//     </p>
//   </div>,

  // Calidad de los Datos
  <SectionTitle key="calidad-datos" title="Calidad de los Datos" />,
  <RadioQuestion
    key="fuentes_secundarias"
    label="¿Utiliza fuentes secundarias?"
    name="fuentes_secundarias"
    options={["Sí", "No"]}
    value={formData.fuentes_secundarias}
    onChange={handleChange}
  />,
  <RadioQuestion
    key="calidad_datos_fuentes"
    label="Si la respuesta es Sí, ¿La operación estadística considera la calidad de los datos (completitud y consistencia entre variables) cuando utiliza fuentes secundarias?"
    name="calidad_datos_fuentes"
    options={["Sí", "No"]}
    value={formData.calidad_datos_fuentes}
    onChange={handleChange}
  />,
  <CheckboxQuestion
    key="aspectos_calidad"
    label="Si la respuesta es Sí, ¿Qué aspectos de la calidad se evalúan?"
    name="aspectos_calidad"
    options={[
      "Completitud de los datos",
      "Consistencia entre variables",
      "Otros aspectos",
    ]}
    values={formData.aspectos_calidad || []}
    onChange={handleChange}
  />,

  // Sugerencias
  <SectionTitle key="sugerencias" title="Confirmar el Tipo de Fuente de Datos" />,
  <Sugerencias
    key="sugerencias_fuentes_datos"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?"
    name="sugerencias_fuentes_datos"
    value={formData.sugerencias_fuentes_datos}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Evidencias Documentales
  <EvidenciasDocumentales
    key="evidencias_fuentes_datos"
    namePrefix="fuentes_datos"
    evidencias={[
      formData.fuentes_datos_evidencia1,
      formData.fuentes_datos_evidencia2,
      formData.fuentes_datos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Acciones Requeridas
  <SectionTitle key="acciones-requeridas-6-2" title="Acciones requeridas" />,
  <AccionesRequeridas
    key="acciones_requeridas_6_2"
    accion={formData.accion}
    responsableSNS={formData.responsableSNS}
    fechaCumplimiento={formData.fechaCumplimiento}
    handleChange={handleChange}
  />,
];
