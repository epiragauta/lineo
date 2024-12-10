export const questions7_6 = [
  
    // Subtítulo: Elaboración de Flujos de Trabajo
    {
      type: "sectionTitle",
      key: "elaboracion_flujos_trabajo_7_6",
      title: "Elaboración de Flujos de Trabajo",
    },
  
    // Pregunta de Tipo Radio: Elaboración y documentación de flujos de trabajo
    {
      type: "radio",
      key: "elaboracion_flujos_trabajo_pregunta_7_6",
      label: "¿La operación estadística elabora y documenta adecuadamente el(los) flujo(s) de trabajo que indican las principales actividades?",
      name: "elaboracion_flujos_trabajo_pregunta_7_6",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Pregunta de Tipo Checkbox: Aspectos incluidos en la documentación
    {
      type: "checkbox",
      key: "documentacion_flujos_trabajo_pregunta_7_6",
      label: "Si la respuesta es Sí, ¿la documentación incluye los siguientes aspectos?: Seleccione todas las opciones que correspondan.",
      name: "documentacion_flujos_trabajo_pregunta_7_6",
      options: [
        "Descripción clara de las actividades principales",
        "Secuencia lógica de las actividades",
        "Responsables de cada actividad",
        "Tiempos y plazos para la ejecución de las actividades",
      ],
      initialValue: [],
    },
  
    // Evidencias Documentales para Elaboración de Flujos de Trabajo
    {
      type: "evidencias",
      key: "evidencias_elaboracion_flujos_trabajo_7_6",
      namePrefix: "elaboracion_flujos_trabajo_7_6",
      fields: [
        { name: "elaboracion_flujos_trabajo_evidencia1_7_6", initialValue: "" },
        { name: "elaboracion_flujos_trabajo_evidencia2_7_6", initialValue: "" },
        { name: "elaboracion_flujos_trabajo_evidencia3_7_6", initialValue: "" },
      ],
    },
  
    // Subtítulo: Documentación de Flujos de Trabajo
    {
      type: "sectionTitle",
      key: "documentacion_flujos_trabajo_7_6",
      title: "Documentación de Flujos de Trabajo",
    },
  
    // Pregunta de Tipo Radio: Mantenimiento de la documentación
    {
      type: "radio",
      key: "mantenimiento_documentacion_flujos_trabajo_pregunta_7_6",
      label: "¿La operación estadística mantiene actualizada la documentación de los flujos de trabajo?",
      name: "mantenimiento_documentacion_flujos_trabajo_pregunta_7_6",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Pregunta de Tipo Checkbox: Elementos actualizados regularmente
    {
      type: "checkbox",
      key: "elementos_actualizados_flujos_trabajo_pregunta_7_6",
      label: "Si la respuesta es Sí, ¿Cuáles de los siguientes elementos se actualizan regularmente? Seleccione todas las opciones que correspondan.",
      name: "elementos_actualizados_flujos_trabajo_pregunta_7_6",
      options: [
        "cambios en las actividades principales",
        "modificaciones en la secuencia de actividades",
        "ajustes en los responsables de las actividades",
        "revisiones de los tiempos y plazos",
      ],
      initialValue: [],
    },
  
    // Evidencias Documentales para Documentación de Flujos de Trabajo
    {
      type: "evidencias",
      key: "evidencias_documentacion_flujos_trabajo_7_6",
      namePrefix: "documentacion_flujos_trabajo_7_6",
      fields: [
        { name: "documentacion_flujos_trabajo_evidencia1_7_6", initialValue: "" },
        { name: "documentacion_flujos_trabajo_evidencia2_7_6", initialValue: "" },
        { name: "documentacion_flujos_trabajo_evidencia3_7_6", initialValue: "" },
      ],
    },
  
    // Subtítulo: Claridad y Precisión en la Documentación
    {
      type: "sectionTitle",
      key: "claridad_precision_documentacion_7_6",
      title: "Claridad y Precisión en la Documentación",
    },
  
    // Pregunta de Tipo Range: Claridad y precisión de la documentación
    {
      type: "slider",
      key: "claridad_precision_documentacion_pregunta_7_6",
      label: "Califique de 1-5. ¿Qué tan clara y precisa es la documentación de los flujos de trabajo en la operación estadística?",
      name: "claridad_precision_documentacion_pregunta_7_6",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Evidencias Documentales para Claridad y Precisión en la Documentación
    {
      type: "evidencias",
      key: "evidencias_claridad_precision_documentacion_7_6",
      namePrefix: "claridad_precision_documentacion_7_6",
      fields: [
        { name: "claridad_precision_documentacion_evidencia1_7_6", initialValue: "" },
        { name: "claridad_precision_documentacion_evidencia2_7_6", initialValue: "" },
        { name: "claridad_precision_documentacion_evidencia3_7_6", initialValue: "" },
      ],
    },
  
    // Subtítulo: Cumplimiento de los Flujos de Trabajo
    {
      type: "sectionTitle",
      key: "cumplimiento_flujos_trabajo_7_6",
      title: "Cumplimiento de los Flujos de Trabajo",
    },
  
    // Pregunta de Tipo Range: Cumplimiento de los flujos de trabajo
    {
      type: "slider",
      key: "cumplimiento_flujos_trabajo_pregunta_7_6",
      label: "Califique de 1-5. ¿En qué medida la operación estadística sigue y aplica los flujos de trabajo documentados en la práctica?",
      name: "cumplimiento_flujos_trabajo_pregunta_7_6",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Evidencias Documentales para Cumplimiento de los Flujos de Trabajo
    {
      type: "evidencias",
      key: "evidencias_cumplimiento_flujos_trabajo_7_6",
      namePrefix: "cumplimiento_flujos_trabajo_7_6",
      fields: [
        { name: "cumplimiento_flujos_trabajo_evidencia1_7_6", initialValue: "" },
        { name: "cumplimiento_flujos_trabajo_evidencia2_7_6", initialValue: "" },
        { name: "cumplimiento_flujos_trabajo_evidencia3_7_6", initialValue: "" },
      ],
    },
  
    // Subtítulo: Revisión y Actualización de Flujos de Trabajo
    {
      type: "sectionTitle",
      key: "revision_actualizacion_flujos_trabajo_7_6",
      title: "Revisión y Actualización de Flujos de Trabajo",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la revisión y actualización
    {
      type: "textarea",
      key: "evaluacion_revision_actualizacion_flujos_trabajo_pregunta_7_6",
      label: "¿Cómo evalúa la entidad la revisión y actualización periódica de los flujos de trabajo, según lo especificado en el proceso de la operación estadística?",
      name: "evaluacion_revision_actualizacion_flujos_trabajo_pregunta_7_6",
      initialValue: "",
    },
  
    // Evidencias Documentales para Revisión y Actualización de Flujos de Trabajo
    {
      type: "evidencias",
      key: "evidencias_revision_actualizacion_flujos_trabajo_7_6",
      namePrefix: "revision_actualizacion_flujos_trabajo_7_6",
      fields: [
        { name: "revision_actualizacion_flujos_trabajo_evidencia1_7_6", initialValue: "" },
        { name: "revision_actualizacion_flujos_trabajo_evidencia2_7_6", initialValue: "" },
        { name: "revision_actualizacion_flujos_trabajo_evidencia3_7_6", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sugerencias para la mejora en la Construcción de los Flujos de Trabajo
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_construccion_flujos_trabajo_7_6",
      title: "Sugerencias para la mejora en la Construcción de los Flujos de Trabajo",
    },
  
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_construccion_flujos_trabajo_pregunta_7_6",
      label: "Pendiente Pregunta",
      name: "sugerencias_mejora_construccion_flujos_trabajo_pregunta_7_6",
      initialValue: "",
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_7_6",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_7_6",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  