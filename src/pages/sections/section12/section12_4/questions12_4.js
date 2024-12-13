export const questions12_4 = [

  // Subtítulo: Evaluación de las Fases del Proceso Estadístico
  {
    type: "sectionTitle",
    key: "evaluacion_fases_proceso_estadistico_12_1",
    title: "Evaluación de las Fases del Proceso Estadístico",
  },

  // Pregunta de Tipo Ratio: Evaluaciones al culminar cada fase
  {
    type: "radio",
    key: "evaluaciones_culminar_fase_pregunta_12_1",
    label: "¿La dependencia encargada de la operación estadística realiza evaluaciones del desempeño al culminar cada una de las fases del proceso estadístico?",
    name: "evaluaciones_culminar_fase_pregunta_12_1",
    options: ["Sí", "No"],
    initialValue: "Sí",
  },

  // Subtítulo: Revisión del Diseño del Proceso
  {
    type: "sectionTitle",
    key: "revision_diseno_proceso_12_1",
    title: "Revisión del Diseño del Proceso",
  },

  // Pregunta de Tipo Ratio: Revisiones periódicas del diseño del proceso
  {
    type: "radio",
    key: "revisiones_periodicas_diseno_proceso_pregunta_12_1",
    label: "¿La dependencia encargada de la operación estadística realiza revisiones periódicas del diseño del proceso estadístico a intervalos planificados?",
    name: "revisiones_periodicas_diseno_proceso_pregunta_12_1",
    options: ["Sí", "No"],
    initialValue: "Sí",
  },

  // Pregunta de Tipo Checkbox: Aspectos evaluados en la revisión del diseño
  {
    type: "checkbox",
    key: "aspectos_evaluados_revision_diseno_pregunta_12_1",
    label: "Si la respuesta es Sí, ¿la revisión incluye evaluación de cambios en los siguientes aspectos? Seleccione todas las que considere",
    name: "aspectos_evaluados_revision_diseno_pregunta_12_1",
    options: [
      "a) Objeto de estudio",
      "b) Necesidades de los usuarios",
      "c) Normatividad",
      "d) Métodos de producción estadística",
      "e) Disponibilidad de datos",
    ],
    initialValue: [],
  },

  // Subtítulo: Documentación de Resultados y Acciones de Mejora
  {
    type: "sectionTitle",
    key: "documentacion_resultados_acciones_mejora_12_1",
    title: "Documentación de Resultados y Acciones de Mejora",
  },

  // Pregunta de Tipo Ratio: Documentación de resultados y acciones de mejora
  {
    type: "radio",
    key: "documentacion_resultados_acciones_mejora_pregunta_12_1",
    label: "¿La dependencia encargada de la operación estadística documenta los resultados de la revisión del diseño y las acciones de mejora, cuando aplicable?",
    name: "documentacion_resultados_acciones_mejora_pregunta_12_1",
    options: ["Sí", "No"],
    initialValue: "Sí",
  },

  // Subtítulo: Evaluación Final del Proceso Estadístico
  {
    type: "sectionTitle",
    key: "evaluacion_final_proceso_estadistico_12_1",
    title: "Evaluación Final del Proceso Estadístico",
  },

  // Pregunta de Tipo Ratio: Evaluación final para mejora continua y lecciones aprendidas
  {
    type: "radio",
    key: "evaluacion_final_mejora_continua_pregunta_12_1",
    label: "¿La dependencia encargada de la operación estadística realiza una evaluación final del proceso estadístico para su mejora continua y lecciones aprendidas?",
    name: "evaluacion_final_mejora_continua_pregunta_12_1",
    options: ["Sí", "No"],
    initialValue: "Sí",
  },

  // Pregunta de Tipo Ratio: Inclusión de análisis de hallazgos en la evaluación final
  {
    type: "radio",
    key: "inclusion_analisis_hallazgos_evaluacion_final_pregunta_12_1",
    label: "Si la respuesta es sí, ¿la evaluación final incluye el análisis de hallazgos, conclusiones y recomendaciones de evaluaciones anteriores?",
    name: "inclusion_analisis_hallazgos_evaluacion_final_pregunta_12_1",
    options: ["Sí", "No"],
    initialValue: "Sí",
  },

  // Subtítulo: Análisis de Resultados del Seguimiento y Medición
  {
    type: "sectionTitle",
    key: "analisis_resultados_seguimiento_medicion_12_1",
    title: "Análisis de Resultados del Seguimiento y Medición",
  },

  // Pregunta de Tipo Ratio: Análisis y documentación de resultados del seguimiento y medición
  {
    type: "radio",
    key: "analisis_documentacion_resultados_seguimiento_pregunta_12_1",
    label: "¿La dependencia encargada de la operación estadística analiza y documenta los resultados del mecanismo de seguimiento y medición del proceso estadístico, incluyendo las dificultades encontradas y las acciones tomadas para enfrentarlas?",
    name: "analisis_documentacion_resultados_seguimiento_pregunta_12_1",
    options: ["Sí", "No"],
    initialValue: "Sí",
  },

  // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
  {
    type: "textarea",
    key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_12_1",
    label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
    name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_12_1",
    initialValue: "",
  },

  // Evidencias Documentales para Análisis de la evaluación del desempeño
  {
    type: "evidencias",
    key: "evidencias_analisis_evaluacion_desempeno_12_1",
    namePrefix: "analisis_evaluacion_desempeno_12_1",
    fields: [
      { name: "analisis_evaluacion_desempeno_evidencia1_12_1", initialValue: "" },
      { name: "analisis_evaluacion_desempeno_evidencia2_12_1", initialValue: "" },
      { name: "analisis_evaluacion_desempeno_evidencia3_12_1", initialValue: "" },
    ],
  },

  // Subtítulo: Acciones requeridas
  {
    type: "sectionTitle",
    key: "acciones_requeridas_12_1",
    title: "Acciones requeridas",
  },

  // Componente de Acciones Requeridas
  {
    type: "accionesRequeridas",
    key: "acciones_requeridas_12_1",
    fields: [
      { name: "accion", initialValue: "" },
      { name: "responsableSNS", initialValue: "" },
      { name: "fechaCumplimiento", initialValue: "" },
    ],
  },
];
