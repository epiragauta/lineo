export const questions6_9 = [

    
    // Subtítulo: Determinación y Documentación del Flujo de Trabajo
    {
      type: "sectionTitle",
      key: "determinacion_documentacion_flujo_trabajo",
      title: "Determinación y Documentación del Flujo de Trabajo",
    },
    
    // Pregunta de Tipo Radio: Determinación y Documentación del Flujo de Trabajo
    {
      type: "radio",
      key: "determinacion_documentacion_flujo_trabajo_pregunta",
      label: "¿La operación estadística determina, documenta y conserva de manera esquemática el flujo de las actividades desarrolladas en el proceso estadístico?",
      name: "determinacion_documentacion_flujo_trabajo_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Preguntas de Tipo Radio: Aspectos Incluidos en la Documentación del Flujo de Trabajo
    {
      type: "radio",
      key: "documentacion_flujo_trabajo_entradas_pregunta",
      label: "¿Las entradas?",
      name: "documentacion_flujo_trabajo_entradas_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_flujo_trabajo_salidas_pregunta",
      label: "¿Las salidas (productos)?",
      name: "documentacion_flujo_trabajo_salidas_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_flujo_trabajo_interacciones_pregunta",
      label: "¿Las interacciones entre las actividades?",
      name: "documentacion_flujo_trabajo_interacciones_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_flujo_trabajo_identificacion_riesgos_pregunta",
      label: "¿La identificación de los riesgos para las actividades críticas?",
      name: "documentacion_flujo_trabajo_identificacion_riesgos_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Determinación y Documentación del Flujo de Trabajo
    {
      type: "evidencias",
      key: "determinacion_documentacion_flujo_trabajo_evidencias",
      namePrefix: "determinacion_documentacion_flujo_trabajo",
      fields: [
        { name: "determinacion_documentacion_flujo_trabajo_evidencia1", initialValue: "" },
        { name: "determinacion_documentacion_flujo_trabajo_evidencia2", initialValue: "" },
        { name: "determinacion_documentacion_flujo_trabajo_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Establecimiento del Cronograma de Actividades
    {
      type: "sectionTitle",
      key: "establecimiento_cronograma_actividades",
      title: "Establecimiento del Cronograma de Actividades",
    },
    
    // Pregunta de Tipo Radio: Establecimiento del Cronograma de Actividades
    {
      type: "radio",
      key: "establecimiento_cronograma_actividades_pregunta",
      label: "¿La operación estadística establece y conserva un cronograma de actividades?",
      name: "establecimiento_cronograma_actividades_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Pregunta de Tipo Radio: Adecuación del Cronograma
    {
      type: "radio",
      key: "adecuacion_cronograma_pregunta",
      label: "Si la respuesta es Sí, ¿Cómo se evalúa la adecuación del cronograma para la planificación de las actividades?",
      name: "adecuacion_cronograma_pregunta",
      options: ["Muy adecuada", "Adecuada", "Poco adecuada", "Inadecuada"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Establecimiento del Cronograma de Actividades
    {
      type: "evidencias",
      key: "establecimiento_cronograma_actividades_evidencias",
      namePrefix: "establecimiento_cronograma_actividades",
      fields: [
        { name: "establecimiento_cronograma_actividades_evidencia1", initialValue: "" },
        { name: "establecimiento_cronograma_actividades_evidencia2", initialValue: "" },
        { name: "establecimiento_cronograma_actividades_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Documentación del Diseño de Flujos de Trabajo
    {
      type: "sectionTitle",
      key: "documentacion_diseno_flujos_trabajo",
      title: "Documentación del Diseño de Flujos de Trabajo",
    },
    
    // Pregunta de Tipo Range: Efectividad en la Determinación, Documentación y Conservación del Flujo de Trabajo
    {
      type: "slider",
      key: "efectividad_determinacion_documentacion_flujo_trabajo_pregunta",
      label: "Califique de 1-5 ¿Qué tan efectiva es la dependencia encargada de la operación estadística en la determinación, documentación y conservación del flujo de las actividades desarrolladas en el proceso estadístico?",
      name: "efectividad_determinacion_documentacion_flujo_trabajo_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Documentación del Diseño de Flujos de Trabajo
    {
      type: "evidencias",
      key: "documentacion_diseno_flujos_trabajo_evidencias",
      namePrefix: "documentacion_diseno_flujos_trabajo",
      fields: [
        { name: "documentacion_diseno_flujos_trabajo_evidencia1", initialValue: "" },
        { name: "documentacion_diseno_flujos_trabajo_evidencia2", initialValue: "" },
        { name: "documentacion_diseno_flujos_trabajo_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Eficiencia del Cronograma de Actividades
    {
      type: "sectionTitle",
      key: "eficiencia_cronograma_actividades",
      title: "Eficiencia del Cronograma de Actividades",
    },
    
    // Pregunta de Tipo Range: Eficiencia del Cronograma de Actividades
    {
      type: "slider",
      key: "eficiencia_cronograma_actividades_pregunta",
      label: "Califique de 1-5 ¿En qué medida el cronograma de actividades establecido por la operación estadística contribuye a la eficiencia del proceso estadístico?",
      name: "eficiencia_cronograma_actividades_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Eficiencia del Cronograma de Actividades
    {
      type: "evidencias",
      key: "eficiencia_cronograma_actividades_evidencias",
      namePrefix: "eficiencia_cronograma_actividades",
      fields: [
        { name: "eficiencia_cronograma_actividades_evidencia1", initialValue: "" },
        { name: "eficiencia_cronograma_actividades_evidencia2", initialValue: "" },
        { name: "eficiencia_cronograma_actividades_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Revisión y Actualización del Flujo de Trabajo
    {
      type: "sectionTitle",
      key: "revision_actualizacion_flujo_trabajo",
      title: "Revisión y Actualización del Flujo de Trabajo",
    },
    
    // Pregunta de Tipo Checkbox: Evaluación de la Revisión y Actualización del Flujo de Trabajo
    {
      type: "checkbox",
      key: "evaluacion_revision_actualizacion_flujo_trabajo_pregunta",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística la revisión y actualización del diseño de los flujos de trabajo y el cronograma de actividades?",
      name: "evaluacion_revision_actualizacion_flujo_trabajo_pregunta",
      options: ["Muy efectiva", "Efectiva", "Poco efectiva", "Ineficaz"],
      initialValue: [],
    },
    
    // Evidencias Documentales para Revisión y Actualización del Flujo de Trabajo
    {
      type: "evidencias",
      key: "revision_actualizacion_flujo_trabajo_evidencias",
      namePrefix: "revision_actualizacion_flujo_trabajo",
      fields: [
        { name: "revision_actualizacion_flujo_trabajo_evidencia1", initialValue: "" },
        { name: "revision_actualizacion_flujo_trabajo_evidencia2", initialValue: "" },
        { name: "revision_actualizacion_flujo_trabajo_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sugerencias para la mejora del Diseño de Flujos de Trabajo
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_diseno_flujos_trabajo",
      title: "Sugerencias para la mejora del Diseño de Flujos de Trabajo",
    },
    
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_diseno_flujos_trabajo_pregunta",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de diseño de flujos de trabajo en sus operaciones estadísticas?",
      name: "sugerencias_mejora_diseno_flujos_trabajo_pregunta",
      initialValue: "",
    },
    
    // Subtítulo: Acciones Requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_6_9",
      title: "Acciones requeridas",
    },
    
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_6_9",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  