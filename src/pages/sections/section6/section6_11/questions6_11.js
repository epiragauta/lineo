export const questions6_11 = [
    // Subtítulo: Determinación y Documentación de Pruebas
    {
      type: "sectionTitle",
      key: "determinacion_documentacion_pruebas",
      title: "Determinación y Documentación de Pruebas",
    },
    
    // Pregunta de Tipo Radio: Determinación y Documentación de Pruebas
    {
      type: "radio",
      key: "determinacion_documentacion_pruebas_pregunta",
      label: "¿La operación estadística determina y documenta adecuadamente las pruebas que se realizarán durante la fase de construcción, así como cuando se modifiquen o actualicen aspectos metodológicos, operativos e informáticos?",
      name: "determinacion_documentacion_pruebas_pregunta",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
    
    // Preguntas de Tipo Radio: Aspectos Incluidos en la Documentación de Pruebas
    {
      type: "radio",
      key: "documentacion_pruebas_entradas_pregunta",
      label: "¿Las entradas?",
      name: "documentacion_pruebas_entradas_pregunta",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
    {
      type: "radio",
      key: "documentacion_pruebas_salidas_pregunta",
      label: "¿Las salidas (productos)?",
      name: "documentacion_pruebas_salidas_pregunta",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
    {
      type: "radio",
      key: "documentacion_pruebas_interacciones_pregunta",
      label: "¿Las interacciones entre las actividades?",
      name: "documentacion_pruebas_interacciones_pregunta",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
    {
      type: "radio",
      key: "documentacion_pruebas_identificacion_riesgos_pregunta",
      label: "¿La identificación de los riesgos para las actividades críticas?",
      name: "documentacion_pruebas_identificacion_riesgos_pregunta",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
    
    // Evidencias Documentales para Determinación y Documentación de Pruebas
    {
      type: "evidencias",
      key: "determinacion_documentacion_pruebas_evidencias",
      namePrefix: "determinacion_documentacion_pruebas",
      fields: [
        { name: "determinacion_documentacion_pruebas_evidencia1", initialValue: "" },
        { name: "determinacion_documentacion_pruebas_evidencia2", initialValue: "" },
        { name: "determinacion_documentacion_pruebas_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Consideración de Pruebas Funcionales y No Funcionales
    {
      type: "sectionTitle",
      key: "consideracion_pruebas_funcionales_no_funcionales",
      title: "Consideración de Pruebas Funcionales y No Funcionales",
    },
    
    // Pregunta de Tipo Radio: Consideración de Pruebas Funcionales y No Funcionales
    {
      type: "radio",
      key: "consideracion_pruebas_funcionales_no_funcionales_pregunta",
      label: "¿La operación estadística considera tanto las pruebas funcionales como las no funcionales para el software aplicativo?",
      name: "consideracion_pruebas_funcionales_no_funcionales_pregunta",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
    
    // Pregunta de Tipo Checkbox: Tipos de Pruebas Incluidas
    {
      type: "checkbox",
      key: "tipos_pruebas_incluidas_pregunta",
      label: "Si la respuesta es Sí, ¿Cuáles de los siguientes tipos de pruebas se incluyen?",
      name: "tipos_pruebas_incluidas_pregunta",
      options: [
        "Pruebas funcionales, como la verificación de reglas o código",
        "Pruebas no funcionales, como la verificación de seguridad informática",
        "Pruebas de capacidad de concurrencia de usuarios",
        "Pruebas de ancho de banda",
        "Pruebas de recepción de archivos grandes",
        "Pruebas de capacidad de retransmisión",
        "Pruebas de completitud de paquetes transmitidos",
        "Pruebas de actualización e instalación del software",
        "Pruebas de carga",
        "Pruebas de recuperación o vuelta atrás",
      ],
      initialValue: [],
    },
    
    // Evidencias Documentales para Consideración de Pruebas Funcionales y No Funcionales
    {
      type: "evidencias",
      key: "consideracion_pruebas_funcionales_no_funcionales_evidencias",
      namePrefix: "consideracion_pruebas_funcionales_no_funcionales",
      fields: [
        { name: "consideracion_pruebas_funcionales_no_funcionales_evidencia1", initialValue: "" },
        { name: "consideracion_pruebas_funcionales_no_funcionales_evidencia2", initialValue: "" },
        { name: "consideracion_pruebas_funcionales_no_funcionales_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Efectividad en Documentación y Determinación de Pruebas
    {
      type: "sectionTitle",
      key: "efectividad_documentacion_determinacion_pruebas",
      title: "Efectividad en Documentación y Determinación de Pruebas",
    },
    
    // Pregunta de Tipo Range: Efectividad en Documentación y Determinación de Pruebas
    {
      type: "slider",
      key: "efectividad_documentacion_determinacion_pruebas_pregunta",
      label: "Califique de 1-5. ¿Qué tan efectiva es la operación estadística en la determinación y documentación de las pruebas que se realizan durante la fase de construcción y cuando se modifican o actualizan aspectos metodológicos, operativos e informáticos?",
      name: "efectividad_documentacion_determinacion_pruebas_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Efectividad en Documentación y Determinación de Pruebas
    {
      type: "evidencias",
      key: "efectividad_documentacion_determinacion_pruebas_evidencias",
      namePrefix: "efectividad_documentacion_determinacion_pruebas",
      fields: [
        { name: "efectividad_documentacion_determinacion_pruebas_evidencia1", initialValue: "" },
        { name: "efectividad_documentacion_determinacion_pruebas_evidencia2", initialValue: "" },
        { name: "efectividad_documentacion_determinacion_pruebas_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Inclusión de Pruebas Funcionales y No Funcionales
    {
      type: "sectionTitle",
      key: "inclusion_pruebas_funcionales_no_funcionales",
      title: "Inclusión de Pruebas Funcionales y No Funcionales",
    },
    
    // Pregunta de Tipo Range: Inclusión de Pruebas Funcionales y No Funcionales
    {
      type: "slider",
      key: "inclusion_pruebas_funcionales_no_funcionales_pregunta",
      label: "Califique de 1-5. ¿En qué medida la operación estadística incluye y ejecuta pruebas funcionales y no funcionales para el software aplicativo?",
      name: "inclusion_pruebas_funcionales_no_funcionales_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Inclusión de Pruebas Funcionales y No Funcionales
    {
      type: "evidencias",
      key: "inclusion_pruebas_funcionales_no_funcionales_evidencias",
      namePrefix: "inclusion_pruebas_funcionales_no_funcionales",
      fields: [
        { name: "inclusion_pruebas_funcionales_no_funcionales_evidencia1", initialValue: "" },
        { name: "inclusion_pruebas_funcionales_no_funcionales_evidencia2", initialValue: "" },
        { name: "inclusion_pruebas_funcionales_no_funcionales_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Evaluación de Pruebas y Actualizaciones
    {
      type: "sectionTitle",
      key: "evaluacion_pruebas_actualizaciones",
      title: "Evaluación de Pruebas y Actualizaciones",
    },
    
    // Pregunta de Tipo Range: Evaluación de Pruebas y Actualizaciones
    {
      type: "slider",
      key: "evaluacion_pruebas_actualizaciones_pregunta",
      label: "Califique de 1-5. ¿Cómo evalúa la operación estadística la ejecución de pruebas y actualizaciones de los aspectos metodológicos, operativos e informáticos, según lo especificado en el diseño de pruebas?",
      name: "evaluacion_pruebas_actualizaciones_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Evaluación de Pruebas y Actualizaciones
    {
      type: "evidencias",
      key: "evaluacion_pruebas_actualizaciones_evidencias",
      namePrefix: "evaluacion_pruebas_actualizaciones",
      fields: [
        { name: "evaluacion_pruebas_actualizaciones_evidencia1", initialValue: "" },
        { name: "evaluacion_pruebas_actualizaciones_evidencia2", initialValue: "" },
        { name: "evaluacion_pruebas_actualizaciones_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sugerencias para la mejora del Diseño de las Pruebas
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_diseno_pruebas",
      title: "Sugerencias para la mejora del Diseño de las Pruebas",
    },
    
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_diseno_pruebas_pregunta",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de diseño de las pruebas en sus operaciones estadísticas?",
      name: "sugerencias_mejora_diseno_pruebas_pregunta",
      initialValue: "",
    },
    
    // Subtítulo: Acciones Requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_6_11",
      title: "Acciones requeridas",
    },
    
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_6_11",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  