export const questions11_5 = [
    // Título de la Sección 11.5
    {
      type: "sectionTitle",
      key: "titulo_seccion_11_5",
      title: "Sección 11.5 - Publicación de medidas de calidad",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_11_5",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_11_5",
      content:
        "La difusión de la publicación de las medidas de calidad en la norma técnica estadística es un proceso esencial para garantizar la transparencia y la fiabilidad de las estadísticas producidas. De acuerdo con los lineamientos establecidos en la NTC PE 1000:2020, esta etapa implica la divulgación clara y accesible de los indicadores de calidad utilizados para evaluar las operaciones estadísticas. Es crucial que la información sobre estos indicadores sea compartida de manera sistemática y precisa, permitiendo a los usuarios y partes interesadas entender el proceso de calidad detrás de los datos, así como identificar áreas de mejora y asegurar la confianza en la información estadística.",
    },
  
    // Subtítulo: Difusión de Medidas de Calidad
    {
      type: "sectionTitle",
      key: "difusion_medidas_calidad_11_5",
      title: "Difusión de Medidas de Calidad",
    },
  
    // Pregunta de Tipo Ratio: Difusión adecuada de medidas de calidad
    {
      type: "radio",
      key: "difusion_medidas_calidad_pregunta_11_5",
      label: "¿La dependencia encargada de la operación estadística difunde las medidas de calidad asociadas a las operaciones estadísticas conforme el diseño estadístico?",
      name: "difusion_medidas_calidad_pregunta_11_5",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Checkbox: Elementos incluidos en la difusión de medidas de calidad
    {
      type: "checkbox",
      key: "elementos_difusion_medidas_calidad_pregunta_11_5",
      label: "Si la respuesta es sí, incluye la difusión de:",
      name: "elementos_difusion_medidas_calidad_pregunta_11_5",
      options: [
        "Porcentaje de cobertura",
        "Porcentaje de no respuesta",
        "Intervalos de confianza",
        "Coeficientes de variación o error muestral",
        "Tasa de imputación para las principales variables",
      ],
      initialValue: [],
    },
  
    // Subtítulo: Medidas de Calidad en Operaciones por Muestreo
    {
      type: "sectionTitle",
      key: "medidas_calidad_operaciones_muestreo_11_5",
      title: "Medidas de Calidad en Operaciones por Muestreo",
    },
  
    // Pregunta de Tipo Ratio: Publicación de intervalos de confianza y coeficientes de variación en muestreo probabilístico
    {
      type: "radio",
      key: "publicacion_intervalos_coeficientes_muestreo_pregunta_11_5",
      label: "Para las operaciones estadísticas por muestreo probabilístico, ¿la dependencia encargada de la operación estadística publica los intervalos de confianza y coeficientes de variación?",
      name: "publicacion_intervalos_coeficientes_muestreo_pregunta_11_5",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Tasa de Imputación
    {
      type: "sectionTitle",
      key: "tasa_imputacion_11_5",
      title: "Tasa de Imputación",
    },
  
    // Pregunta de Tipo Ratio: Difusión de la tasa de imputación para principales variables
    {
      type: "radio",
      key: "difusion_tasa_imputacion_pregunta_11_5",
      label: "¿La dependencia encargada de la operación estadística difunde la tasa de imputación para las principales variables en operaciones estadísticas que realizan imputación?",
      name: "difusion_tasa_imputacion_pregunta_11_5",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Calidad de la Difusión de Medidas Estadísticas
    {
      type: "sectionTitle",
      key: "calidad_difusion_medidas_estadisticas_11_5",
      title: "Calidad de la Difusión de Medidas Estadísticas",
    },
  
    // Pregunta de Tipo Range: Efectividad en la difusión de medidas de calidad
    {
      type: "range",
      key: "efectividad_difusion_medidas_calidad_pregunta_11_5",
      label: "Califique (1-5) qué tan efectiva es la dependencia encargada de la operación estadística en difundir las medidas de calidad de la operación estadística, conforme a los criterios establecidos en el diseño.",
      name: "efectividad_difusion_medidas_calidad_pregunta_11_5",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Notas de Interpretación
    {
      type: "sectionTitle",
      key: "notas_interpretacion_11_5",
      title: "Notas de Interpretación",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la generación de notas de interpretación
    {
      type: "textArea",
      key: "evaluacion_notas_interpretacion_pregunta_11_5",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística la generación de notas de interpretación para facilitar la comprensión de las medidas de calidad indicadas en el diseño estadístico?",
      name: "evaluacion_notas_interpretacion_pregunta_11_5",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_5",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_5",
      initialValue: "",
    },
  
    // Evidencias Documentales para Publicación de medidas de calidad
    {
      type: "evidencias",
      key: "evidencias_publicacion_medidas_calidad_11_5",
      namePrefix: "publicacion_medidas_calidad_11_5",
      fields: [
        { name: "publicacion_medidas_calidad_evidencia1_11_5", initialValue: "" },
        { name: "publicacion_medidas_calidad_evidencia2_11_5", initialValue: "" },
        { name: "publicacion_medidas_calidad_evidencia3_11_5", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_11_5",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_11_5",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  