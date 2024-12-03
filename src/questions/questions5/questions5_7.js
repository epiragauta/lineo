// ./src/questions/questions5/questions5_7.js

import React from "react";
import {
    SectionTitle,
    SliderQuestion,
    Sugerencias,
    EvidenciasDocumentales,
    AccionesRequeridas
} from "../../components/questions";

export const questions5_7 = (formData, handleChange, handleSelectChange) => [

//   // Título de la Sección
//   <SectionTitle
//     key="titulo-seccion-5-7"
//     title="Sección 5.7 - Plan General de la Operación Estadística"
//   />,

//   // Subtítulo: Introducción
//   <SectionTitle
//     key="introduccion-5-7"
//     title="Introducción"
//   />,
//   <div key="texto-introduccion-5-7">
//     <p>
//       El plan general de la operación estadística, conforme a la NTC PE 1000:2020, es un documento integrador que organiza las actividades, recursos y cronogramas necesarios para desarrollar el proceso estadístico. Esta sección detalla la importancia de definir roles y responsabilidades, establecer controles de calidad y anticipar posibles riesgos o contingencias. Un plan bien estructurado garantiza la coherencia y la eficiencia en todas las fases del proceso, contribuyendo al éxito de la operación estadística.
//     </p>
//   </div>,

  // Preguntas con rango y evidencias documentales
  ...[
    {
      subtitle: "Determinación y Documentación de las Necesidades de Información",
      question: "¿En qué medida la dependencia encargada de la operación estadística determina y documenta adecuadamente las necesidades confirmadas de información estadística en el plan general de la operación?",
      name: "determinacion_documentacion_necesidades_informacion"
    },
    {
      subtitle: "Definición y Documentación de los Objetivos de la Operación Estadística",
      question: "¿Cómo evalúa la dependencia encargada de la operación estadística en la definición y documentación de los objetivos generales y específicos de la operación estadística en el plan general?",
      name: "definicion_documentacion_objetivos"
    },
    {
      subtitle: "Alcance Temático y Definición de Conceptos y Variables",
      question: "¿En qué medida la dependencia encargada de la operación estadística define y documenta el alcance temático propuesto, así como los conceptos y variables principales de la operación estadística en el plan general?",
      name: "alcance_tematico_definicion_conceptos"
    },
    {
      subtitle: "Formulación de Indicadores Estadísticos y Selección de Fuentes de Datos",
      question: "¿Cómo evalúa la dependencia encargada de la operación estadística la formulación de indicadores estadísticos y la selección de fuentes de datos en el plan general de la operación estadística?",
      name: "formulacion_indicadores_fuentes_datos"
    },
    {
      subtitle: "Exploración de la Metodología y Métodos de Recolección de Datos",
      question: "¿En qué medida la dependencia encargada de la operación estadística explora y documenta la metodología a desarrollar y los métodos de recolección o acopio de datos en el plan general?",
      name: "exploracion_metodologia_metodos_recoleccion"
    },
    {
      subtitle: "Infraestructura Requerida y Pruebas de Diseño y Construcción",
      question: "¿Cómo evalúa la dependencia encargada de la operación estadística la identificación de la infraestructura requerida y la planificación de las pruebas de diseño y construcción en el plan general de la operación estadística?",
      name: "infraestructura_pruebas_diseno_construccion"
    },
    {
      subtitle: "Elaboración del Cronograma y Asignación de Recursos",
      question: "¿En qué medida la dependencia encargada de la operación estadística elabora un cronograma detallado y asigna los recursos necesarios para la ejecución de la operación estadística en el plan general?",
      name: "elaboracion_cronograma_asignacion_recursos"
    }
  ].map(({ subtitle, question, name }) => [
    <SectionTitle key={`subtitle-${name}`} title={subtitle} />,
    <SliderQuestion
      key={`slider-${name}`}
      label={question}
      name={name}
      value={formData[name]}
      onChange={handleSelectChange}
      min={1}
      max={5}
      step={1}
    />,
    <EvidenciasDocumentales
      key={`evidencias-${name}`}
      namePrefix={name}
      evidencias={[
        formData[`${name}_evidencia1`],
        formData[`${name}_evidencia2`],
        formData[`${name}_evidencia3`],
      ]}
      handleChange={handleChange}
    />
  ]),

  // Subtítulo: Mejorar el Plan General de la Operación Estadística
  <SectionTitle
    key="mejorar_plan_general_operacion"
    title="Mejorar el Plan General de la Operación Estadística"
  />,
  <Sugerencias
    key="mejorar_plan_general_operacion_pregunta"
    label="¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la elaboración, documentación y ejecución del plan general para las operaciones estadísticas?"
    name="mejorar_plan_general_operacion_pregunta"
    value={formData.mejorar_plan_general_operacion_pregunta}
    onChange={handleChange}
    placeholder="Ingrese sus sugerencias aquí..."
    rows={4}
  />,

  // Subtítulo: Acciones Requeridas
  <SectionTitle
    key="acciones_requeridas_5-7"
    title="Acciones requeridas"
  />,
  <AccionesRequeridas
    key="acciones_requeridas_5-7"
    accionesData={{
      accion: formData.accion,
      responsableSNS: formData.responsableSNS,
      fechaCumplimiento: formData.fechaCumplimiento,
    }}
    handleChange={handleChange}
  />
];
