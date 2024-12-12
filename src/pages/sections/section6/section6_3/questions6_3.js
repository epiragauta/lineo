export const questions6_3 = [
  
  // Subtítulo: Alcance Temático
  {
    type: "sectionTitle",
    key: "alcance_tematico",
    title: "Alcance Temático",
  },
  
  // Pregunta de Tipo Radio: Determinación y Documentación del Alcance Temático
  {
    type: "radio",
    key: "determinacion_documentacion_alcance_tematico_pregunta",
    label: "¿La operación estadística determina y documenta adecuadamente el alcance temático de acuerdo con el objetivo general?",
    name: "determinacion_documentacion_alcance_tematico_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Pregunta de Tipo Checkbox: Aspectos Incluidos en la Documentación del Alcance Temático
  {
    type: "checkbox",
    key: "aspectos_incluidos_alcance_tematico_pregunta",
    label: "Si la respuesta es Sí, ¿la documentación incluye:",
    name: "aspectos_incluidos_alcance_tematico_pregunta",
    options: [
      "el marco teórico",
      "el marco conceptual que describe los conceptos básicos y sus interrelaciones",
      "el marco legal (cuando sea aplicable)",
      "los referentes internacionales y nacionales",
    ],
    initialValue: [],
  },
  
  // Evidencias Documentales para Alcance Temático
  {
    type: "evidencias",
    key: "alcance_tematico_evidencias",
    namePrefix: "alcance_tematico",
    fields: [
      { name: "alcance_tematico_evidencia1", initialValue: "" },
      { name: "alcance_tematico_evidencia2", initialValue: "" },
      { name: "alcance_tematico_evidencia3", initialValue: "" },
    ],
  },
  
  // Subtítulo: Nomenclaturas y Clasificaciones
  {
    type: "sectionTitle",
    key: "nomenclaturas_clasificaciones",
    title: "Nomenclaturas y Clasificaciones",
  },
  
  // Pregunta de Tipo Radio: Uso de Nomenclaturas y Clasificaciones
  {
    type: "radio",
    key: "uso_nomenclaturas_clasificaciones_pregunta",
    label: "¿La operación estadística evidencia el uso de las nomenclaturas y clasificaciones estadísticas adoptadas, adaptadas o elaboradas en su última versión disponible?",
    name: "uso_nomenclaturas_clasificaciones_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Pregunta de Tipo Radio: Documentación del Referente de Nomenclaturas y Clasificaciones
  {
    type: "radio",
    key: "documentacion_referente_nomenclaturas_clasificaciones_pregunta",
    label: "Si la respuesta es Sí, ¿la operación estadística documenta el referente de las nomenclaturas y clasificaciones utilizadas, incluyendo el organismo emisor, versión y fecha de publicación?",
    name: "documentacion_referente_nomenclaturas_clasificaciones_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Evidencias Documentales para Nomenclaturas y Clasificaciones
  {
    type: "evidencias",
    key: "nomenclaturas_clasificaciones_evidencias",
    namePrefix: "nomenclaturas_clasificaciones",
    fields: [
      { name: "nomenclaturas_clasificaciones_evidencia1", initialValue: "" },
      { name: "nomenclaturas_clasificaciones_evidencia2", initialValue: "" },
      { name: "nomenclaturas_clasificaciones_evidencia3", initialValue: "" },
    ],
  },
  
  // Subtítulo: Conceptos Estandarizados
  {
    type: "sectionTitle",
    key: "conceptos_estandarizados",
    title: "Conceptos Estandarizados",
  },
  
  // Pregunta de Tipo Radio: Uso de Conceptos Estandarizados
  {
    type: "radio",
    key: "uso_conceptos_estandarizados_pregunta",
    label: "¿La operación estadística evidencia y referencia el uso de conceptos estandarizados emitidos por el DANE o por referentes nacionales o internacionales de amplio reconocimiento en la temática?",
    name: "uso_conceptos_estandarizados_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Pregunta de Tipo Radio: Documentación de Justificación de Aspectos Temáticos No Considerados
  {
    type: "radio",
    key: "documentacion_justificacion_aspectos_no_considerados_pregunta",
    label: "Si la respuesta es No, ¿se documenta la justificación de los aspectos temáticos no considerados?",
    name: "documentacion_justificacion_aspectos_no_considerados_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Evidencias Documentales para Conceptos Estandarizados
  {
    type: "evidencias",
    key: "conceptos_estandarizados_evidencias",
    namePrefix: "conceptos_estandarizados",
    fields: [
      { name: "conceptos_estandarizados_evidencia1", initialValue: "" },
      { name: "conceptos_estandarizados_evidencia2", initialValue: "" },
      { name: "conceptos_estandarizados_evidencia3", initialValue: "" },
    ],
  },
  
  // Subtítulo: Pertinencia de Variables e Indicadores
  {
    type: "sectionTitle",
    key: "pertinencia_variables_indicadores",
    title: "Pertinencia de Variables e Indicadores",
  },
  
  // Pregunta de Tipo Radio: Determinación y Documentación de Variables e Indicadores
  {
    type: "radio",
    key: "determinacion_documentacion_variables_indicadores_pregunta",
    label: "¿La operación estadística determina y documenta las variables estadísticas a ser recolectadas y los indicadores estadísticos a generar en relación con el fenómeno de estudio y los objetivos de la operación estadística?",
    name: "determinacion_documentacion_variables_indicadores_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Evidencias Documentales para Pertinencia de Variables e Indicadores
  {
    type: "evidencias",
    key: "pertinencia_variables_indicadores_evidencias",
    namePrefix: "pertinencia_variables_indicadores",
    fields: [
      { name: "pertinencia_variables_indicadores_evidencia1", initialValue: "" },
      { name: "pertinencia_variables_indicadores_evidencia2", initialValue: "" },
      { name: "pertinencia_variables_indicadores_evidencia3", initialValue: "" },
    ],
  },
  
  // Subtítulo: Instrumento de Recolección y Desgaste de la Fuente
  {
    type: "sectionTitle",
    key: "instrumento_recoleccion_desgaste_fuente",
    title: "Instrumento de Recolección y Desgaste de la Fuente",
  },
  
  // Pregunta de Tipo Radio: Determinación del Instrumento de Recolección
  {
    type: "radio",
    key: "determinacion_instrumento_recoleccion_pregunta",
    label: "¿La operación estadística determina el instrumento de recolección necesario y asegura que el cuestionario esté conforme con el objetivo de la operación estadística y estructurado en bloques temáticos con una secuencia lógica?",
    name: "determinacion_instrumento_recoleccion_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Pregunta de Tipo Radio: Documentación y Mejora de Acciones para Minimizar Desgaste de la Fuente
  {
    type: "radio",
    key: "documentacion_mejora_acciones_minimizar_desgaste_pregunta",
    label: "Además, ¿se documentan y mejoran las acciones para minimizar el desgaste de la fuente, como la reducción de la longitud del cuestionario y el entrenamiento de los entrevistadores?",
    name: "documentacion_mejora_acciones_minimizar_desgaste_pregunta",
    options: ["Sí", "No"],
    initialValue: "0",
  },
  
  // Evidencias Documentales para Instrumento de Recolección y Desgaste de la Fuente
  {
    type: "evidencias",
    key: "instrumento_recoleccion_desgaste_fuente_evidencias",
    namePrefix: "instrumento_recoleccion_desgaste_fuente",
    fields: [
      { name: "instrumento_recoleccion_desgaste_fuente_evidencia1", initialValue: "" },
      { name: "instrumento_recoleccion_desgaste_fuente_evidencia2", initialValue: "" },
      { name: "instrumento_recoleccion_desgaste_fuente_evidencia3", initialValue: "" },
    ],
  },
  
  // Subtítulo: Mejorar el Diseño Temático
  {
    type: "sectionTitle",
    key: "mejorar_diseno_tematico",
    title: "Mejorar el Diseño Temático",
  },
  
  // Pregunta de Tipo Sugerencias
  {
    type: "sugerencias",
    key: "mejorar_diseno_tematico_pregunta",
    label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación del alcance temático, la construcción del marco de referencia, o la documentación de los conceptos y definiciones en sus operaciones estadísticas?",
    name: "mejorar_diseno_tematico_pregunta",
    initialValue: "",
  },
  
  // Subtítulo: Acciones Requeridas
  {
    type: "sectionTitle",
    key: "acciones_requeridas_6_3",
    title: "Acciones requeridas",
  },
  
  // Componente de Acciones Requeridas
  {
    type: "accionesRequeridas",
    key: "acciones_requeridas_6_3",
    fields: [
      { name: "accion", initialValue: "" },
      { name: "responsableSNS", initialValue: "" },
      { name: "fechaCumplimiento", initialValue: "" },
    ],
  },
];
