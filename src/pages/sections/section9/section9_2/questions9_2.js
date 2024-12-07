export const questions9_2 = [
    // Título de la Sección 9.2
    {
      type: "sectionTitle",
      key: "titulo_seccion_9_2",
      title: "Sección 9.2 - Clasificación y Codificación",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_9_2",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_9_2",
      content:
        "El procesamiento de clasificación y codificación es un componente esencial en la implementación de la norma técnica estadística, ya que garantiza la organización y la estandarización de los datos recolectados. Según la NTC PE 1000:2020, esta fase involucra la asignación de códigos y categorías a las variables para facilitar su análisis y comparabilidad. Este proceso requiere una atención detallada para asegurar que las categorías sean consistentes, coherentes y alineadas con los estándares internacionales, lo que permite una interpretación precisa y una integración eficiente de la información en las operaciones estadísticas. La correcta clasificación y codificación también contribuyen a la mejora de la calidad de los datos y a la transparencia en su manejo.",
    },
  
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
      options: ["Si", "No"],
      initialValue: "",
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
      options: ["Si", "No"],
      initialValue: "",
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
      type: "range",
      key: "efectividad_documentacion_conservacion_clasificacion_codificacion_pregunta_9_2",
      label: "Califique (1-5) qué tan efectiva es la operación estadística en documentar, conservar y actualizar la clasificación y codificación de los datos.",
      name: "efectividad_documentacion_conservacion_clasificacion_codificacion_pregunta_9_2",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Revisión y Actualización de Clasificación y Codificación
    {
      type: "sectionTitle",
      key: "revision_actualizacion_clasificacion_codificacion_9_2",
      title: "Revisión y Actualización de Clasificación y Codificación",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la revisión y actualización periódica de criterios de clasificación y codificación
    {
      type: "textArea",
      key: "evaluacion_revision_actualizacion_clasificacion_codificacion_pregunta_9_2",
      label: "¿Cómo evalúa la operación estadística la revisión y actualización periódica de los criterios de clasificación y codificación, según lo especificado en los procedimientos establecidos?",
      name: "evaluacion_revision_actualizacion_clasificacion_codificacion_pregunta_9_2",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
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
  