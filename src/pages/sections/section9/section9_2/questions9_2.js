export const questions9_2 = [
  
    // Subtítulo: Clasificación y Codificación de Datos
    {
      type: "sectionTitle",
      key: "clasificacion_codificacion_datos_9_2",
      title: "Clasificación y Codificación de Datos",
    },
  
    // Pregunta de Tipo Ratio: Implementación y garantía de la clasificación de datos
    {
      type: "radio",
      key: "implementacion_garantia_clasificacion_pregunta_9_2",
      label: "¿La operación estadística implementa y garantiza adecuadamente la clasificación de los datos?",
      name: "implementacion_garantia_clasificacion_pregunta_9_2",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Pregunta de Tipo Checkbox: Aspectos incluidos en la clasificación
    {
      type: "checkbox",
      key: "aspectos_clasificacion_pregunta_9_2",
      label: "Si la respuesta es Sí, la clasificación incluye:",
      name: "aspectos_clasificacion_pregunta_9_2",
      options: [
        "Clasificación según categorías establecidas",
        "Clasificación según criterios de relevancia",
        "Clasificación según estándares normativos",
      ],
      initialValue: [],
    },
  
    // Subtítulo: Mecanismos de Implementación de Clasificación y Codificación
    {
      type: "sectionTitle",
      key: "mecanismos_implementacion_clasificacion_codificacion_9_2",
      title: "Mecanismos de Implementación de Clasificación y Codificación",
    },
  
    // Pregunta de Tipo Ratio: Definición, implementación y mantenimiento de mecanismos de codificación
    {
      type: "radio",
      key: "definicion_implementacion_mantenimiento_codificacion_pregunta_9_2",
      label: "¿La operación estadística define, implementa y mantiene los mecanismos para la codificación de los datos?",
      name: "definicion_implementacion_mantenimiento_codificacion_pregunta_9_2",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Pregunta de Tipo Checkbox: Mecanismos de codificación utilizados
    {
      type: "checkbox",
      key: "mecanismos_codificacion_utilizados_pregunta_9_2",
      label: "Si la respuesta es Sí, ¿cuáles de los siguientes mecanismos de codificación utiliza la operación estadística?",
      name: "mecanismos_codificacion_utilizados_pregunta_9_2",
      options: [
        "Códigos estandarizados",
        "Códigos específicos para la temática",
        "Integración con sistemas de gestión de datos",
        "Validación y verificación de códigos",
      ],
      initialValue: [],
    },
  
    // Subtítulo: Documentación y Conservación de la Clasificación y Codificación
    {
      type: "sectionTitle",
      key: "documentacion_conservacion_clasificacion_codificacion_9_2",
      title: "Documentación y Conservación de la Clasificación y Codificación",
    },
  
    // Pregunta de Tipo Range: Efectividad en la documentación y conservación de la clasificación y codificación
    {
      type: "slider",
      key: "efectividad_documentacion_conservacion_clasificacion_codificacion_pregunta_9_2",
      label: "Califique (1-5) qué tan efectiva es la operación estadística en documentar, conservar y actualizar la clasificación y codificación de los datos.",
      name: "efectividad_documentacion_conservacion_clasificacion_codificacion_pregunta_9_2",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Subtítulo: Revisión y Actualización de Clasificación y Codificación
    {
      type: "sectionTitle",
      key: "revision_actualizacion_clasificacion_codificacion_9_2",
      title: "Revisión y Actualización de Clasificación y Codificación",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la revisión y actualización periódica de criterios de clasificación y codificación
    {
      type: "textarea",
      key: "evaluacion_revision_actualizacion_clasificacion_codificacion_pregunta_9_2",
      label: "¿Cómo evalúa la operación estadística la revisión y actualización periódica de los criterios de clasificación y codificación, según lo especificado en los procedimientos establecidos?",
      name: "evaluacion_revision_actualizacion_clasificacion_codificacion_pregunta_9_2",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textarea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_2",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_2",
      initialValue: "",
    },
  
    // Evidencias Documentales para Clasificación y Codificación
    {
      type: "evidencias",
      key: "evidencias_clasificacion_codificacion_9_2",
      namePrefix: "clasificacion_codificacion_9_2",
      fields: [
        { name: "clasificacion_codificacion_evidencia1_9_2", initialValue: "" },
        { name: "clasificacion_codificacion_evidencia2_9_2", initialValue: "" },
        { name: "clasificacion_codificacion_evidencia3_9_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_9_2",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_9_2",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  