// ./src/questions/questions4/questions4_6.js

import React from "react";
import { 
    SectionTitle,
    RadioQuestion,
    CheckboxQuestion,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
 } from "../../components/questions";

export const questions4_6 = (formData, handleChange, handleSelectChange) => [

  // // Título de la Sección
  // <SectionTitle
  //   key="titulo-seccion-4-6"
  //   title="4.6 - Uso y Aplicación de Lineamientos Estadísticos"
  // />,

  // // Subtítulo: Introducción
  // <SectionTitle
  //   key="introduccion-4-6"
  //   title="Introducción"
  // />,

  // // Texto de Introducción
  // <div key="texto-introduccion-4-6">
  //   <p>
  //     El uso y la aplicación de lineamientos estadísticos son esenciales para la estandarización y la calidad de los productos generados. La NTC PE 1000:2020, establece la necesidad de adoptar normas, metodologías y buenas prácticas reconocidas que garanticen la consistencia, comparabilidad y utilidad de los datos. La implementación rigurosa de estos lineamientos asegura la alineación con estándares nacionales e internacionales, fortaleciendo la credibilidad del proceso estadístico.
  //   </p>
  // </div>,

  // Subtítulo: Implementación de Buenas Prácticas Estadísticas
  <SectionTitle
    key="implementacion_buenas_practicas"
    title="Implementación de Buenas Prácticas Estadísticas"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="implementacion_buenas_practicas_pregunta"
    label="¿La dependencia encargada de la operación estadística asegura que en el proceso estadístico se implementan las buenas prácticas estadísticas, los estándares estadísticos o geográficos y los lineamientos emitidos por el DANE?"
    name="implementacion_buenas_practicas_pregunta"
    options={["Sí", "No"]}
    value={formData.implementacion_buenas_practicas_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Checkbox Condicional
  <CheckboxQuestion
    key="implementacion_buenas_practicas_checkbox"
    label="Si la respuesta es Sí, ¿se incluye en la implementación los siguientes elementos? Seleccione todas las opciones que correspondan:"
    name="implementacion_buenas_practicas_incluye"
    options={[
      "Conceptos Estadísticos",
      "Variables Estadísticas",
      "Nomenclaturas y Clasificaciones",
      "Unidades Estadísticas"
    ]}
    values={formData.implementacion_buenas_practicas_incluye || []}
    onChange={handleChange}
  />,

  // Evidencias Documentales para Implementación de Buenas Prácticas Estadísticas
  <EvidenciasDocumentales
    key="implementacion_buenas_practicas_evidencias"
    namePrefix="implementacion_buenas_practicas"
    evidencias={[
      formData.implementacion_buenas_practicas_evidencia1,
      formData.implementacion_buenas_practicas_evidencia2,
      formData.implementacion_buenas_practicas_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Uso de Estándares Estadísticos
  <SectionTitle
    key="uso_estandares_estadisticos"
    title="Uso de Estándares Estadísticos"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="uso_estandares_estadisticos_pregunta"
    label="¿La dependencia encargada de la operación estadística utiliza estándares estadísticos emitidos por el DANE, y en caso de no estar disponibles, emplea estándares nacionales o internacionales?"
    name="uso_estandares_estadisticos_pregunta"
    options={["Sí", "No"]}
    value={formData.uso_estandares_estadisticos_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Range Condicional
  <SliderQuestion
    key="uso_estandares_estadisticos_calificacion"
    label="Si la respuesta es Sí, Califique de 1-5 ¿Qué tanto se asegura la articulación con el entorno estadístico internacional?"
    name="uso_estandares_estadisticos_calificacion"
    value={formData.uso_estandares_estadisticos_calificacion}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Uso de Estándares Estadísticos
  <EvidenciasDocumentales
    key="uso_estandares_estadisticos_evidencias"
    namePrefix="uso_estandares_estadisticos"
    evidencias={[
      formData.uso_estandares_estadisticos_evidencia1,
      formData.uso_estandares_estadisticos_evidencia2,
      formData.uso_estandares_estadisticos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Documentación y Aplicación de Estándares
  <SectionTitle
    key="documentacion_aplicacion_estandares"
    title="Documentación y Aplicación de Estándares"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="documentacion_aplicacion_estandares_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la documentación y aplicación de los estándares estadísticos en el proceso estadístico?"
    name="documentacion_aplicacion_estandares_pregunta"
    value={formData.documentacion_aplicacion_estandares_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Documentación y Aplicación de Estándares
  <EvidenciasDocumentales
    key="documentacion_aplicacion_estandares_evidencias"
    namePrefix="documentacion_aplicacion_estandares"
    evidencias={[
      formData.documentacion_aplicacion_estandares_evidencia1,
      formData.documentacion_aplicacion_estandares_evidencia2,
      formData.documentacion_aplicacion_estandares_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Comparabilidad e Interoperabilidad
  <SectionTitle
    key="comparabilidad_interoperabilidad"
    title="Comparabilidad e Interoperabilidad"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="comparabilidad_interoperabilidad_pregunta"
    label="Califique (1-5) en qué medida la dependencia encargada de la operación estadística asegura la comparabilidad, integración e interoperabilidad en el uso de los estándares estadísticos?"
    name="comparabilidad_interoperabilidad_pregunta"
    value={formData.comparabilidad_interoperabilidad_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Comparabilidad e Interoperabilidad
  <EvidenciasDocumentales
    key="comparabilidad_interoperabilidad_evidencias"
    namePrefix="comparabilidad_interoperabilidad"
    evidencias={[
      formData.comparabilidad_interoperabilidad_evidencia1,
      formData.comparabilidad_interoperabilidad_evidencia2,
      formData.comparabilidad_interoperabilidad_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Evaluación de Estándares Estadísticos
  <SectionTitle
    key="evaluacion_estandares_estadisticos"
    title="Evaluación de Estándares Estadísticos"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="evaluacion_estandares_estadisticos_pregunta"
    label="¿Cómo evalúa de 1 a 5? la dependencia encargada de la operación estadística la aplicación de los estándares estadísticos en relación con los lineamientos emitidos por el DANE y los estándares internacionales?"
    name="evaluacion_estandares_estadisticos_pregunta"
    value={formData.evaluacion_estandares_estadisticos_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Evaluación de Estándares Estadísticos
  <EvidenciasDocumentales
    key="evaluacion_estandares_estadisticos_evidencias"
    namePrefix="evaluacion_estandares_estadisticos"
    evidencias={[
      formData.evaluacion_estandares_estadisticos_evidencia1,
      formData.evaluacion_estandares_estadisticos_evidencia2,
      formData.evaluacion_estandares_estadisticos_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Sugerencias para Uso y Aplicación de Lineamientos Estadísticos
  <SectionTitle
    key="sugerencias_uso_lineamientos"
    title="Sugerencias para Uso y Aplicación de Lineamientos Estadísticos"
  />,

  // Pregunta de Tipo Sugerencias
  <Sugerencias
    key="sugerencias_uso_lineamientos_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la implementación, aplicación y documentación de los lineamientos y estándares estadísticos en el proceso estadístico?"
    name="sugerencias_uso_lineamientos_pregunta"
    value={formData.sugerencias_uso_lineamientos_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_4_6"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_4_6"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
