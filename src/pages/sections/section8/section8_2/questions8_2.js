export const questions8_2 = [
    // Título de la Sección 8.2
    {
      type: "sectionTitle",
      key: "titulo_seccion_8_2",
      title: "Sección 8.2 - Actividades previas a la Recolección o acopio",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_8_2",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_8_2",
      content:
        "La recolección o acopio de datos es una etapa fundamental en el proceso de producción estadística, ya que asegura la obtención de información precisa y confiable para el análisis posterior. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta fase implica la planificación adecuada de los métodos y herramientas para la recopilación de datos, garantizando su calidad y consistencia. Es esencial que se definan claramente las fuentes de información, los procedimientos de recolección y los criterios de validación, con el fin de evitar sesgos y errores. Además, se deben establecer protocolos para la supervisión y el control de calidad durante todo el proceso, asegurando que los datos recopilados sean representativos y aptos para el análisis estadístico.",
    },
  
    // Subtítulo: Recolección de Datos
    {
      type: "sectionTitle",
      key: "recoleccion_datos_8_2",
      title: "Recolección de Datos",
    },
  
    // Pregunta de Tipo Radio: Recolección o acopio según diseño
    {
      type: "radio",
      key: "recoleccion_datos_pregunta_8_2",
      label: "¿La operación estadística recolecta o acopia los datos de acuerdo con el diseño previamente establecido?",
      name: "recoleccion_datos_pregunta_8_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Radio: Uso de instrumentos y herramientas definidas
    {
      type: "radio",
      key: "uso_instrumentos_herramientas_pregunta_8_2",
      label: "Si la respuesta es Sí, ¿se utilizan los instrumentos y herramientas definidos en el plan de trabajo?",
      name: "uso_instrumentos_herramientas_pregunta_8_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Evidencias Documentales para Recolección de Datos
    {
      type: "evidencias",
      key: "evidencias_recoleccion_datos_8_2",
      namePrefix: "recoleccion_datos_8_2",
      fields: [
        { name: "recoleccion_datos_evidencia1_8_2", initialValue: "" },
        { name: "recoleccion_datos_evidencia2_8_2", initialValue: "" },
        { name: "recoleccion_datos_evidencia3_8_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Aplicación de Instrumentos
    {
      type: "sectionTitle",
      key: "aplicacion_instrumentos_8_2",
      title: "Aplicación de Instrumentos",
    },
  
    // Pregunta de Tipo Radio: Aplicación correcta de instrumentos
    {
      type: "radio",
      key: "aplicacion_correcta_instrumentos_pregunta_8_2",
      label: "¿La operación estadística aplica correctamente los instrumentos definidos para la recolección o acopio de datos?",
      name: "aplicacion_correcta_instrumentos_pregunta_8_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Checkbox: Instrumentos utilizados
    {
      type: "checkbox",
      key: "instrumentos_utilizados_pregunta_8_2",
      label: "Si la respuesta es Sí, ¿cuáles de los siguientes instrumentos se utilizan en el proceso?: Seleccione todas las opciones que correspondan.",
      name: "instrumentos_utilizados_pregunta_8_2",
      options: [
        "Cuestionarios",
        "Entrevistas",
        "Encuestas",
        "Formularios de registro",
        "Otras herramientas específicas",
      ],
      initialValue: [],
    },
  
    // Pregunta de Tipo Text Area: Especificar otras herramientas
    {
      type: "textArea",
      key: "especificar_otras_herramientas_pregunta_8_2",
      label: "¿Cuáles?",
      name: "especificar_otras_herramientas_pregunta_8_2",
      initialValue: "",
    },
  
    // Evidencias Documentales para Aplicación de Instrumentos
    {
      type: "evidencias",
      key: "evidencias_aplicacion_instrumentos_8_2",
      namePrefix: "aplicacion_instrumentos_8_2",
      fields: [
        { name: "aplicacion_instrumentos_evidencia1_8_2", initialValue: "" },
        { name: "aplicacion_instrumentos_evidencia2_8_2", initialValue: "" },
        { name: "aplicacion_instrumentos_evidencia3_8_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Plan de Trabajo
    {
      type: "sectionTitle",
      key: "plan_trabajo_8_2",
      title: "Plan de Trabajo",
    },
  
    // Pregunta de Tipo Range: Efectividad en seguir el plan de trabajo
    {
      type: "range",
      key: "efectividad_seguir_plan_trabajo_pregunta_8_2",
      label: "Califique de 1-5. ¿Qué tan efectivamente se sigue el plan de trabajo establecido para la recolección o acopio de datos?",
      name: "efectividad_seguir_plan_trabajo_pregunta_8_2",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Plan de Trabajo
    {
      type: "evidencias",
      key: "evidencias_plan_trabajo_8_2",
      namePrefix: "plan_trabajo_8_2",
      fields: [
        { name: "plan_trabajo_evidencia1_8_2", initialValue: "" },
        { name: "plan_trabajo_evidencia2_8_2", initialValue: "" },
        { name: "plan_trabajo_evidencia3_8_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Cumplimiento del Diseño
    {
      type: "sectionTitle",
      key: "cumplimiento_diseno_8_2",
      title: "Cumplimiento del Diseño",
    },
  
    // Pregunta de Tipo Range: Cumplimiento con el diseño de recolección o acopio
    {
      type: "range",
      key: "cumplimiento_diseno_recoleccion_pregunta_8_2",
      label: "Califique de 1-5. ¿En qué medida la operación estadística cumple con el diseño previsto para la recolección o acopio de datos?",
      name: "cumplimiento_diseno_recoleccion_pregunta_8_2",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Cumplimiento del Diseño
    {
      type: "evidencias",
      key: "evidencias_cumplimiento_diseno_8_2",
      namePrefix: "cumplimiento_diseno_8_2",
      fields: [
        { name: "cumplimiento_diseno_evidencia1_8_2", initialValue: "" },
        { name: "cumplimiento_diseno_evidencia2_8_2", initialValue: "" },
        { name: "cumplimiento_diseno_evidencia3_8_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Evaluación de Herramientas
    {
      type: "sectionTitle",
      key: "evaluacion_herramientas_8_2",
      title: "Evaluación de Herramientas",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la efectividad de las herramientas
    {
      type: "textArea",
      key: "evaluacion_efectividad_herramientas_pregunta_8_2",
      label: "¿Cómo evalúa la operación estadística la efectividad de las herramientas utilizadas para la recolección o acopio de datos, de acuerdo con el plan de trabajo?",
      name: "evaluacion_efectividad_herramientas_pregunta_8_2",
      initialValue: "",
    },
  
    // Evidencias Documentales para Evaluación de Herramientas
    {
      type: "evidencias",
      key: "evidencias_evaluacion_herramientas_8_2",
      namePrefix: "evaluacion_herramientas_8_2",
      fields: [
        { name: "evaluacion_herramientas_evidencia1_8_2", initialValue: "" },
        { name: "evaluacion_herramientas_evidencia2_8_2", initialValue: "" },
        { name: "evaluacion_herramientas_evidencia3_8_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sugerencias para la mejora en la Recolección o acopio de Datos
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_recoleccion_acopio_datos_8_2",
      title: "Sugerencias para la mejora en la Recolección o acopio de Datos",
    },
  
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_recoleccion_acopio_datos_pregunta_8_2",
      label: "Pendiente Pregunta",
      name: "sugerencias_mejora_recoleccion_acopio_datos_pregunta_8_2",
      initialValue: "",
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_8_2",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_8_2",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  