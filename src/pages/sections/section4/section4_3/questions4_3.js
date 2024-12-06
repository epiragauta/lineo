// ./src/questions/questions4/questions4_3.js

import React from "react";
import { 
  SectionTitle,
  RadioQuestion,
  SliderQuestion,
  TextareaQuestion,
  EvidenciasDocumentales,
  Sugerencias,
  AccionesRequeridas,
} from "../../../../components/questions";

export const questions4_3 = (formData, handleChange, handleSelectChange) => [
  // Confidencialidad de Datos Recolectados e Información Estadística
  <SectionTitle
    key="confidencialidad-datos"
    title="Confidencialidad de Datos Recolectados e Información Estadística"
  />,

  <RadioQuestion
    key="confidencialidad_mecanismos"
    label="¿La dependencia encargada de la operación estadística ha implementado mecanismos que garantizan que los datos recolectados y la información estadística producida se conserven de manera confidencial conforme a la normatividad vigente de protección de datos personales y los Principios Fundamentales de las Estadísticas Oficiales de Naciones Unidas?"
    name="confidencialidad_mecanismos"
    options={["Sí", "No", "No Aplica"]}
    value={formData.confidencialidad_mecanismos}
    onChange={handleChange}
  />,

  <EvidenciasDocumentales
    key="confidencialidad_evidencias"
    namePrefix="confidencialidad"
    evidencias={[
      formData.confidencialidad_evidencia1,
      formData.confidencialidad_evidencia2,
      formData.confidencialidad_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Conservación Segura de Datos
  <SectionTitle
    key="conservacion-segura-datos"
    title="Conservación Segura de Datos"
  />,

  <RadioQuestion
    key="conservacion_segura"
    label="¿La entidad conserva los datos recolectados de forma segura para prevenir el acceso o uso no deseado, daños o pérdida fortuita?"
    name="conservacion_segura"
    options={["Sí", "No", "No Aplica"]}
    value={formData.conservacion_segura}
    onChange={handleChange}
  />,

  <EvidenciasDocumentales
    key="conservacion_evidencias"
    namePrefix="conservacion"
    evidencias={[
      formData.conservacion_evidencia1,
      formData.conservacion_evidencia2,
      formData.conservacion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Efectividad en la Conservación de Datos
  <SectionTitle
    key="efectividad-conservacion"
    title="Efectividad en la Conservación de Datos"
  />,

  <SliderQuestion
    key="efectividad_conservacion"
    label="Califique (1-5) ¿Qué tan efectiva es la entidad en conservar los datos recolectados de manera segura, garantizando su confidencialidad?"
    name="efectividad_conservacion"
    value={formData.efectividad_conservacion}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <EvidenciasDocumentales
    key="efectividad_evidencias"
    namePrefix="efectividad"
    evidencias={[
      formData.efectividad_evidencia1,
      formData.efectividad_evidencia2,
      formData.efectividad_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Cumplimiento con Normatividad de Protección de Datos
  <SectionTitle
    key="cumplimiento-normatividad"
    title="Cumplimiento con Normatividad de Protección de Datos"
  />,

  <SliderQuestion
    key="cumplimiento_normatividad"
    label="Califique (1-5) ¿En qué medida la entidad cumple con la normatividad vigente de protección de datos personales y los Principios Fundamentales de las Estadísticas Oficiales de Naciones Unidas en la gestión de datos recolectados?"
    name="cumplimiento_normatividad"
    value={formData.cumplimiento_normatividad}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <EvidenciasDocumentales
    key="cumplimiento_evidencias"
    namePrefix="cumplimiento"
    evidencias={[
      formData.cumplimiento_evidencia1,
      formData.cumplimiento_evidencia2,
      formData.cumplimiento_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Prevención de Acceso No Deseado y Pérdida de Datos
  <SectionTitle
    key="prevencion-acceso-perdida"
    title="Prevención de Acceso No Deseado y Pérdida de Datos"
  />,

  <TextareaQuestion
    key="prevencion_acceso_perdida"
    label="¿Cómo evalúa la entidad las medidas implementadas para prevenir el acceso o uso no deseado, daños o pérdida fortuita de los datos recolectados?"
    name="prevencion_acceso_perdida"
    value={formData.prevencion_acceso_perdida}
    onChange={handleChange}
    placeholder="Ingrese su evaluación"
    rows={4}
  />,

  <EvidenciasDocumentales
    key="prevencion_evidencias"
    namePrefix="prevencion"
    evidencias={[
      formData.prevencion_evidencia1,
      formData.prevencion_evidencia2,
      formData.prevencion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Sugerencias para Confidencialidad de Datos Recolectados e Información Estadística
  <SectionTitle
    key="sugerencias-confidencialidad"
    title="Sugerencias para Confidencialidad de Datos Recolectados e Información Estadística"
  />,

  <Sugerencias
    key="sugerencias_confidencialidad"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y actualización de los usuarios y sus necesidades de información estadística?"
    name="sugerencias_confidencialidad"
    value={formData.sugerencias_confidencialidad}
    handleChange={handleChange}
  />,

  // Acciones Requeridas
  <SectionTitle
    key="acciones-requeridas"
    title="Acciones requeridas"
  />,

  <AccionesRequeridas
    key="accionesRequeridas4_3"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
