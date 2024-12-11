export const questions6_5 = [
    // Título de la Sección 6.5
    {
      type: "sectionTitle",
      key: "titulo_seccion_6_5",
      title: "Sección 6.5 - Diseño de la Recolección o acopio",
    },
    
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_6_5",
      title: "Introducción",
    },
    
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_6_5",
      content: "El diseño de la recolección o acopio es una etapa crucial para garantizar que los datos recolectados sean pertinentes, confiables y adecuados para los objetivos de la operación estadística. Según los lineamientos de la NTC PE 1000:2020, esta fase implica la definición detallada de los métodos, instrumentos y procedimientos necesarios para captar la información requerida, asegurando la calidad y consistencia de los datos. Además, considera aspectos como la validación de los instrumentos y la planeación logística, minimizando posibles sesgos o errores durante la recolección.",
    },
    
    // Subtítulo: Diseño de la Recolección de Datos
    {
      type: "sectionTitle",
      key: "diseno_recoleccion_datos",
      title: "Diseño de la Recolección de Datos",
    },
    
    // Pregunta de Tipo Radio: Determinación y Documentación de Métodos e Instrumentos
    {
      type: "radio",
      key: "determinacion_documentacion_metodos_instrumentos_pregunta",
      label: "¿La dependencia encargada de la operación estadística determina y documenta adecuadamente los métodos de recolección y los instrumentos apropiados para las operaciones estadísticas que realizan la recolección en campo o mediante autodiligenciamiento?",
      name: "determinacion_documentacion_metodos_instrumentos_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Pregunta de Tipo Checkbox: Aspectos Considerados en el Diseño de la Recolección
    {
      type: "checkbox",
      key: "aspectos_considerados_diseno_recoleccion_pregunta",
      label: "Si la respuesta es Sí, ¿El diseño de la recolección considera los siguientes aspectos?",
      name: "aspectos_considerados_diseno_recoleccion_pregunta",
      options: [
        "estructura operativa y tecnológica",
        "roles del personal",
        "perfiles del personal",
        "cargas de trabajo de recolección",
        "rutas de recolección",
        "digitación, transmisión o digitalización de los datos",
        "validación de los datos",
        "transportes necesarios",
        "logística necesaria",
        "cartografía actualizada",
        "georreferenciación de las unidades de observación",
        "entrenamiento al personal",
        "sensibilización de las fuentes",
        "manejo de novedades operativas",
      ],
      initialValue: [],
    },
    
    // Evidencias Documentales para Diseño de la Recolección de Datos
    {
      type: "evidencias",
      key: "diseno_recoleccion_datos_evidencias",
      namePrefix: "diseno_recoleccion_datos",
      fields: [
        { name: "diseno_recoleccion_datos_evidencia1", initialValue: "" },
        { name: "diseno_recoleccion_datos_evidencia2", initialValue: "" },
        { name: "diseno_recoleccion_datos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Control y Supervisión de la Recolección
    {
      type: "sectionTitle",
      key: "control_supervision_recoleccion",
      title: "Control y Supervisión de la Recolección",
    },
    
    // Pregunta de Tipo Radio: Definición y Documentación de Mecanismos de Control y Supervisión
    {
      type: "radio",
      key: "definicion_documentacion_mecanismos_control_supervision_pregunta",
      label: "¿La dependencia encargada de la operación estadística define y documenta mecanismos de control y supervisión para la recolección de datos?",
      name: "definicion_documentacion_mecanismos_control_supervision_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Pregunta de Tipo Checkbox: Mecanismos de Control y Supervisión Utilizados
    {
      type: "checkbox",
      key: "mecanismos_control_supervision_utilizados_pregunta",
      label: "Si la respuesta es Sí, ¿Cuáles de los siguientes mecanismos utiliza la entidad?",
      name: "mecanismos_control_supervision_utilizados_pregunta",
      options: [
        "Acompañamiento al personal operativo en terreno",
        "Observación de entrevistas",
        "Re-entrevistas",
        "Revisión del diligenciamiento de cuestionarios",
        "Cálculo y análisis de indicadores operativos",
        "Informes de avance operativos",
        "Formatos de control y seguimiento (cobertura, recorridos, estado de resultados, inconsistencias, re-entrevistas)",
      ],
      initialValue: [],
    },
    
    // Evidencias Documentales para Control y Supervisión de la Recolección
    {
      type: "evidencias",
      key: "control_supervision_recoleccion_evidencias",
      namePrefix: "control_supervision_recoleccion",
      fields: [
        { name: "control_supervision_recoleccion_evidencia1", initialValue: "" },
        { name: "control_supervision_recoleccion_evidencia2", initialValue: "" },
        { name: "control_supervision_recoleccion_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Documentación y Conservación de Datos
    {
      type: "sectionTitle",
      key: "documentacion_conservacion_datos",
      title: "Documentación y Conservación de Datos",
    },
    
    // Pregunta de Tipo Slider: Efectividad en la Gestión y Conservación de Datos
    {
      type: "slider",
      key: "efectividad_gestion_conservacion_datos_pregunta",
      label: "Califique de 1-5 ¿Qué tan efectiva es la dependencia encargada de la operación estadística en determinar, gestionar y conservar los datos obtenidos, incluyendo archivos estructurados y no estructurados?",
      name: "efectividad_gestion_conservacion_datos_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
    
    // Evidencias Documentales para Documentación y Conservación de Datos
    {
      type: "evidencias",
      key: "documentacion_conservacion_datos_evidencias",
      namePrefix: "documentacion_conservacion_datos",
      fields: [
        { name: "documentacion_conservacion_datos_evidencia1", initialValue: "" },
        { name: "documentacion_conservacion_datos_evidencia2", initialValue: "" },
        { name: "documentacion_conservacion_datos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sensibilización
    {
      type: "sectionTitle",
      key: "sensibilizacion",
      title: "Sensibilización",
    },
    
    // Pregunta de Tipo Slider: Determinación y Documentación de Actividades de Sensibilización
    {
      type: "slider",
      key: "determinacion_documentacion_actividades_sensibilizacion_pregunta",
      label: "Califique de 1-5. ¿En qué medida la dependencia encargada de la operación estadística determina y documenta las actividades de sensibilización, incluyendo productos, canales y población objetivo?",
      name: "determinacion_documentacion_actividades_sensibilizacion_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
    
    // Evidencias Documentales para Sensibilización
    {
      type: "evidencias",
      key: "sensibilizacion_evidencias",
      namePrefix: "sensibilizacion",
      fields: [
        { name: "sensibilizacion_evidencia1", initialValue: "" },
        { name: "sensibilizacion_evidencia2", initialValue: "" },
        { name: "sensibilizacion_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Entrenamiento
    {
      type: "sectionTitle",
      key: "entrenamiento",
      title: "Entrenamiento",
    },
    
    // Pregunta de Tipo Slider: Entrenamiento de Roles Involucrados en la Recolección
    {
      type: "slider",
      key: "entrenamiento_roles_recoleccion_pregunta",
      label: "Califique de 1-5. ¿La dependencia encargada de la operación estadística el entrenamiento de los roles involucrados en la recolección o el acopio, según los contenidos y aspectos logísticos establecidos?",
      name: "entrenamiento_roles_recoleccion_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
    
    // Evidencias Documentales para Entrenamiento
    {
      type: "evidencias",
      key: "entrenamiento_evidencias",
      namePrefix: "entrenamiento",
      fields: [
        { name: "entrenamiento_evidencia1", initialValue: "" },
        { name: "entrenamiento_evidencia2", initialValue: "" },
        { name: "entrenamiento_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sugerencias Diseño de la Recolección o acopio
    {
      type: "sectionTitle",
      key: "sugerencias_diseno_recoleccion",
      title: "Sugerencias Diseño de la Recolección o acopio",
    },
    
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_diseno_recoleccion_pregunta",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de diseño de la recolección o acopio en sus operaciones estadísticas?",
      name: "sugerencias_diseno_recoleccion_pregunta",
      initialValue: "",
    },
    
    // Subtítulo: Acciones Requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_6_5",
      title: "Acciones requeridas",
    },
    
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_6_5",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  