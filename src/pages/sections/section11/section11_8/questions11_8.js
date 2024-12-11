export const questions11_8 = [
  
    // Subtítulo: Proceso de Aprobación para la Difusión
    {
      type: "sectionTitle",
      key: "proceso_aprobacion_difusion_11_8",
      title: "Proceso de Aprobación para la Difusión",
    },
  
    // Pregunta de Tipo Ratio: Determinación de responsables de aprobación
    {
      type: "radio",
      key: "determinacion_responsables_aprobacion_pregunta_11_8",
      label: "¿La dependencia encargada de la operación estadística determina claramente quién es responsable de aprobar la difusión de la información estadística?",
      name: "determinacion_responsables_aprobacion_pregunta_11_8",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Pregunta de Tipo Ratio: Documentación del proceso de aprobación
    {
      type: "radio",
      key: "documentacion_proceso_aprobacion_pregunta_11_8",
      label: "Si la respuesta es sí, ¿el proceso de aprobación está debidamente documentado?",
      name: "documentacion_proceso_aprobacion_pregunta_11_8",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Subtítulo: Documentación de la Autorización
    {
      type: "sectionTitle",
      key: "documentacion_autorizacion_11_8",
      title: "Documentación de la Autorización",
    },
  
    // Pregunta de Tipo Ratio: Almacenamiento y conservación de documentación de autorización
    {
      type: "radio",
      key: "almacenamiento_conservacion_documentacion_autorizacion_pregunta_11_8",
      label: "¿La dependencia encargada de la operación estadística almacena y conserva la documentación que evidencia la autorización para la difusión en cada publicación estadística?",
      name: "almacenamiento_conservacion_documentacion_autorizacion_pregunta_11_8",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Subtítulo: Transparencia del Proceso de Autorización
    {
      type: "sectionTitle",
      key: "transparencia_proceso_autorizacion_11_8",
      title: "Transparencia del Proceso de Autorización",
    },
  
    // Pregunta de Tipo Range: Efectividad en la transparencia del proceso de autorización
    {
      type: "slider",
      key: "efectividad_transparencia_proceso_autorizacion_pregunta_11_8",
      label: "¿Qué tan efectiva es la dependencia encargada de la operación estadística en asegurar la transparencia del proceso de autorización para la difusión de información estadística? Califique (1-5)",
      name: "efectividad_transparencia_proceso_autorizacion_pregunta_11_8",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Subtítulo: Frecuencia de Revisión del Proceso de Autorización
    {
      type: "sectionTitle",
      key: "frecuencia_revision_proceso_autorizacion_11_8",
      title: "Frecuencia de Revisión del Proceso de Autorización",
    },
  
    // Pregunta de Tipo Ratio: Revisión y actualización periódica de procedimientos de autorización
    {
      type: "radio",
      key: "revision_actualizacion_procedimientos_autorizacion_pregunta_11_8",
      label: "¿La dependencia encargada de la operación estadística revisa y actualiza periódicamente los procedimientos para la autorización de la difusión estadística?",
      name: "revision_actualizacion_procedimientos_autorizacion_pregunta_11_8",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Subtítulo: Registro de Autorizaciones
    {
      type: "sectionTitle",
      key: "registro_autorizaciones_11_8",
      title: "Registro de Autorizaciones",
    },
  
    // Pregunta de Tipo Range: Efectividad en el almacenamiento y mantenimiento de registros de autorización
    {
      type: "slider",
      key: "efectividad_almacenamiento_registros_autorizacion_pregunta_11_8",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística la efectividad en el almacenamiento y mantenimiento de los registros de autorización de las publicaciones estadísticas? Califique (1-5)",
      name: "efectividad_almacenamiento_registros_autorizacion_pregunta_11_8",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textarea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_8",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_8",
      initialValue: "",
    },
  
    // Evidencias Documentales para Autorización de publicación de información estadística
    {
      type: "evidencias",
      key: "evidencias_autorizacion_publicacion_info_estadistica_11_8",
      namePrefix: "autorizacion_publicacion_info_estadistica_11_8",
      fields: [
        { name: "autorizacion_publicacion_info_estadistica_evidencia1_11_8", initialValue: "" },
        { name: "autorizacion_publicacion_info_estadistica_evidencia2_11_8", initialValue: "" },
        { name: "autorizacion_publicacion_info_estadistica_evidencia3_11_8", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_11_8",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_11_8",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  