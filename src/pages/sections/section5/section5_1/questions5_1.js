// ./src/questions/questions5/questions5_1.js

import React from "react";
import { 
    SectionTitle,
    RadioQuestion,
    CheckboxQuestion,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
} from "../../../../components/questions";

export const questions5_1 = (formData, handleChange, handleSelectChange) => [

//   // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-5-1"
//     title="Sección 5.1 - Identificación de Usuarios y Necesidades de Información"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-5-1"
//     title="Introducción"
//   />,

//   // Texto de Introducción
//   <div key="texto-introduccion-5-1">
//     <p>
//       La identificación de usuarios y sus necesidades de información constituye el punto inicial indispensable para garantizar que las operaciones estadísticas se ajusten a los requerimientos específicos de sus beneficiarios. Según la NTC PE 1000:2020, esta sección describe directrices para reconocer y caracterizar a los usuarios potenciales y sus demandas, priorizando un enfoque participativo y estructurado. Este proceso permite alinear la planeación estadística con las expectativas y los objetivos estratégicos definidos por la entidad productora de estadísticas.
//     </p>
//   </div>,

  // Subtítulo: Identificación de Usuarios Relevantes
  <SectionTitle
    key="identificacion_usuarios_relevantes"
    title="Identificación de Usuarios Relevantes"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="identificacion_usuarios_relevantes_pregunta"
    label="¿La entidad identifica adecuadamente a los usuarios internos y externos que tienen necesidades de información estadística?"
    name="identificacion_usuarios_relevantes_pregunta"
    options={["Sí", "No"]}
    value={formData.identificacion_usuarios_relevantes_pregunta}
    onChange={handleChange}
  />,

  // Preguntas de Tipo Checkbox Condicional
  <CheckboxQuestion
    key="identificacion_usuarios_relevantes_detalle"
    label="Si la respuesta es Sí, la identificación incluye:"
    name="identificacion_usuarios_relevantes_detalle"
    options={[
      "Nombre de la persona y los datos de identificación de la entidad u organización",
      "Datos de contacto",
      "El sector o la temática a la que pertenece"
    ]}
    values={formData.identificacion_usuarios_relevantes_detalle || []}
    onChange={handleChange}
    subLabels={[
      "a) Nombre de la persona y los datos de identificación de la entidad u organización",
      "b) Datos de contacto",
      "c) El sector o la temática a la que pertenece"
    ]}
  />,

  // Evidencias Documentales para Identificación de Usuarios Relevantes
  <EvidenciasDocumentales
    key="identificacion_usuarios_relevantes_evidencias"
    namePrefix="identificacion_usuarios_relevantes"
    evidencias={[
      formData.identificacion_usuarios_relevantes_evidencia1,
      formData.identificacion_usuarios_relevantes_evidencia2,
      formData.identificacion_usuarios_relevantes_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Mecanismos de Consulta a Usuarios
  <SectionTitle
    key="mecanismos_consulta_usuarios"
    title="Mecanismos de Consulta a Usuarios"
  />,

  // Pregunta de Tipo Ratio
  <RadioQuestion
    key="mecanismos_consulta_usuarios_pregunta"
    label="¿La entidad define, implementa y mantiene los mecanismos de consulta que permiten obtener y analizar las necesidades de información de los usuarios?"
    name="mecanismos_consulta_usuarios_pregunta"
    options={["Sí", "No"]}
    value={formData.mecanismos_consulta_usuarios_pregunta}
    onChange={handleChange}
  />,

  // Pregunta de Tipo Checkbox Condicional
  <CheckboxQuestion
    key="mecanismos_consulta_usuarios_metodos"
    label="Si la respuesta es Sí, ¿Cuáles de los siguientes mecanismos de consulta utiliza la Entidad para la identificación de usuarios y sus necesidades de información estadística? Seleccione todas las opciones que correspondan."
    name="mecanismos_consulta_usuarios_metodos"
    options={[
      "Encuestas",
      "Reuniones con expertos en la temática de la operación estadística",
      "Reuniones de trabajo con partes interesadas especializadas",
      "Mesas intersectoriales",
      "Solicitudes directas de información estadística",
      "Documentos de política pública",
      "Planes (estratégicos, acción, o de mejora)",
      "Consultas de referentes (nacionales o internacionales)"
    ]}
    values={formData.mecanismos_consulta_usuarios_metodos || []}
    onChange={handleChange}
    subLabels={[
      "a) Encuestas",
      "b) Reuniones con expertos en la temática de la operación estadística",
      "c) Reuniones de trabajo con partes interesadas especializadas",
      "d) Mesas intersectoriales",
      "e) Solicitudes directas de información estadística",
      "f) Documentos de política pública",
      "g) Planes (estratégicos, acción, o de mejora)",
      "h) Consultas de referentes (nacionales o internacionales)"
    ]}
  />,

  // Evidencias Documentales para Mecanismos de Consulta a Usuarios
  <EvidenciasDocumentales
    key="mecanismos_consulta_usuarios_evidencias"
    namePrefix="mecanismos_consulta_usuarios"
    evidencias={[
      formData.mecanismos_consulta_usuarios_evidencia1,
      formData.mecanismos_consulta_usuarios_evidencia2,
      formData.mecanismos_consulta_usuarios_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Documentación y Conservación de la Información de Usuarios
  <SectionTitle
    key="documentacion_conservacion_info_usuarios"
    title="Documentación y Conservación de la Información de Usuarios"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="documentacion_conservacion_info_usuarios_pregunta"
    label="Califique (1-5) qué tan efectiva es la entidad en documentar, conservar y actualizar la información de identificación de los usuarios."
    name="documentacion_conservacion_info_usuarios_pregunta"
    value={formData.documentacion_conservacion_info_usuarios_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Documentación y Conservación de la Información de Usuarios
  <EvidenciasDocumentales
    key="documentacion_conservacion_info_usuarios_evidencias"
    namePrefix="documentacion_conservacion_info_usuarios"
    evidencias={[
      formData.documentacion_conservacion_info_usuarios_evidencia1,
      formData.documentacion_conservacion_info_usuarios_evidencia2,
      formData.documentacion_conservacion_info_usuarios_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Identificación y Documentación de Necesidades de Información
  <SectionTitle
    key="identificacion_documentacion_necesidades_info"
    title="Identificación y Documentación de Necesidades de Información"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="identificacion_documentacion_necesidades_info_pregunta"
    label="¿Califique (1-5) en qué medida la entidad identifica, documenta y conserva las necesidades de información estadística de los usuarios identificados?"
    name="identificacion_documentacion_necesidades_info_pregunta"
    value={formData.identificacion_documentacion_necesidades_info_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Identificación y Documentación de Necesidades de Información
  <EvidenciasDocumentales
    key="identificacion_documentacion_necesidades_info_evidencias"
    namePrefix="identificacion_documentacion_necesidades_info"
    evidencias={[
      formData.identificacion_documentacion_necesidades_info_evidencia1,
      formData.identificacion_documentacion_necesidades_info_evidencia2,
      formData.identificacion_documentacion_necesidades_info_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Revisión y Actualización de Necesidades de Información
  <SectionTitle
    key="revision_actualizacion_necesidades_info"
    title="Revisión y Actualización de Necesidades de Información"
  />,

  // Pregunta de Tipo Range
  <SliderQuestion
    key="revision_actualizacion_necesidades_info_pregunta"
    label="¿Cómo evalúa (1-5) la forma en la que la entidad hace la revisión y actualización periódica de las necesidades de información de los usuarios, según lo especificado en el documento metodológico de la operación estadística?"
    name="revision_actualizacion_necesidades_info_pregunta"
    value={formData.revision_actualizacion_necesidades_info_pregunta}
    onChange={handleSelectChange}
    min={1}
    max={5}
    step={1}
  />,

  // Evidencias Documentales para Revisión y Actualización de Necesidades de Información
  <EvidenciasDocumentales
    key="revision_actualizacion_necesidades_info_evidencias"
    namePrefix="revision_actualizacion_necesidades_info"
    evidencias={[
      formData.revision_actualizacion_necesidades_info_evidencia1,
      formData.revision_actualizacion_necesidades_info_evidencia2,
      formData.revision_actualizacion_necesidades_info_evidencia3,
    ]}
    handleChange={handleChange}
  />,

  // Subtítulo: Sugerencias para mejorar la Identificación de Usuarios y Necesidades de Información
  <SectionTitle
    key="sugerencias_mejorar_identificacion_usuarios_necesidades_info"
    title="Sugerencias para mejorar la Identificación de Usuarios y Necesidades de Información"
  />,

  // Pregunta de Tipo Textarea
  <Sugerencias
    key="sugerencias_mejorar_identificacion_usuarios_necesidades_info_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, documentación y actualización de los usuarios y sus necesidades de información estadística?"
    name="sugerencias_mejorar_identificacion_usuarios_necesidades_info_pregunta"
    value={formData.sugerencias_mejorar_identificacion_usuarios_necesidades_info_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_5-1"
    title="Acciones requeridas"
  />,

  // Componente de Acciones Requeridas
  <AccionesRequeridas
    key="acciones_requeridas_5-1"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />,
];
