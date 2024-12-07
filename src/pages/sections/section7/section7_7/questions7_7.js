export const questions7_7 = [
  
    // Subtítulo: Plan de Pruebas
    {
      type: "sectionTitle",
      key: "plan_pruebas_7_7",
      title: "Plan de Pruebas",
    },
  
    // Pregunta de Tipo Ratio: Plan de pruebas ejecutado
    {
      type: "radio",
      key: "plan_pruebas_ejecuta_pregunta_7_7",
      label: "¿La operación estadística ejecuta un plan de pruebas que permita identificar las afectaciones en el desarrollo de la operación estadística?",
      name: "plan_pruebas_ejecuta_pregunta_7_7",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Checkbox: Componentes del plan de pruebas
    {
      type: "checkbox",
      key: "componentes_plan_pruebas_pregunta_7_7",
      label: "Si la respuesta es Sí, el plan de pruebas incluye: Seleccione todas las opciones que correspondan",
      name: "componentes_plan_pruebas_pregunta_7_7",
      options: [
        "Identificación de las afectaciones en el desarrollo de la operación estadística",
        "Trazabilidad de las pruebas realizadas a las actividades, métodos, instrumentos y software aplicativo",
        "Documentación de los resultados y las conclusiones",
        "Conservación de la información documentada como evidencia del proceso",
      ],
      initialValue: [],
    },
  
    // Evidencias Documentales para Plan de Pruebas
    {
      type: "evidencias",
      key: "evidencias_plan_pruebas_7_7",
      namePrefix: "plan_pruebas_7_7",
      fields: [
        { name: "plan_pruebas_evidencia1_7_7", initialValue: "" },
        { name: "plan_pruebas_evidencia2_7_7", initialValue: "" },
        { name: "plan_pruebas_evidencia3_7_7", initialValue: "" },
      ],
    },
  
    // Subtítulo: Tipos de Pruebas
    {
      type: "sectionTitle",
      key: "tipos_pruebas_7_7",
      title: "Tipos de Pruebas",
    },
  
    // Pregunta de Tipo Ratio: Inclusión de diferentes tipos de pruebas
    {
      type: "radio",
      key: "tipos_pruebas_incluye_pregunta_7_7",
      label: "¿La operación estadística incluye pruebas unitarias, funcionales o no funcionales al software aplicativo para comprobar que las validaciones están operando de acuerdo con las especificaciones establecidas?",
      name: "tipos_pruebas_incluye_pregunta_7_7",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Evidencias Documentales para Tipos de Pruebas
    {
      type: "evidencias",
      key: "evidencias_tipos_pruebas_7_7",
      namePrefix: "tipos_pruebas_7_7",
      fields: [
        { name: "tipos_pruebas_evidencia1_7_7", initialValue: "" },
        { name: "tipos_pruebas_evidencia2_7_7", initialValue: "" },
        { name: "tipos_pruebas_evidencia3_7_7", initialValue: "" },
      ],
    },
  
    // Subtítulo: Documentación de Acciones
    {
      type: "sectionTitle",
      key: "documentacion_acciones_7_7",
      title: "Documentación de Acciones",
    },
  
    // Pregunta de Tipo Range: Efectividad en la documentación e implementación de acciones
    {
      type: "range",
      key: "efectividad_documentacion_acciones_pregunta_7_7",
      label: "Califique de 1-5. ¿Qué tan efectiva es la operación estadística en documentar e implementar las acciones necesarias a partir de los resultados de las pruebas?",
      name: "efectividad_documentacion_acciones_pregunta_7_7",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Documentación de Acciones
    {
      type: "evidencias",
      key: "evidencias_documentacion_acciones_7_7",
      namePrefix: "documentacion_acciones_7_7",
      fields: [
        { name: "documentacion_acciones_evidencia1_7_7", initialValue: "" },
        { name: "documentacion_acciones_evidencia2_7_7", initialValue: "" },
        { name: "documentacion_acciones_evidencia3_7_7", initialValue: "" },
      ],
    },
  
    // Subtítulo: Implementación de Pruebas
    {
      type: "sectionTitle",
      key: "implementacion_pruebas_7_7",
      title: "Implementación de Pruebas",
    },
  
    // Pregunta de Tipo Range: Aseguramiento de pruebas al cambiar aspectos metodológicos u operativos
    {
      type: "range",
      key: "aseguramiento_pruebas_cambios_pregunta_7_7",
      label: "Califique de 1-5. ¿En qué medida la operación estadística asegura que cada vez que cambien o actualicen los aspectos metodológicos y operativos se realicen las pruebas correspondientes?",
      name: "aseguramiento_pruebas_cambios_pregunta_7_7",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Implementación de Pruebas
    {
      type: "evidencias",
      key: "evidencias_implementacion_pruebas_7_7",
      namePrefix: "implementacion_pruebas_7_7",
      fields: [
        { name: "implementacion_pruebas_evidencia1_7_7", initialValue: "" },
        { name: "implementacion_pruebas_evidencia2_7_7", initialValue: "" },
        { name: "implementacion_pruebas_evidencia3_7_7", initialValue: "" },
      ],
    },
  
    // Subtítulo: Evidencia del Proceso
    {
      type: "sectionTitle",
      key: "evidencia_proceso_7_7",
      title: "Evidencia del Proceso",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la conservación de la información documentada
    {
      type: "textArea",
      key: "evaluacion_conservacion_informacion_evidencia_pregunta_7_7",
      label: "¿Cómo evalúa la operación estadística la conservación de la información documentada como evidencia del proceso de pruebas?",
      name: "evaluacion_conservacion_informacion_evidencia_pregunta_7_7",
      initialValue: "",
    },
  
    // Evidencias Documentales para Evidencia del Proceso
    {
      type: "evidencias",
      key: "evidencias_evidencia_proceso_7_7",
      namePrefix: "evidencia_proceso_7_7",
      fields: [
        { name: "evidencia_proceso_evidencia1_7_7", initialValue: "" },
        { name: "evidencia_proceso_evidencia2_7_7", initialValue: "" },
        { name: "evidencia_proceso_evidencia3_7_7", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sugerencias para la mejora en las Pruebas
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_pruebas_7_7",
      title: "Sugerencias para la mejora en las Pruebas",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar
    {
      type: "textArea",
      key: "sugerencias_mejora_pruebas_pregunta_7_7",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_pruebas_pregunta_7_7",
      initialValue: "",
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_7_7",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_7_7",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  