// ./src/questions/questions4/questions4_5.js

import React from "react";
import { 
    SectionTitle,
    RadioQuestion,
    SliderQuestion,
    EvidenciasDocumentales,
    AccionesRequeridas,
    Sugerencias
 } from "../../../../components/questions";

export const questions4_5 = (formData, handleChange, handleSelectChange) => [

  // // Título de la Sección
  // <SectionTitle
  //   key="titulo-seccion"
  //   title="Sección 4.5 - Personal del Proceso Estadístico"
  // />,

  // // Texto de Introducción
  // <div key="texto-introduccion">
  //   <p>
  //     El personal involucrado en el proceso estadístico desempeña un rol fundamental en la implementación efectiva de los lineamientos de la NTC PE 1000:2020. Esta sección aborda los requisitos relacionados con la formación, competencias y asignación de responsabilidades del equipo estadístico. Se enfatiza la necesidad de contar con personal calificado y capacitado, asegurando la correcta ejecución de las actividades estadísticas y promoviendo un enfoque de mejora continua a través de planes de capacitación y evaluación de desempeño.
  //   </p>
  // </div>,

  // Subtítulo: Determinación y Provisión de Personal
  <SectionTitle
    key="determinacion_provision_personal"
    title="Determinación y Provisión de Personal"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="determinacion_provision_personal_pregunta"
    label="¿La dependencia encargada de la operación estadística determina y proporciona el personal necesario para cumplir los objetivos de la operación estadística, así como para la implementación, el mantenimiento y la mejora continua del proceso estadístico?"
    name="determinacion_provision_personal_pregunta"
    options={["Sí", "No"]}
    value={formData.determinacion_provision_personal_pregunta}
    onChange={handleChange}
  />,

  // Evidencias Documentales para Determinación y Provisión de Personal
  <EvidenciasDocumentales
    key="determinacion_provision_personal_evidencias"
    namePrefix="determinacion_provision_personal"
    evidencias={[
      formData.determinacion_provision_personal_evidencia1,
      formData.determinacion_provision_personal_evidencia2,
      formData.determinacion_provision_personal_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Competencia del Personal
  <SectionTitle
    key="competencia_personal"
    title="Competencia del Personal"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="competencia_personal_pregunta1"
    label="¿La dependencia encargada de la operación estadística determina los perfiles necesarios para desarrollar el proceso estadístico y conserva los registros que demuestran que el personal cumple con dichos perfiles?"
    name="competencia_personal_pregunta1"
    options={["Sí", "No"]}
    value={formData.competencia_personal_pregunta1}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Ratio Condicional
  <RadioQuestion
    key="competencia_personal_pregunta2"
    label="Si la respuesta es Sí, ¿la dependencia encargada de la operación estadística también implementa y documenta acciones de entrenamiento para asegurar la competencia del personal involucrado en el desarrollo de la operación estadística?"
    name="competencia_personal_pregunta2"
    options={["Sí", "No"]}
    value={formData.competencia_personal_pregunta2}
    onChange={handleChange}
  />,

  // Evidencias Documentales para Competencia del Personal
  <EvidenciasDocumentales
    key="competencia_personal_evidencias"
    namePrefix="competencia_personal"
    evidencias={[
      formData.competencia_personal_evidencia1,
      formData.competencia_personal_evidencia2,
      formData.competencia_personal_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Efectividad en el Mantenimiento de Registros
  <SectionTitle
    key="efectividad_mantenimiento_registros"
    title="Efectividad en el Mantenimiento de Registros"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="efectividad_mantenimiento_registros_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en conservar los registros que demuestran que el personal cumple con los perfiles necesarios para el proceso estadístico?"
    name="efectividad_mantenimiento_registros_pregunta"
    value={formData.efectividad_mantenimiento_registros_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Efectividad en el Mantenimiento de Registros
  <EvidenciasDocumentales
    key="efectividad_mantenimiento_registros_evidencias"
    namePrefix="efectividad_mantenimiento_registros"
    evidencias={[
      formData.efectividad_mantenimiento_registros_evidencia1,
      formData.efectividad_mantenimiento_registros_evidencia2,
      formData.efectividad_mantenimiento_registros_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Implementación de Acciones de Entrenamiento
  <SectionTitle
    key="implementacion_acciones_entrenamiento"
    title="Implementación de Acciones de Entrenamiento"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="implementacion_acciones_entrenamiento_pregunta"
    label="Califique (1-5) ¿En qué medida la dependencia encargada de la operación estadística determina, implementa y documenta acciones de entrenamiento para asegurar la competencia del personal en el desarrollo de la operación estadística?"
    name="implementacion_acciones_entrenamiento_pregunta"
    value={formData.implementacion_acciones_entrenamiento_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Implementación de Acciones de Entrenamiento
  <EvidenciasDocumentales
    key="implementacion_acciones_entrenamiento_evidencias"
    namePrefix="implementacion_acciones_entrenamiento"
    evidencias={[
      formData.implementacion_acciones_entrenamiento_evidencia1,
      formData.implementacion_acciones_entrenamiento_evidencia2,
      formData.implementacion_acciones_entrenamiento_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Cumplimiento de Perfiles
  <SectionTitle
    key="cumplimiento_perfiles"
    title="Cumplimiento de Perfiles"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="cumplimiento_perfiles_pregunta"
    label="Califique de 1-5 ¿Cómo evalúa la dependencia encargada de la operación estadística la adecuación del personal a los perfiles determinados para el proceso estadístico?"
    name="cumplimiento_perfiles_pregunta"
    value={formData.cumplimiento_perfiles_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Cumplimiento de Perfiles
  <EvidenciasDocumentales
    key="cumplimiento_perfiles_evidencias"
    namePrefix="cumplimiento_perfiles"
    evidencias={[
      formData.cumplimiento_perfiles_evidencia1,
      formData.cumplimiento_perfiles_evidencia2,
      formData.cumplimiento_perfiles_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Sugerencias para Personal del Proceso Estadístico
  <SectionTitle
    key="sugerencias_personal_proceso_estadistico"
    title="Sugerencias para Personal del Proceso Estadístico"
  />,

  // Pregunta de Tipo Textarea
  <Sugerencias
    key="sugerencias_personal_proceso_estadistico_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y actualización de los usuarios y sus necesidades de información estadística?"
    name="sugerencias_personal_proceso_estadistico_pregunta"
    value={formData.sugerencias_personal_proceso_estadistico_pregunta}
    onChange={handleChange}
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_4_5"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
