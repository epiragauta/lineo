export const questions9_1 = [
    // Título de la Sección 9.1
    {
      type: "sectionTitle",
      key: "titulo_seccion_9_1",
      title: "Sección 9.1 - Integración de Datos",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_9_1",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_9_1",
      content:
        "El procesamiento e integración de datos es un componente clave para asegurar la calidad y coherencia de la información en las operaciones estadísticas. Según la NTC PE 1000:2020, esta fase implica la recopilación, validación y consolidación de datos provenientes de diversas fuentes, garantizando su compatibilidad y fiabilidad. Se debe realizar un proceso riguroso de verificación y ajuste, asegurando que los datos integrados sean consistentes y estén alineados con los requisitos definidos en la operación estadística. Además, es fundamental establecer procedimientos claros para la gestión de inconsistencias y la optimización de la base de datos antes de proceder con el análisis y la difusión de los resultados.",
    },
  
    // Subtítulo: Implementación de Actividades para la Integración de Datos
    {
      type: "sectionTitle",
      key: "implementacion_actividades_integracion_datos_9_1",
      title: "Implementación de Actividades para la Integración de Datos",
    },
  
    // Pregunta de Tipo Ratio: Implementación adecuada de actividades para integración de datos
    {
      type: "radio",
      key: "implementacion_actividades_integracion_datos_pregunta_9_1",
      label: "¿La operación estadística implementa adecuadamente las actividades necesarias para la integración de datos?",
      name: "implementacion_actividades_integracion_datos_pregunta_9_1",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Mantenimiento de Actividades para la Integración de Datos
    {
      type: "sectionTitle",
      key: "mantenimiento_actividades_integracion_datos_9_1",
      title: "Mantenimiento de Actividades para la Integración de Datos",
    },
  
    // Pregunta de Tipo Ratio: Mantenimiento continuo de actividades para integración de datos
    {
      type: "radio",
      key: "mantenimiento_actividades_integracion_datos_pregunta_9_1",
      label: "¿La operación estadística mantiene de manera continua las actividades para la integración de datos?",
      name: "mantenimiento_actividades_integracion_datos_pregunta_9_1",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Efectividad en la Integración de Datos
    {
      type: "sectionTitle",
      key: "efectividad_integracion_datos_9_1",
      title: "Efectividad en la Integración de Datos",
    },
  
    // Pregunta de Tipo Range: Calificación de efectividad en integración de datos
    {
      type: "range",
      key: "efectividad_integracion_datos_pregunta_9_1",
      label: "Califique (1-5) qué tan efectiva es la operación estadística en la integración de datos.",
      name: "efectividad_integracion_datos_pregunta_9_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Documentación de Actividades de Integración de Datos
    {
      type: "sectionTitle",
      key: "documentacion_actividades_integracion_datos_9_1",
      title: "Documentación de Actividades de Integración de Datos",
    },
  
    // Pregunta de Tipo Range: Calificación en documentación y conservación de información relacionada con actividades de integración de datos
    {
      type: "range",
      key: "documentacion_integracion_datos_pregunta_9_1",
      label: "¿En qué medida la operación estadística documenta y conserva la información relacionada con las actividades de integración de datos? Califique (1-5).",
      name: "documentacion_integracion_datos_pregunta_9_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Revisión y Actualización de Actividades de Integración de Datos
    {
      type: "sectionTitle",
      key: "revision_actualizacion_actividades_integracion_datos_9_1",
      title: "Revisión y Actualización de Actividades de Integración de Datos",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la revisión y actualización periódica de actividades de integración de datos
    {
      type: "textArea",
      key: "evaluacion_revision_actualizacion_actividades_integracion_datos_pregunta_9_1",
      label: "¿Cómo evalúa la operación estadística la revisión y actualización periódica de las actividades de integración de datos?",
      name: "evaluacion_revision_actualizacion_actividades_integracion_datos_pregunta_9_1",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias sobre mejora en la determinación y confirmación del tipo de fuente de datos en operaciones estadísticas
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_1",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_1",
      initialValue: "",
    },
  
    // Evidencias Documentales para Integración de Datos
    {
      type: "evidencias",
      key: "evidencias_integracion_datos_9_1",
      namePrefix: "integracion_datos_9_1",
      fields: [
        { name: "integracion_datos_evidencia1_9_1", initialValue: "" },
        { name: "integracion_datos_evidencia2_9_1", initialValue: "" },
        { name: "integracion_datos_evidencia3_9_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_9_1",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_9_1",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  