export const questions5_5 = [
  // Subtítulo: Identificación de Conceptos Básicos
  
  // Pregunta de Tipo Slider
  {
    type: "slider",
    key: "identificacion_conceptos_basicos_pregunta",
    label: "Califique de 1-5 ¿En qué medida la dependencia encargada de la operación estadística identifica adecuadamente los conceptos básicos que explican y contextualizan la temática objeto de estudio?",
    name: "identificacion_conceptos_basicos_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  
  // Evidencias Documentales para Identificación de Conceptos Básicos
  {
    type: "evidencias",
    key: "identificacion_conceptos_basicos_evidencias",
    namePrefix: "identificacion_conceptos_basicos",
    fields: [
      { name: "identificacion_conceptos_basicos_evidencia1", initialValue: "" },
      { name: "identificacion_conceptos_basicos_evidencia2", initialValue: "" },
      { name: "identificacion_conceptos_basicos_evidencia3", initialValue: "" },
    ],
  },

  // Subtítulo: Identificación de Variables Estadísticas
  {
    type: "sectionTitle",
    key: "identificacion_variables_estadisticas",
    title: "Identificación de Variables Estadísticas",
  },
  
  // Pregunta de Tipo Slider
  {
    type: "slider",
    key: "identificacion_variables_estadisticas_pregunta",
    label: "Califique de 1-5 ¿Qué tan bien identifica la dependencia encargada de la operación estadística las variables estadísticas necesarias para el desarrollo de la operación estadística?",
    name: "identificacion_variables_estadisticas_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  
  // Evidencias Documentales para Identificación de Variables Estadísticas
  {
    type: "evidencias",
    key: "identificacion_variables_estadisticas_evidencias",
    namePrefix: "identificacion_variables_estadisticas",
    fields: [
      { name: "identificacion_variables_estadisticas_evidencia1", initialValue: "" },
      { name: "identificacion_variables_estadisticas_evidencia2", initialValue: "" },
      { name: "identificacion_variables_estadisticas_evidencia3", initialValue: "" },
    ],
  },

  // Subtítulo: Identificación de Indicadores Estadísticos
  {
    type: "sectionTitle",
    key: "identificacion_indicadores_estadisticas",
    title: "Identificación de Indicadores Estadísticos",
  },
  
  // Pregunta de Tipo Slider
  {
    type: "slider",
    key: "identificacion_indicadores_estadisticas_pregunta",
    label: "Califique de 1-5 ¿Cómo evalúa la dependencia encargada de la operación estadística la identificación de los indicadores estadísticos que permiten medir y evaluar la temática objeto de estudio?",
    name: "identificacion_indicadores_estadisticas_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  
  // Evidencias Documentales para Identificación de Indicadores Estadísticos
  {
    type: "evidencias",
    key: "identificacion_indicadores_estadisticas_evidencias",
    namePrefix: "identificacion_indicadores_estadisticas",
    fields: [
      { name: "identificacion_indicadores_estadisticas_evidencia1", initialValue: "" },
      { name: "identificacion_indicadores_estadisticas_evidencia2", initialValue: "" },
      { name: "identificacion_indicadores_estadisticas_evidencia3", initialValue: "" },
    ],
  },

  // Subtítulo: Revisión y Actualización de Conceptos, Variables e Indicadores
  {
    type: "sectionTitle",
    key: "revision_actualizacion_conceptos_variables_indicadores",
    title: "Revisión y Actualización de Conceptos, Variables e Indicadores",
  },
  
  // Pregunta de Tipo Slider
  {
    type: "slider",
    key: "revision_actualizacion_conceptos_variables_indicadores_pregunta",
    label: "Califique de 1-5 ¿En qué medida la dependencia encargada de la operación estadística revisa y actualiza regularmente los conceptos básicos, las variables estadísticas y los indicadores estadísticos para asegurar su relevancia y precisión?",
    name: "revision_actualizacion_conceptos_variables_indicadores_pregunta",
    min: 1,
    max: 5,
    step: 1,
    initialValue: 2,
  },
  
  // Evidencias Documentales para Revisión y Actualización de Conceptos, Variables e Indicadores
  {
    type: "evidencias",
    key: "revision_actualizacion_conceptos_variables_indicadores_evidencias",
    namePrefix: "revision_actualizacion_conceptos_variables_indicadores",
    fields: [
      { name: "revision_actualizacion_conceptos_variables_indicadores_evidencia1", initialValue: "" },
      { name: "revision_actualizacion_conceptos_variables_indicadores_evidencia2", initialValue: "" },
      { name: "revision_actualizacion_conceptos_variables_indicadores_evidencia3", initialValue: "" },
    ],
  },

  // Subtítulo: Mejorar la Identificación de Conceptos, Variables e Indicadores
  {
    type: "sectionTitle",
    key: "mejorar_identificacion_conceptos_variables_indicadores",
    title: "Mejorar la Identificación de Conceptos, Variables e Indicadores",
  },
  
  // Pregunta de Tipo Textarea (Sugerencias)
  {
    type: "sugerencias",
    key: "mejorar_identificacion_conceptos_variables_indicadores_pregunta",
    label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la identificación, revisión y actualización de los conceptos básicos, variables estadísticas e indicadores estadísticos en sus operaciones?",
    name: "mejorar_identificacion_conceptos_variables_indicadores_pregunta",
    initialValue: "",
  },

  // Subtítulo: Acciones Requeridas
  {
    type: "sectionTitle",
    key: "acciones_requeridas_5-5",
    title: "Acciones requeridas",
  },
  
  // Componente de Acciones Requeridas
  {
    type: "accionesRequeridas",
    key: "acciones_requeridas_5-5",
    fields: [
      { name: "accion", initialValue: "" },
      { name: "responsableSNS", initialValue: "" },
      { name: "fechaCumplimiento", initialValue: "" },
    ],
  },
];
