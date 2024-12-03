// ./src/questions/questions4/questions4_4.js

import React from "react";
import { 
    SectionTitle,
    RadioQuestion,
    CheckboxQuestion,
    SliderQuestion,
    TextareaQuestion,
    EvidenciasDocumentales,
    AccionesRequeridas,
    Sugerencias
 } from "../../components/questions";

export const questions4_4 = (formData, handleChange, handleSelectChange) => [

  // Documentación Metodológica y de Soporte
  <SectionTitle
    key="documentacion-metodologica"
    title="Documentación Metodológica y de Soporte"
  />,

  <RadioQuestion
    key="documentacion_metodologica_pregunta"
    label="¿La dependencia encargada de la operación estadística elabora, implementa, conserva y actualiza adecuadamente el documento metodológico y la ficha metodológica?"
    name="documentacion_metodologica_pregunta"
    options={["Sí", "No", "No Aplica"]}
    value={formData.documentacion_metodologica_pregunta}
    onChange={handleChange}
  />,

  <CheckboxQuestion
    key="documentacion_metodologica_checkbox"
    label="Si la respuesta es Sí, la documentación incluye. Seleccione todas las opciones que correspondan:"
    name="documentacion_metodologica_incluye"
    options={[
      "Manuales",
      "Procedimientos",
      "Guías",
      "Instructivos",
      "Especificaciones",
      "Fichas Técnicas",
      "Otros Documentos"
    ]}
    values={formData.documentacion_metodologica_incluye || []}
    onChange={handleChange}
  />,

  // Disponibilidad de la Documentación
  <SectionTitle
    key="disponibilidad-documentacion"
    title="Disponibilidad de la Documentación"
  />,

  <RadioQuestion
    key="disponibilidad_documentacion_pregunta"
    label="¿La dependencia encargada de la operación estadística asegura que toda la documentación (como el documento metodológico y otros documentos de soporte) esté disponible para su uso antes de iniciar la fase de recolección o acopio?"
    name="disponibilidad_documentacion_pregunta"
    options={["Sí", "No"]}
    value={formData.disponibilidad_documentacion_pregunta}
    onChange={handleChange}
  />,

  <EvidenciasDocumentales
    key="disponibilidad_documentacion_evidencias"
    namePrefix="disponibilidad_documentacion"
    evidencias={[
      formData.disponibilidad_documentacion_evidencia1,
      formData.disponibilidad_documentacion_evidencia2,
      formData.disponibilidad_documentacion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Conservación y Evidencia del Proceso Estadístico
  <SectionTitle
    key="conservacion_evidencia"
    title="Conservación y Evidencia del Proceso Estadístico"
  />,

  <SliderQuestion
    key="conservacion_evidencia_pregunta"
    label="Califique (1-5) ¿Qué tan efectiva es la dependencia encargada de la operación estadística en conservar la información documentada que evidencia la implementación del proceso estadístico, como formatos diligenciados, registros, actas, videograbaciones, entre otros?"
    name="conservacion_evidencia_pregunta"
    value={formData.conservacion_evidencia_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <EvidenciasDocumentales
    key="conservacion_evidencia_evidencias"
    namePrefix="conservacion_evidencia"
    evidencias={[
      formData.conservacion_evidencia_evidencia1,
      formData.conservacion_evidencia_evidencia2,
      formData.conservacion_evidencia_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Identificación y Descripción de la Información Documentada
  <SectionTitle
    key="identificacion_descripcion"
    title="Identificación y Descripción de la Información Documentada"
  />,

  <SliderQuestion
    key="identificacion_descripcion_pregunta"
    label="Califique (1-5) ¿En qué medida la dependencia encargada de la operación estadística asegura que la identificación y descripción de la información documentada sea apropiada, según los procedimientos establecidos en el sistema de gestión de la entidad?"
    name="identificacion_descripcion_pregunta"
    value={formData.identificacion_descripcion_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  <EvidenciasDocumentales
    key="identificacion_descripcion_evidencias"
    namePrefix="identificacion_descripcion"
    evidencias={[
      formData.identificacion_descripcion_evidencia1,
      formData.identificacion_descripcion_evidencia2,
      formData.identificacion_descripcion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Control y Protección de la Información Documentada
  <SectionTitle
    key="control_proteccion_informacion"
    title="Control y Protección de la Información Documentada"
  />,

  <TextareaQuestion
    key="control_proteccion_pregunta"
    label="¿Cómo evalúa la dependencia encargada de la operación estadística el control y protección de la información documentada, asegurando su disponibilidad, idoneidad, protección adecuada, distribución, acceso, recuperación, almacenamiento, preservación, conservación y actualización?"
    name="control_proteccion_pregunta"
    value={formData.control_proteccion_pregunta}
    onChange={handleChange}
    placeholder="Ingrese su evaluación"
    rows={4}
  />,

  <EvidenciasDocumentales
    key="control_proteccion_evidencias"
    namePrefix="control_proteccion"
    evidencias={[
      formData.control_proteccion_evidencia1,
      formData.control_proteccion_evidencia2,
      formData.control_proteccion_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Sugerencias para Información Documentada del Proceso Estadístico
  <SectionTitle
    key="sugerencias_informacion_documentada"
    title="Sugerencias para Información Documentada del Proceso Estadístico"
  />,

  <Sugerencias
    key="sugerencias_informacion_documentada_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y actualización de los usuarios y sus necesidades de información estadística?"
    name="sugerencias_informacion_documentada_pregunta"
    value={formData.sugerencias_informacion_documentada_pregunta}
    onChange={handleChange}
    rows={4}
  />,

  // Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas"
    title="Acciones requeridas"
  />,

  <AccionesRequeridas
    key="acciones_requeridas_4_4"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
