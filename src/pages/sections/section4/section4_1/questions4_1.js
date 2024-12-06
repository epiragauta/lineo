// ./src/questions/questions4/questions4_1.js

import React from "react";
import { 
  SectionTitle,
  RadioQuestion,
  CheckboxQuestion,
  SliderQuestion,
  EvidenciasDocumentales,
  Sugerencias,
  AccionesRequeridas,
} from "../../../../components/questions";

export const questions4_1 = (formData, handleChange, handleSelectChange) => [
  // Responsabilidad de Proporcionar Recursos
  <SectionTitle key="resp-proporcionar-recursos" title="Responsabilidad de Proporcionar Recursos" />,
  
  <RadioQuestion
    key="respRecursosPregunta1"
    label="¿La Alta Dirección proporciona los recursos necesarios para implementar lo establecido en la normativa vigente?"
    name="respRecursosPregunta1"
    options={["Sí", "No", "No Aplica"]}
    value={formData.respRecursosPregunta1}
    onChange={handleChange}
  />,
  
  <CheckboxQuestion
    key="respRecursosPregunta2"
    label="Si la respuesta es Sí, ¿La entidad asegura la disponibilidad de recursos adecuados para las siguientes áreas? (Seleccione todas las que apliquen)"
    name="respRecursosPregunta2"
    options={[
      "Implementación de la Norma Técnica de la Calidad del Proceso Estadístico",
      "Mantenimiento y mejora del proceso estadístico",
      "Compromiso con la transparencia, la confidencialidad y la imparcialidad",
      "Continuidad de la operación estadística",
    ]}
    values={formData.respRecursosPregunta2}
    onChange={handleChange}
  />,
  
  <EvidenciasDocumentales
    key="respRecursosEvidencias"
    namePrefix="respRecursos"
    evidencias={[
      formData.respRecursosEvidencia1,
      formData.respRecursosEvidencia2,
      formData.respRecursosEvidencia3,
    ]}
    handleChange={handleChange}
  />,
  
  // Responsabilidad en la Mejora del Proceso Estadístico
  <SectionTitle key="resp-mejora-proceso" title="Responsabilidad en la Mejora del Proceso Estadístico" />,
  
  <RadioQuestion
    key="respMejoraPregunta1"
    label="¿La alta dirección mantiene y mejora el proceso estadístico de acuerdo con el marco legal y las funciones de la entidad?"
    name="respMejoraPregunta1"
    options={["Sí", "No"]}
    value={formData.respMejoraPregunta1}
    onChange={handleChange}
  />,
  
  <SliderQuestion
    key="evaluacionPregunta1"
    label="Califique (1-5) qué tan efectiva es la alta dirección en proporcionar los recursos necesarios y mantener el compromiso con la normativa y el proceso estadístico:"
    name="evaluacionPregunta1"
    value={formData.evaluacionPregunta1}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,
  
  <EvidenciasDocumentales
    key="respMejoraEvidencias"
    namePrefix="respMejora"
    evidencias={[
      formData.respMejoraEvidencia1,
      formData.respMejoraEvidencia2,
      formData.respMejoraEvidencia3,
    ]}
    handleChange={handleChange}
  />,
  
  // Asignación y Comunicación de Roles y Responsabilidades
  <SectionTitle key="asignacion-roles" title="Asignación y Comunicación de Roles y Responsabilidades" />,
  
  <RadioQuestion
    key="asignacionPregunta1"
    label="¿La Alta Dirección proporciona los recursos necesarios para implementar lo establecido en la normativa vigente?"
    name="asignacionPregunta1"
    options={["Sí", "No", "No Aplica"]}
    value={formData.asignacionPregunta1}
    onChange={handleChange}
  />,
  
  <CheckboxQuestion
    key="asignacionPregunta2"
    label="Si la respuesta es Sí, ¿La entidad asegura la disponibilidad de recursos adecuados para las siguientes áreas? (Seleccione todas las que apliquen)"
    name="asignacionPregunta2"
    options={[
      "Roles específicos",
      "Responsabilidades correspondientes",
      "Cumplimiento de requisitos",
    ]}
    values={formData.asignacionPregunta2}
    onChange={handleChange}
  />,
  
  <EvidenciasDocumentales
    key="asignacionEvidencias"
    namePrefix="asignacion"
    evidencias={[
      formData.asignacionEvidencia1,
      formData.asignacionEvidencia2,
      formData.asignacionEvidencia3,
    ]}
    handleChange={handleChange}
  />,
  
  // Evaluación de la Responsabilidad de la Alta Dirección
  <SectionTitle key="evaluacion-responsabilidad" title="Evaluación de la Responsabilidad de la Alta Dirección" />,
  
  <SliderQuestion
    key="evaluacionPregunta1"
    label="Califique (1-5) qué tan efectiva es la alta dirección en proporcionar los recursos necesarios y mantener el compromiso con la normativa y el proceso estadístico:"
    name="evaluacionPregunta1"
    value={formData.evaluacionPregunta1}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,
  
  <EvidenciasDocumentales
    key="evaluacionEvidencias"
    namePrefix="evaluacion"
    evidencias={[
      formData.evaluacionEvidencia1,
      formData.evaluacionEvidencia2,
      formData.evaluacionEvidencia3,
    ]}
    handleChange={handleChange}
  />,
  
  // Sugerencias para Responsabilidades de la Alta Dirección
  <SectionTitle key="sugerencias-responsabilidad" title="Sugerencias para Responsabilidades de la Alta Dirección" />,
  
  <Sugerencias
    key="sugerenciasComentario"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y actualización de los usuarios y sus necesidades de información estadística?"
    name="sugerenciasComentario"
    value={formData.sugerenciasComentario}
    handleChange={handleChange}
  />,
  
  // Acciones requeridas
  <SectionTitle key="acciones-requeridas" title="Acciones requeridas" />,
  
  <AccionesRequeridas
    key="accionesRequeridas"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
