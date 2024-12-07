export const questions9_4 = [
    // Título de la Sección 9.4
    {
      type: "sectionTitle",
      key: "titulo_seccion_9_4",
      title: "Sección 9.4 - Edición e Imputación",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_9_4",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_9_4",
      content:
        "El procesamiento de edición e imputación es un componente esencial en el manejo de datos estadísticos, ya que permite garantizar la calidad y fiabilidad de la información antes de su análisis y difusión. Según los lineamientos establecidos en la NTC PE 1000:2020, esta fase implica la identificación y corrección de errores, inconsistencias o valores faltantes en los datos recolectados, a través de procedimientos técnicos adecuados. La imputación de datos faltantes y la edición de valores erróneos aseguran que los resultados obtenidos sean representativos y no se vean distorsionados por fallos en la calidad de los registros, lo que facilita una toma de decisiones más precisa y basada en datos confiables.",
    },
  
    // Subtítulo: Aplicación de Reglas de Edición e Imputación
    {
      type: "sectionTitle",
      key: "aplicacion_reglas_edicion_imputacion_9_4",
      title: "Aplicación de Reglas de Edición e Imputación",
    },
  
    // Pregunta de Tipo Ratio: Aplicación adecuada de reglas de edición e imputación
    {
      type: "radio",
      key: "aplicacion_reglas_edicion_imputacion_pregunta_9_4",
      label: "¿La operación estadística aplica adecuadamente las reglas de edición (para validación y consistencia) e imputación al conjunto de datos para disponer de un archivo de datos depurado?",
      name: "aplicacion_reglas_edicion_imputacion_pregunta_9_4",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Ratio: Aplicación de imputación solo en operaciones que lo requieren
    {
      type: "radio",
      key: "aplicacion_imputacion_operaciones_requieren_pregunta_9_4",
      label: "Si la respuesta es Sí, ¿se aplica la imputación solo en las operaciones estadísticas que requieren dicha técnica?",
      name: "aplicacion_imputacion_operaciones_requieren_pregunta_9_4",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Cálculo de Indicadores y Tasas de Imputación
    {
      type: "sectionTitle",
      key: "calculo_indicadores_tasas_imputacion_9_4",
      title: "Cálculo de Indicadores y Tasas de Imputación",
    },
  
    // Pregunta de Tipo Ratio: Cálculo de indicadores y tasas de imputación
    {
      type: "radio",
      key: "calculo_indicadores_tasas_imputacion_pregunta_9_4",
      label: "¿La operación estadística calcula los indicadores de las variables identificadas con valores no válidos y las tasas de imputación por variable, según lo definido en el diseño?",
      name: "calculo_indicadores_tasas_imputacion_pregunta_9_4",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Efectividad en la Aplicación de Reglas de Edición e Imputación
    {
      type: "sectionTitle",
      key: "efectividad_aplicacion_reglas_edicion_imputacion_9_4",
      title: "Efectividad en la Aplicación de Reglas de Edición e Imputación",
    },
  
    // Pregunta de Tipo Range: Efectividad en la aplicación de reglas de edición e imputación
    {
      type: "range",
      key: "efectividad_aplicacion_reglas_edicion_imputacion_pregunta_9_4",
      label: "Califique (1-5) qué tan efectiva es la operación estadística en la aplicación de las reglas de edición e imputación para obtener un archivo de datos depurado.",
      name: "efectividad_aplicacion_reglas_edicion_imputacion_pregunta_9_4",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Cumplimiento del Diseño para Cálculo de Indicadores
    {
      type: "sectionTitle",
      key: "cumplimiento_diseno_calculo_indicadores_9_4",
      title: "Cumplimiento del Diseño para Cálculo de Indicadores",
    },
  
    // Pregunta de Tipo Range: Cumplimiento con el diseño al calcular indicadores y tasas de imputación
    {
      type: "range",
      key: "cumplimiento_diseno_calculo_indicadores_pregunta_9_4",
      label: "Califique (1-5) en qué medida la operación estadística cumple con el diseño al calcular los indicadores de las variables con valores no válidos y las tasas de imputación por variable.",
      name: "cumplimiento_diseno_calculo_indicadores_pregunta_9_4",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Evaluación del Proceso de Imputación
    {
      type: "sectionTitle",
      key: "evaluacion_proceso_imputacion_9_4",
      title: "Evaluación del Proceso de Imputación",
    },
  
    // Pregunta de Tipo Text Area: Evaluación del proceso de imputación y cálculo de indicadores
    {
      type: "textArea",
      key: "evaluacion_proceso_imputacion_calculo_indicadores_pregunta_9_4",
      label: "¿Cómo evalúa la operación estadística el proceso de imputación y cálculo de indicadores y tasas de imputación para asegurar la calidad de los datos?",
      name: "evaluacion_proceso_imputacion_calculo_indicadores_pregunta_9_4",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_4",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_9_4",
      initialValue: "",
    },
  
    // Evidencias Documentales para Edición e Imputación
    {
      type: "evidencias",
      key: "evidencias_edicion_imputacion_9_4",
      namePrefix: "edicion_imputacion_9_4",
      fields: [
        { name: "edicion_imputacion_evidencia1_9_4", initialValue: "" },
        { name: "edicion_imputacion_evidencia2_9_4", initialValue: "" },
        { name: "edicion_imputacion_evidencia3_9_4", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_9_4",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_9_4",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  