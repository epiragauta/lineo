export const questions11_2 = [
  
    // Subtítulo: Difusión de Metadatos
    {
      type: "sectionTitle",
      key: "difusion_metadatos_11_2",
      title: "Difusión de Metadatos",
    },
  
    // Pregunta de Tipo Ratio: Difusión adecuada de metadatos
    {
      type: "radio",
      key: "difusion_metadatos_pregunta_11_2",
      label: "¿La dependencia encargada de la operación estadística difunde adecuadamente los metadatos que contienen información detallada de las características de la operación estadística, la estructura de los datos, los documentos de referencia y la cobertura?",
      name: "difusion_metadatos_pregunta_11_2",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Subtítulo: Conservación de Metadatos
    {
      type: "sectionTitle",
      key: "conservacion_metadatos_11_2",
      title: "Conservación de Metadatos",
    },
  
    // Pregunta de Tipo Ratio: Conservación adecuada de metadatos
    {
      type: "radio",
      key: "conservacion_metadatos_pregunta_11_2",
      label: "¿La dependencia encargada de la operación estadística conserva de manera adecuada los metadatos de su operación estadística?",
      name: "conservacion_metadatos_pregunta_11_2",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Subtítulo: Coherencia de los Metadatos con los Resultados Disponibles
    {
      type: "sectionTitle",
      key: "coherencia_metadatos_resultados_11_2",
      title: "Coherencia de los Metadatos con los Resultados Disponibles",
    },
  
    // Pregunta de Tipo Range: Coherencia de metadatos
    {
      type: "slider",
      key: "coherencia_metadatos_pregunta_11_2",
      label: "Califique (1-5) qué tan coherentes son los metadatos con los últimos resultados disponibles.",
      name: "coherencia_metadatos_pregunta_11_2",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Documentación de Metadatos
    {
      type: "sectionTitle",
      key: "documentacion_metadatos_11_2",
      title: "Documentación de Metadatos",
    },
  
    // Pregunta de Tipo Range: Documentación y conservación de metadatos
    {
      type: "slider",
      key: "documentacion_metadatos_pregunta_11_2",
      label: "Califique (1-5) en qué medida la dependencia encargada de la operación estadística documenta los metadatos de la operación estadística de manera clara y detallada, incluyendo información sobre la cobertura y los documentos de referencia.",
      name: "documentacion_metadatos_pregunta_11_2",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Actualización de Metadatos
    {
      type: "sectionTitle",
      key: "actualizacion_metadatos_11_2",
      title: "Actualización de Metadatos",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la revisión y actualización de metadatos
    {
      type: "textarea",
      key: "evaluacion_revision_actualizacion_metadatos_pregunta_11_2",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística el proceso de revisión y actualización de los metadatos para garantizar su coherencia con los resultados estadísticos más recientes?",
      name: "evaluacion_revision_actualizacion_metadatos_pregunta_11_2",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textarea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_2",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_2",
      initialValue: "",
    },
  
    // Evidencias Documentales para Metadatos
    {
      type: "evidencias",
      key: "evidencias_metadatos_11_2",
      namePrefix: "metadatos_11_2",
      fields: [
        { name: "metadatos_evidencia1_11_2", initialValue: "" },
        { name: "metadatos_evidencia2_11_2", initialValue: "" },
        { name: "metadatos_evidencia3_11_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_11_2",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_11_2",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  