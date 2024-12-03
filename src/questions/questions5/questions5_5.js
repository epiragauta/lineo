// ./src/questions/questions5/questions5_5.js

import React from "react";
import { 
    SectionTitle,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
} from "../../components/questions";

export const questions5_5 = (formData, handleChange, handleSelectChange) => [

  // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-5-5"
//     title="Sección 5.5 - Identificación de Conceptos"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-5-5"
//     title="Introducción"
//   />,

//   // Texto de Introducción
//   <div key="texto-introduccion-5-5">
//     <p>
//       La identificación de conceptos estadísticos es un paso imprescindible para garantizar la coherencia y comparabilidad de los datos generados. Según la NTC PE 1000:2020, esta sección aborda la definición precisa y consensuada de términos, categorías y clasificaciones utilizados en la operación estadística. Este proceso debe alinearse con estándares nacionales e internacionales, asegurando la interoperabilidad y la comprensión homogénea de los resultados.
//     </p>
//   </div>,

  // Subtítulo: Identificación de Conceptos Básicos
  <SectionTitle
    key="identificacion_conceptos_basicos"
    title="Identificación de Conceptos Básicos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="identificacion_conceptos_basicos_pregunta"
    label="Califique de 1-5 ¿En qué medida la dependencia encargada de la operación estadística identifica adecuadamente los conceptos básicos que explican y contextualizan la temática objeto de estudio?"
    name="identificacion_conceptos_basicos_pregunta"
    value={formData.identificacion_conceptos_basicos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Identificación de Conceptos Básicos
  <EvidenciasDocumentales
    key="identificacion_conceptos_basicos_evidencias"
    namePrefix="identificacion_conceptos_basicos"
    evidencias={[
      formData.identificacion_conceptos_basicos_evidencia1,
      formData.identificacion_conceptos_basicos_evidencia2,
      formData.identificacion_conceptos_basicos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Identificación de Variables Estadísticas
  <SectionTitle
    key="identificacion_variables_estadisticas"
    title="Identificación de Variables Estadísticas"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="identificacion_variables_estadisticas_pregunta"
    label="Califique de 1-5 ¿Qué tan bien identifica la dependencia encargada de la operación estadística las variables estadísticas necesarias para el desarrollo de la operación estadística?"
    name="identificacion_variables_estadisticas_pregunta"
    value={formData.identificacion_variables_estadisticas_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Identificación de Variables Estadísticas
  <EvidenciasDocumentales
    key="identificacion_variables_estadisticas_evidencias"
    namePrefix="identificacion_variables_estadisticas"
    evidencias={[
      formData.identificacion_variables_estadisticas_evidencia1,
      formData.identificacion_variables_estadisticas_evidencia2,
      formData.identificacion_variables_estadisticas_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Identificación de Indicadores Estadísticos
  <SectionTitle
    key="identificacion_indicadores_estadisticas"
    title="Identificación de Indicadores Estadísticos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="identificacion_indicadores_estadisticas_pregunta"
    label="Califique de 1-5 ¿Cómo evalúa la dependencia encargada de la operación estadística la identificación de los indicadores estadísticos que permiten medir y evaluar la temática objeto de estudio?"
    name="identificacion_indicadores_estadisticas_pregunta"
    value={formData.identificacion_indicadores_estadisticas_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Identificación de Indicadores Estadísticos
  <EvidenciasDocumentales
    key="identificacion_indicadores_estadisticas_evidencias"
    namePrefix="identificacion_indicadores_estadisticas"
    evidencias={[
      formData.identificacion_indicadores_estadisticas_evidencia1,
      formData.identificacion_indicadores_estadisticas_evidencia2,
      formData.identificacion_indicadores_estadisticas_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Revisión y Actualización de Conceptos, Variables e Indicadores
  <SectionTitle
    key="revision_actualizacion_conceptos_variables_indicadores"
    title="Revisión y Actualización de Conceptos, Variables e Indicadores"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="revision_actualizacion_conceptos_variables_indicadores_pregunta"
    label="Califique de 1-5 ¿En qué medida la dependencia encargada de la operación estadística revisa y actualiza regularmente los conceptos básicos, las variables estadísticas y los indicadores estadísticos para asegurar su relevancia y precisión?"
    name="revision_actualizacion_conceptos_variables_indicadores_pregunta"
    value={formData.revision_actualizacion_conceptos_variables_indicadores_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Revisión y Actualización de Conceptos, Variables e Indicadores
  <EvidenciasDocumentales
    key="revision_actualizacion_conceptos_variables_indicadores_evidencias"
    namePrefix="revision_actualizacion_conceptos_variables_indicadores"
    evidencias={[
      formData.revision_actualizacion_conceptos_variables_indicadores_evidencia1,
      formData.revision_actualizacion_conceptos_variables_indicadores_evidencia2,
      formData.revision_actualizacion_conceptos_variables_indicadores_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Mejorar la Identificación de Conceptos, Variables e Indicadores
  <SectionTitle
    key="mejorar_identificacion_conceptos_variables_indicadores"
    title="Mejorar la Identificación de Conceptos, Variables e Indicadores"
  />,

  // Pregunta de Tipo Textarea
  <Sugerencias
    key="mejorar_identificacion_conceptos_variables_indicadores_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, revisión y actualización de los conceptos básicos, variables estadísticas e indicadores estadísticos en sus operaciones?"
    name="mejorar_identificacion_conceptos_variables_indicadores_pregunta"
    value={formData.mejorar_identificacion_conceptos_variables_indicadores_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_5-5"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_5-5"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
