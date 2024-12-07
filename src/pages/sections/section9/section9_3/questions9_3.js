export const questions9_3 = [
  
    // Subtítulo: Consulta en Caso de Omisiones o Inconsistencias
    {
      type: "sectionTitle",
      key: "consulta_omisiones_inconsistencias_9_3",
      title: "Consulta en Caso de Omisiones o Inconsistencias",
    },
  
    // Pregunta de Tipo Ratio: Consulta en caso de omisiones o inconsistencias
    {
      type: "radio",
      key: "consulta_omisiones_inconsistencias_pregunta_9_3",
      label: "¿En los casos de omisión o inconsistencias detectadas, la operación estadística consulta la unidad de observación o la fuente de datos?",
      name: "consulta_omisiones_inconsistencias_pregunta_9_3",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Checkbox: Acciones en caso de consulta
    {
      type: "checkbox",
      key: "acciones_consulta_omisiones_inconsistencias_pregunta_9_3",
      label: "Si la respuesta es Sí, ¿cuáles de las siguientes acciones se llevan a cabo?",
      name: "acciones_consulta_omisiones_inconsistencias_pregunta_9_3",
      options: [
        "Validación directa con la fuente de datos",
        "Corrección de omisiones",
        "Resolución de inconsistencias",
        "Evaluación del impacto de los sesgos",
      ],
      initialValue: [],
    },
  
    // Evidencias Documentales para Consulta en Caso de Omisiones o Inconsistencias
    {
      type: "evidencias",
      key: "evidencias_consulta_omisiones_inconsistencias_9_3",
      namePrefix: "consulta_omisiones_inconsistencias_9_3",
      fields: [
        { name: "consulta_omisiones_inconsistencias_evidencia1_9_3", initialValue: "" },
        { name: "consulta_omisiones_inconsistencias_evidencia2_9_3", initialValue: "" },
        { name: "consulta_omisiones_inconsistencias_evidencia3_9_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Efectividad en la Revisión y Validación
    {
      type: "sectionTitle",
      key: "efectividad_revision_validacion_9_3",
      title: "Efectividad en la Revisión y Validación",
    },
  
    // Pregunta de Tipo Range: Efectividad en la revisión y validación de datos
    {
      type: "range",
      key: "efectividad_revision_validacion_pregunta_9_3",
      label: "Califique (1-5) qué tan efectiva es la operación estadística en la revisión y validación de los datos recolectados o acopiados.",
      name: "efectividad_revision_validacion_pregunta_9_3",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Efectividad en la Revisión y Validación
    {
      type: "evidencias",
      key: "evidencias_efectividad_revision_validacion_9_3",
      namePrefix: "efectividad_revision_validacion_9_3",
      fields: [
        { name: "efectividad_revision_validacion_evidencia1_9_3", initialValue: "" },
        { name: "efectividad_revision_validacion_evidencia2_9_3", initialValue: "" },
        { name: "efectividad_revision_validacion_evidencia3_9_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Documentación de Omisiones e Inconsistencias
    {
      type: "sectionTitle",
      key: "documentacion_omisiones_inconsistencias_9_3",
      title: "Documentación de Omisiones e Inconsistencias",
    },
  
    // Pregunta de Tipo Range: Documentación de omisiones e inconsistencias
    {
      type: "range",
      key: "documentacion_omisiones_inconsistencias_pregunta_9_3",
      label: "Califique (1-5) en qué medida la operación estadística documenta las omisiones y las inconsistencias detectadas durante la revisión de los datos.",
      name: "documentacion_omisiones_inconsistencias_pregunta_9_3",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Documentación de Omisiones e Inconsistencias
    {
      type: "evidencias",
      key: "evidencias_documentacion_omisiones_inconsistencias_9_3",
      namePrefix: "documentacion_omisiones_inconsistencias_9_3",
      fields: [
        { name: "documentacion_omisiones_inconsistencias_evidencia1_9_3", initialValue: "" },
        { name: "documentacion_omisiones_inconsistencias_evidencia2_9_3", initialValue: "" },
        { name: "documentacion_omisiones_inconsistencias_evidencia3_9_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Prevención de Sesgos
    {
      type: "sectionTitle",
      key: "prevencion_sesgos_9_3",
      title: "Prevención de Sesgos",
    },
  
    // Pregunta de Tipo Range: Evaluación de acciones para evitar sesgos
    {
      type: "range",
      key: "evaluacion_acciones_prevencion_sesgos_pregunta_9_3",
      label: "¿Cómo evalúa (1-5) la operación estadística las acciones tomadas para evitar sesgos en los datos debido a omisiones e inconsistencias?",
      name: "evaluacion_acciones_prevencion_sesgos_pregunta_9_3",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_3",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_3",
      initialValue: "",
    },
  
    // Evidencias Documentales para Cálculo de Agregaciones (Resultados)
    {
      type: "evidencias",
      key: "evidencias_calculo_agregaciones_resultados_9_3",
      namePrefix: "calculo_agregaciones_resultados_9_3",
      fields: [
        { name: "calculo_agregaciones_resultados_evidencia1_9_3", initialValue: "" },
        { name: "calculo_agregaciones_resultados_evidencia2_9_3", initialValue: "" },
        { name: "calculo_agregaciones_resultados_evidencia3_9_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_9_3",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_9_3",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  