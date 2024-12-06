// ./src/questions/questions5/questions5_4.js

import React from "react";
import { 
    SectionTitle,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
} from "../../../../components/questions";

export const questions5_4 = (formData, handleChange, handleSelectChange) => [

  // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-5-4"
//     title="Sección 5.4 - Objetivos de la Operación Estadística"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-5-4"
//     title="Introducción"
//   />,

//   // Texto de Introducción
//   <div key="texto-introduccion-5-4">
//     <p>
//       Los objetivos de la operación estadística constituyen la referencia principal que orienta todo el desarrollo del proceso estadístico. En el contexto de la NTC PE 1000:2020, esta sección establece la necesidad de formular objetivos claros, medibles y alineados con las necesidades de información identificadas. Estos, deben guiar la planificación, ejecución y evaluación de la operación, asegurando que los recursos se empleen de manera eficiente y los resultados sean consistentes con las expectativas de los usuarios.
//     </p>
//   </div>,

  // Subtítulo: Determinación de los Objetivos Generales y Específicos
  <SectionTitle
    key="determinacion_objetivos_generales_especificos"
    title="Determinación de los Objetivos Generales y Específicos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="determinacion_objetivos_generales_especificos_pregunta"
    label="Califique de 1-5 ¿En qué medida la dependencia encargada de la operación estadística determina adecuadamente los objetivos generales y específicos para esta operación estadística?"
    name="determinacion_objetivos_generales_especificos_pregunta"
    value={formData.determinacion_objetivos_generales_especificos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Determinación de los Objetivos Generales y Específicos
  <EvidenciasDocumentales
    key="determinacion_objetivos_generales_especificos_evidencias"
    namePrefix="determinacion_objetivos_generales_especificos"
    evidencias={[
      formData.determinacion_objetivos_generales_especificos_evidencia1,
      formData.determinacion_objetivos_generales_especificos_evidencia2,
      formData.determinacion_objetivos_generales_especificos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Congruencia de los Objetivos con las Necesidades de Información
  <SectionTitle
    key="congruencia_objetivos_necesidades_info"
    title="Congruencia de los Objetivos con las Necesidades de Información"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="congruencia_objetivos_necesidades_info_pregunta"
    label="Califique de 1-5 ¿Qué tan bien están alineados los objetivos de la operación estadística con las necesidades de información que se pretenden satisfacer?"
    name="congruencia_objetivos_necesidades_info_pregunta"
    value={formData.congruencia_objetivos_necesidades_info_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Congruencia de los Objetivos con las Necesidades de Información
  <EvidenciasDocumentales
    key="congruencia_objetivos_necesidades_info_evidencias"
    namePrefix="congruencia_objetivos_necesidades_info"
    evidencias={[
      formData.congruencia_objetivos_necesidades_info_evidencia1,
      formData.congruencia_objetivos_necesidades_info_evidencia2,
      formData.congruencia_objetivos_necesidades_info_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Capacidad de Seguimiento y Medición de los Objetivos
  <SectionTitle
    key="capacidad_seguimiento_medicion_objetivos"
    title="Capacidad de Seguimiento y Medición de los Objetivos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="capacidad_seguimiento_medicion_objetivos_pregunta"
    label="Califique de 1-5 ¿En qué medida los objetivos definidos permiten un seguimiento y medición efectivos?"
    name="capacidad_seguimiento_medicion_objetivos_pregunta"
    value={formData.capacidad_seguimiento_medicion_objetivos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Capacidad de Seguimiento y Medición de los Objetivos
  <EvidenciasDocumentales
    key="capacidad_seguimiento_medicion_objetivos_evidencias"
    namePrefix="capacidad_seguimiento_medicion_objetivos"
    evidencias={[
      formData.capacidad_seguimiento_medicion_objetivos_evidencia1,
      formData.capacidad_seguimiento_medicion_objetivos_evidencia2,
      formData.capacidad_seguimiento_medicion_objetivos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Comunicación de los Objetivos a las Partes Interesadas
  <SectionTitle
    key="comunicacion_objetivos_partes_interesadas"
    title="Comunicación de los Objetivos a las Partes Interesadas"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="comunicacion_objetivos_partes_interesadas_pregunta"
    label="Califique de 1-5 ¿Cómo evalúa la efectividad de la dependencia encargada de la operación estadística en comunicar los objetivos de la operación estadística a todas las partes interesadas (internas y externas)?"
    name="comunicacion_objetivos_partes_interesadas_pregunta"
    value={formData.comunicacion_objetivos_partes_interesadas_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Comunicación de los Objetivos a las Partes Interesadas
  <EvidenciasDocumentales
    key="comunicacion_objetivos_partes_interesadas_evidencias"
    namePrefix="comunicacion_objetivos_partes_interesadas"
    evidencias={[
      formData.comunicacion_objetivos_partes_interesadas_evidencia1,
      formData.comunicacion_objetivos_partes_interesadas_evidencia2,
      formData.comunicacion_objetivos_partes_interesadas_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Actualización de los Objetivos
  <SectionTitle
    key="actualizacion_objetivos"
    title="Actualización de los Objetivos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="actualizacion_objetivos_pregunta"
    label="Califique de 1-5 ¿En qué medida la dependencia encargada de la operación estadística actualiza los objetivos cuando cambian las necesidades de información o el objeto de estudio?"
    name="actualizacion_objetivos_pregunta"
    value={formData.actualizacion_objetivos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Actualización de los Objetivos
  <EvidenciasDocumentales
    key="actualizacion_objetivos_evidencias"
    namePrefix="actualizacion_objetivos"
    evidencias={[
      formData.actualizacion_objetivos_evidencia1,
      formData.actualizacion_objetivos_evidencia2,
      formData.actualizacion_objetivos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Cuadros de priorización de objetivos
  <SectionTitle
    key="cuadros_priorizacion_objetivos"
    title="Cuadros de priorización de objetivos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="cuadros_priorizacion_objetivos_pregunta"
    label="Califique de 1-5 ¿Qué tanto se consideran las necesidades de los usuarios internos (dependencias de la Superintendencia) y externos en la definición de los objetivos a partir de la priorización de las variables identificadas por ellos?"
    name="cuadros_priorizacion_objetivos_pregunta"
    value={formData.cuadros_priorizacion_objetivos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Cuadros de priorización de objetivos
  <EvidenciasDocumentales
    key="cuadros_priorizacion_objetivos_evidencias"
    namePrefix="cuadros_priorizacion_objetivos"
    evidencias={[
      formData.cuadros_priorizacion_objetivos_evidencia1,
      formData.cuadros_priorizacion_objetivos_evidencia2,
      formData.cuadros_priorizacion_objetivos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Mejorar la Gestión de Objetivos en las Operaciones Estadísticas
  <SectionTitle
    key="mejorar_gestion_objetivos_operaciones_estadisticas"
    title="Mejorar la Gestión de Objetivos en las Operaciones Estadísticas"
  />,

  // Pregunta de Tipo Textarea
  <Sugerencias
    key="mejorar_gestion_objetivos_operaciones_estadisticas_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación, comunicación y actualización de los objetivos en las operaciones estadísticas?"
    name="mejorar_gestion_objetivos_operaciones_estadisticas_pregunta"
    value={formData.mejorar_gestion_objetivos_operaciones_estadisticas_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_5-4"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_5-4"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
