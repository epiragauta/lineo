export const questions7_2 = [
  
    // Subtítulo: Elaboración del Cuestionario
    {
      type: "sectionTitle",
      key: "elaboracion_cuestionario_7_2",
      title: "Elaboración del Cuestionario",
    },
  
    // Pregunta de Tipo Radio: Elaboración del Cuestionario
    {
      type: "radio",
      key: "elaboracion_cuestionario_pregunta_7_2",
      label: "¿La operación estadística elabora el cuestionario (físico o electrónico) de acuerdo con el diseño establecido?",
      name: "elaboracion_cuestionario_pregunta_7_2",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Evidencias Documentales para Elaboración del Cuestionario
    {
      type: "evidencias",
      key: "evidencias_elaboracion_cuestionario_7_2",
      namePrefix: "elaboracion_cuestionario_7_2",
      fields: [
        { name: "elaboracion_cuestionario_evidencia1_7_2", initialValue: "" },
        { name: "elaboracion_cuestionario_evidencia2_7_2", initialValue: "" },
        { name: "elaboracion_cuestionario_evidencia3_7_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Disponibilidad y Mantenimiento de Equipos
    {
      type: "sectionTitle",
      key: "disponibilidad_mantenimiento_equipos_7_2",
      title: "Disponibilidad y Mantenimiento de Equipos",
    },
  
    // Pregunta de Tipo Radio: Disponibilidad y Mantenimiento de Equipos
    {
      type: "radio",
      key: "disponibilidad_mantenimiento_equipos_pregunta_7_2",
      label: "¿La entidad asegura la disponibilidad, el mantenimiento y la calibración de los equipos de recolección automática?",
      name: "disponibilidad_mantenimiento_equipos_pregunta_7_2",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Evidencias Documentales para Disponibilidad y Mantenimiento de Equipos
    {
      type: "evidencias",
      key: "evidencias_disponibilidad_mantenimiento_equipos_7_2",
      namePrefix: "disponibilidad_mantenimiento_equipos_7_2",
      fields: [
        { name: "disponibilidad_mantenimiento_equipos_evidencia1_7_2", initialValue: "" },
        { name: "disponibilidad_mantenimiento_equipos_evidencia2_7_2", initialValue: "" },
        { name: "disponibilidad_mantenimiento_equipos_evidencia3_7_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Eficiencia en la Elaboración del Cuestionario
    {
      type: "sectionTitle",
      key: "eficiencia_elaboracion_cuestionario_7_2",
      title: "Eficiencia en la Elaboración del Cuestionario",
    },
  
    // Pregunta de Tipo Range: Eficiencia en la Elaboración del Cuestionario
    {
      type: "slider",
      key: "eficiencia_elaboracion_cuestionario_pregunta_7_2",
      label: "Califique de 1-5. ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la elaboración del cuestionario (físico o electrónico) de acuerdo con el diseño?",
      name: "eficiencia_elaboracion_cuestionario_pregunta_7_2",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Eficiencia en la Elaboración del Cuestionario
    {
      type: "evidencias",
      key: "evidencias_eficiencia_elaboracion_cuestionario_7_2",
      namePrefix: "eficiencia_elaboracion_cuestionario_7_2",
      fields: [
        { name: "eficiencia_elaboracion_cuestionario_evidencia1_7_2", initialValue: "" },
        { name: "eficiencia_elaboracion_cuestionario_evidencia2_7_2", initialValue: "" },
        { name: "eficiencia_elaboracion_cuestionario_evidencia3_7_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Evaluación de la Implementación
    {
      type: "sectionTitle",
      key: "evaluacion_implementacion_7_2",
      title: "Evaluación de la Implementación",
    },
  
    // Pregunta de Tipo Range: Evaluación de la Implementación
    {
      type: "slider",
      key: "evaluacion_implementacion_pregunta_7_2",
      label: "Califique 1 a 5, ¿cómo evalúa a la dependencia encargada de la operación estadística en la implementación de los cuestionarios y equipos de recolección automática en el proceso estadístico?",
      name: "evaluacion_implementacion_pregunta_7_2",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Evaluación de la Implementación
    {
      type: "evidencias",
      key: "evidencias_evaluacion_implementacion_7_2",
      namePrefix: "evaluacion_implementacion_7_2",
      fields: [
        { name: "evaluacion_implementacion_evidencia1_7_2", initialValue: "" },
        { name: "evaluacion_implementacion_evidencia2_7_2", initialValue: "" },
        { name: "evaluacion_implementacion_evidencia3_7_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sugerencias para la mejora del Instrumento de Recolección
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_instrumento_recoleccion_7_2",
      title: "Sugerencias para la mejora del Instrumento de Recolección",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_instrumento_recoleccion_pregunta_7_2",
      label: "Pendiente Pregunta",
      name: "sugerencias_mejora_instrumento_recoleccion_pregunta_7_2",
      initialValue: "",
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_7_2",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_7_2",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  