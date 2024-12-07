export const questions9_6 = [
    // Título de la Sección 9.6
    {
      type: "sectionTitle",
      key: "titulo_seccion_9_6",
      title: "Sección 9.6 - Finalización de los Archivos de Datos",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_9_6",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_9_6",
      content:
        "El procesamiento de finalización de los archivos de datos es una fase crucial en el ciclo de la operación estadística, según los lineamientos establecidos en la NTC PE 1000:2020. Esta etapa implica la revisión y consolidación de los datos recolectados, asegurando su integridad, coherencia y calidad antes de ser almacenados y difundidos. Es necesario realizar una depuración de posibles errores, validar las inconsistencias y aplicar procedimientos estadísticos adecuados para garantizar que los archivos finales sean completos y aptos para su uso en el análisis. Además, se debe verificar que los metadatos estén debidamente documentados, permitiendo una interpretación clara y precisa de los datos procesados.",
    },
  
    // Subtítulo: Confidencialidad de los Datos
    {
      type: "sectionTitle",
      key: "confidencialidad_datos_9_6",
      title: "Confidencialidad de los Datos",
    },
  
    // Pregunta de Tipo Ratio: Confidencialidad de los datos
    {
      type: "radio",
      key: "confidencialidad_datos_pregunta_9_6",
      label: "¿La dependencia encargada de la operación estadística asegura la confidencialidad de los datos recolectados o acopiados?",
      name: "confidencialidad_datos_pregunta_9_6",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Garantía de confidencialidad
    {
      type: "textArea",
      key: "garantia_confidencialidad_pregunta_9_6",
      label: "Si la respuesta es Sí, ¿cómo se garantiza esta confidencialidad?",
      name: "garantia_confidencialidad_pregunta_9_6",
      initialValue: "",
    },
  
    // Subtítulo: Disponibilidad de los Datos
    {
      type: "sectionTitle",
      key: "disponibilidad_datos_9_6",
      title: "Disponibilidad de los Datos",
    },
  
    // Pregunta de Tipo Ratio: Disponibilidad de datos almacenados
    {
      type: "radio",
      key: "disponibilidad_datos_pregunta_9_6",
      label: "¿La dependencia encargada de la operación estadística garantiza la disponibilidad de los datos almacenados?",
      name: "disponibilidad_datos_pregunta_9_6",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Medidas para asegurar la disponibilidad
    {
      type: "textArea",
      key: "medidas_asegurar_disponibilidad_pregunta_9_6",
      label: "Si la respuesta es Sí, ¿qué medidas se implementan para asegurar la disponibilidad?",
      name: "medidas_asegurar_disponibilidad_pregunta_9_6",
      initialValue: "",
    },
  
    // Subtítulo: Control de Acceso
    {
      type: "sectionTitle",
      key: "control_acceso_9_6",
      title: "Control de Acceso",
    },
  
    // Pregunta de Tipo Ratio: Implementación de controles de acceso
    {
      type: "radio",
      key: "control_acceso_pregunta_9_6",
      label: "¿La dependencia encargada de la operación estadística implementa controles de acceso adecuados para los datos almacenados?",
      name: "control_acceso_pregunta_9_6",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Ratio: Tipo de controles utilizados
    {
      type: "radio",
      key: "tipo_controles_pregunta_9_6",
      label: "Si la respuesta es Sí, ¿qué tipo de controles se utilizan?",
      name: "tipo_controles_pregunta_9_6",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Copia de Seguridad
    {
      type: "sectionTitle",
      key: "copia_seguridad_9_6",
      title: "Copia de Seguridad",
    },
  
    // Pregunta de Tipo Ratio: Realización de copias de seguridad
    {
      type: "radio",
      key: "realizacion_copias_seguridad_pregunta_9_6",
      label: "¿La dependencia encargada de la operación estadística realiza copias de seguridad de los datos?",
      name: "realizacion_copias_seguridad_pregunta_9_6",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Range: Frecuencia de copias de seguridad
    {
      type: "range",
      key: "frecuencia_copias_seguridad_pregunta_9_6",
      label: "Si la respuesta es Sí, ¿con qué frecuencia se realizan estas copias de seguridad? Califique (1-5)",
      name: "frecuencia_copias_seguridad_pregunta_9_6",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Versiones y Protección de Datos
    {
      type: "sectionTitle",
      key: "versiones_proteccion_datos_9_6",
      title: "Versiones y Protección de Datos",
    },
  
    // Pregunta de Tipo Ratio: Protección contra pérdida, modificación o alteración de datos y mantenimiento de versiones
    {
      type: "radio",
      key: "proteccion_datos_versiones_pregunta_9_6",
      label: "¿La dependencia encargada de la operación estadística asegura la protección contra la pérdida, modificación o alteración de los datos, y mantiene versiones con fecha y hora?",
      name: "proteccion_datos_versiones_pregunta_9_6",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Medidas para proteger datos y mantener versiones
    {
      type: "textArea",
      key: "medidas_proteccion_datos_versiones_pregunta_9_6",
      label: "Si la respuesta es Sí, ¿qué medidas se toman para proteger los datos y mantener las versiones?",
      name: "medidas_proteccion_datos_versiones_pregunta_9_6",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_6",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_6",
      initialValue: "",
    },
  
    // Evidencias Documentales para Finalización de los Archivos de Datos
    {
      type: "evidencias",
      key: "evidencias_finalizacion_archivos_datos_9_6",
      namePrefix: "finalizacion_archivos_datos_9_6",
      fields: [
        { name: "finalizacion_archivos_datos_evidencia1_9_6", initialValue: "" },
        { name: "finalizacion_archivos_datos_evidencia2_9_6", initialValue: "" },
        { name: "finalizacion_archivos_datos_evidencia3_9_6", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_9_6",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_9_6",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  