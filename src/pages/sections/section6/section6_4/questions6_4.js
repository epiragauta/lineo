export const questions6_4 = [
    // Título de la Sección 6.4
    {
      type: "sectionTitle",
      key: "titulo_seccion_6_4",
      title: "Sección 6.4 - Diseño Estadístico",
    },
    
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_6_4",
      title: "Introducción",
    },
    
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_6_4",
      content: "El diseño estadístico es una fase fundamental que garantiza que la estructura y metodología de la operación estadística sean coherentes con los objetivos establecidos y cumplan los estándares de calidad definidos. De acuerdo con los lineamientos de la NTC PE 1000:2020, este proceso incluye la definición de variables, la selección de unidades de observación, el diseño muestral y la elección de técnicas de recolección y procesamiento de datos. Su correcta implementación permite asegurar la fiabilidad, la representatividad y la utilidad de la información generada, minimizando posibles sesgos y optimizando los recursos disponibles.",
    },
    
    // Subtítulo: Determinación y Documentación del Diseño Estadístico
    {
      type: "sectionTitle",
      key: "determinacion_documentacion_diseno_estadistico",
      title: "Determinación y Documentación del Diseño Estadístico",
    },
    
    // Pregunta de Tipo Radio: Determinación y Documentación del Diseño Estadístico
    {
      type: "radio",
      key: "determinacion_documentacion_diseno_estadistico_pregunta",
      label: "¿La operación estadística determina y documenta adecuadamente el universo de estudio, la población objetivo, las unidades estadísticas y el periodo de referencia?",
      name: "determinacion_documentacion_diseno_estadistico_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Preguntas de Tipo Radio: Aspectos Incluidos en la Documentación del Diseño Estadístico
    {
      type: "radio",
      key: "aspectos_incluidos_diseno_estadistico_universo_pregunta",
      label: "¿El universo de estudio?",
      name: "aspectos_incluidos_diseno_estadistico_universo_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "aspectos_incluidos_diseno_estadistico_poblacion_pregunta",
      label: "¿La población objetivo?",
      name: "aspectos_incluidos_diseno_estadistico_poblacion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "aspectos_incluidos_diseno_estadistico_unidades_pregunta",
      label: "¿Las unidades estadísticas?",
      name: "aspectos_incluidos_diseno_estadistico_unidades_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "aspectos_incluidos_diseno_estadistico_periodo_pregunta",
      label: "¿El periodo de referencia?",
      name: "aspectos_incluidos_diseno_estadistico_periodo_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Determinación y Documentación del Diseño Estadístico
    {
      type: "evidencias",
      key: "determinacion_documentacion_diseno_estadistico_evidencias",
      namePrefix: "determinacion_documentacion_diseno_estadistico",
      fields: [
        { name: "determinacion_documentacion_diseno_estadistico_evidencia1", initialValue: "" },
        { name: "determinacion_documentacion_diseno_estadistico_evidencia2", initialValue: "" },
        { name: "determinacion_documentacion_diseno_estadistico_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Marco Estadístico
    {
      type: "sectionTitle",
      key: "marco_estadistico",
      title: "Marco Estadístico",
    },
    
    // Pregunta de Tipo Radio: Definición y Documentación del Marco Estadístico
    {
      type: "radio",
      key: "definicion_documentacion_marco_estadistico_pregunta",
      label: "¿La operación estadística define y documenta un marco estadístico con las características necesarias: completitud, actualización, cobertura geográfica, ausencia de duplicidades y existencia de variables adicionales para diseñar muestras más eficientes?",
      name: "definicion_documentacion_marco_estadistico_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Pregunta de Tipo Checkbox: Características del Marco Estadístico
    {
      type: "checkbox",
      key: "caracteristicas_marco_estadistico_pregunta",
      label: "¿Cuáles de las siguientes características están presentes en el marco estadístico?",
      name: "caracteristicas_marco_estadistico_pregunta",
      options: [
        "Completitud",
        "Actualización",
        "Cobertura geográfica",
        "Sin duplicidades",
        "Existencia de variables adicionales",
      ],
      initialValue: [],
    },
    
    // Evidencias Documentales para Marco Estadístico
    {
      type: "evidencias",
      key: "marco_estadistico_evidencias",
      namePrefix: "marco_estadistico",
      fields: [
        { name: "marco_estadistico_evidencia1", initialValue: "" },
        { name: "marco_estadistico_evidencia2", initialValue: "" },
        { name: "marco_estadistico_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Diseño Muestral
    {
      type: "sectionTitle",
      key: "diseno_muestral",
      title: "Diseño Muestral",
    },
    
    // Pregunta de Tipo Radio: Definición y Documentación del Diseño Muestral
    {
      type: "radio",
      key: "definicion_documentacion_diseno_muestral_pregunta",
      label: "¿La operación estadística define, documenta, mantiene y mejora un diseño muestral que sea congruente con el diseño temático y el objetivo de la operación estadística, y que considere variables de interés, precisión, método de muestreo, marco muestral, tamaño de la muestra, selección y conformación de la muestra, parámetros de estimación, medidas de calidad y mantenimiento de la muestra?",
      name: "definicion_documentacion_diseno_muestral_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Pregunta de Tipo Slider: Efectividad en el Diseño Muestral
    {
      type: "slider",
      key: "efectividad_diseno_muestral_pregunta",
      label: "Si la respuesta es Sí, Califique de 1-5 ¿Cómo calificaría la efectividad en cada uno de estos aspectos?",
      name: "efectividad_diseno_muestral_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Diseño Muestral
    {
      type: "evidencias",
      key: "diseno_muestral_evidencias",
      namePrefix: "diseno_muestral",
      fields: [
        { name: "diseno_muestral_evidencia1", initialValue: "" },
        { name: "diseno_muestral_evidencia2", initialValue: "" },
        { name: "diseno_muestral_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Control de Sesgo
    {
      type: "sectionTitle",
      key: "control_sesgo",
      title: "Control de Sesgo",
    },
    
    // Pregunta de Tipo Radio: Definición y Documentación de Mecanismos de Control de Sesgo
    {
      type: "radio",
      key: "definicion_documentacion_control_sesgo_pregunta",
      label: "¿La operación estadística define, documenta, mantiene y mejora mecanismos para controlar el sesgo, incluyendo identificación y control de situaciones que afectan la recolección, manejo de la no respuesta, entrenamiento del personal, seguimiento y corrección de instrumentos defectuosos y control del sesgo muestral?",
      name: "definicion_documentacion_control_sesgo_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Pregunta de Tipo Slider: Efectividad en el Control de Sesgo
    {
      type: "slider",
      key: "efectividad_control_sesgo_pregunta",
      label: "Si la respuesta es Sí, Califique de 1-5 ¿Cómo calificaría la efectividad en cada uno de estos mecanismos?",
      name: "efectividad_control_sesgo_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Control de Sesgo
    {
      type: "evidencias",
      key: "control_sesgo_evidencias",
      namePrefix: "control_sesgo",
      fields: [
        { name: "control_sesgo_evidencia1", initialValue: "" },
        { name: "control_sesgo_evidencia2", initialValue: "" },
        { name: "control_sesgo_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Métodos Estadísticos
    {
      type: "sectionTitle",
      key: "metodos_estadisticos",
      title: "Métodos Estadísticos",
    },
    
    // Pregunta de Tipo Radio: Selección y Aplicación de Métodos Estadísticos
    {
      type: "radio",
      key: "seleccion_aplicacion_metodos_estadisticos_pregunta",
      label: "¿La operación estadística selecciona, documenta y aplica métodos, técnicas o herramientas estadísticas para generar información con rigor técnico, y determina y documenta los requerimientos funcionales para el desarrollo de rutinas o programas de selección de muestra y estimaciones?",
      name: "seleccion_aplicacion_metodos_estadisticos_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Pregunta de Tipo Slider: Efectividad en la Selección y Aplicación de Métodos Estadísticos
    {
      type: "slider",
      key: "efectividad_metodos_estadisticos_pregunta",
      label: "Si la respuesta es Sí, Califique de 1-5 ¿Cómo calificaría la selección y aplicación de estos métodos, técnicas o herramientas?",
      name: "efectividad_metodos_estadisticos_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Métodos Estadísticos
    {
      type: "evidencias",
      key: "metodos_estadisticos_evidencias",
      namePrefix: "metodos_estadisticos",
      fields: [
        { name: "metodos_estadisticos_evidencia1", initialValue: "" },
        { name: "metodos_estadisticos_evidencia2", initialValue: "" },
        { name: "metodos_estadisticos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sugerencias para Diseño Estadístico
    {
      type: "sectionTitle",
      key: "sugerencias_diseno_estadistico",
      title: "Sugerencias para Diseño Estadístico",
    },
    
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_diseno_estadistico_pregunta",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación del alcance temático, la construcción del marco de referencia, o la documentación de los conceptos y definiciones en sus operaciones estadísticas?",
      name: "sugerencias_diseno_estadistico_pregunta",
      initialValue: "",
    },
    
    // Subtítulo: Acciones Requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_6_4",
      title: "Acciones requeridas",
    },
    
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_6_4",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  