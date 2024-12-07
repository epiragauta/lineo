export const questions9_5 = [
  
    // Subtítulo: Cálculo de Factores de Expansión y Ajustes
    {
      type: "sectionTitle",
      key: "calculo_factores_expansion_ajustes_9_5",
      title: "Cálculo de Factores de Expansión y Ajustes",
    },
  
    // Pregunta de Tipo Ratio: Cálculo adecuado de factores de expansión y ajustes
    {
      type: "radio",
      key: "calculo_factores_expansion_ajustes_pregunta_9_5",
      label: "¿La operación estadística por muestreo probabilístico calcula adecuadamente los factores de expansión, ajustes por no cobertura y no respuesta, y errores de muestreo (coeficientes de variación) según lo establecido en el diseño?",
      name: "calculo_factores_expansion_ajustes_pregunta_9_5",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Checkbox: Cálculos realizados
    {
      type: "checkbox",
      key: "calculos_realizados_pregunta_9_5",
      label: "Si la respuesta es Sí, se realizan los cálculos para:",
      name: "calculos_realizados_pregunta_9_5",
      options: [
        "Factores de expansión",
        "Ajustes por no cobertura",
        "Ajustes por no respuesta",
        "Errores de muestreo (coeficientes de variación)",
      ],
      initialValue: [],
    },
  
    // Subtítulo: Cálculo de Ajustes por No Cobertura y No Respuesta
    {
      type: "sectionTitle",
      key: "calculo_ajustes_no_cobertura_respuesta_9_5",
      title: "Cálculo de Ajustes por No Cobertura y No Respuesta",
    },
  
    // Pregunta de Tipo Ratio: Cálculo de ajustes por no cobertura y no respuesta
    {
      type: "radio",
      key: "calculo_ajustes_no_cobertura_respuesta_pregunta_9_5",
      label: "¿La operación estadística realiza el cálculo de ajustes por no cobertura y no respuesta, de acuerdo con lo establecido en su metodología?",
      name: "calculo_ajustes_no_cobertura_respuesta_pregunta_9_5",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Checkbox: Cálculos efectuados
    {
      type: "checkbox",
      key: "calculos_efectuados_pregunta_9_5",
      label: "Si la respuesta es Sí, se efectúan los cálculos para:",
      name: "calculos_efectuados_pregunta_9_5",
      options: [
        "No cobertura",
        "No respuesta",
      ],
      initialValue: [],
    },
  
    // Subtítulo: Efectividad en el Cálculo de Ponderadores
    {
      type: "sectionTitle",
      key: "efectividad_calculo_ponderadores_9_5",
      title: "Efectividad en el Cálculo de Ponderadores",
    },
  
    // Pregunta de Tipo Range: Efectividad en el cálculo de ponderadores
    {
      type: "range",
      key: "efectividad_calculo_ponderadores_pregunta_9_5",
      label: "Califique (1-5) qué tan efectiva es la operación estadística en calcular los factores de expansión, ajustes por no cobertura y no respuesta, y errores de muestreo (coeficientes de variación) según lo establecido en el diseño.",
      name: "efectividad_calculo_ponderadores_pregunta_9_5",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Documentación de Cálculos de Ponderadores
    {
      type: "sectionTitle",
      key: "documentacion_calculos_ponderadores_9_5",
      title: "Documentación de Cálculos de Ponderadores",
    },
  
    // Pregunta de Tipo Range: Documentación y conservación de cálculos de ponderadores
    {
      type: "range",
      key: "documentacion_calculos_ponderadores_pregunta_9_5",
      label: "¿Califique (1-5) en qué medida la operación estadística documenta y conserva los cálculos de los factores de expansión, ajustes por no cobertura y no respuesta, y errores de muestreo (coeficientes de variación)?",
      name: "documentacion_calculos_ponderadores_pregunta_9_5",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Revisión y Actualización de los Cálculos
    {
      type: "sectionTitle",
      key: "revision_actualizacion_calculos_9_5",
      title: "Revisión y Actualización de los Cálculos",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la revisión y actualización de cálculos
    {
      type: "textArea",
      key: "evaluacion_revision_actualizacion_calculos_pregunta_9_5",
      label: "¿Cómo evalúa la operación estadística la revisión y actualización periódica de los cálculos de factores de expansión, ajustes por no cobertura y no respuesta, y errores de muestreo, según lo especificado en el diseño metodológico?",
      name: "evaluacion_revision_actualizacion_calculos_pregunta_9_5",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_5",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_5",
      initialValue: "",
    },
  
    // Evidencias Documentales para Cálculo de Ponderadores
    {
      type: "evidencias",
      key: "evidencias_calculo_ponderadores_9_5",
      namePrefix: "calculo_ponderadores_9_5",
      fields: [
        { name: "calculo_ponderadores_evidencia1_9_5", initialValue: "" },
        { name: "calculo_ponderadores_evidencia2_9_5", initialValue: "" },
        { name: "calculo_ponderadores_evidencia3_9_5", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_9_5",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_9_5",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  