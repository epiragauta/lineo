export const questions11_3 = [
  
    // Subtítulo: Puntualidad en la Difusión de Información Estadística
    {
      type: "sectionTitle",
      key: "puntualidad_difusion_info_estadistica_11_3",
      title: "Puntualidad en la Difusión de Información Estadística",
    },
  
    // Pregunta de Tipo Ratio: Difusión puntual de la información estadística
    {
      type: "radio",
      key: "difusion_puntual_info_estadistica_pregunta_11_3",
      label: "¿La dependencia encargada de la operación estadística difunde la información estadística de manera puntual, de acuerdo con las fechas establecidas en el calendario de difusión?",
      name: "difusion_puntual_info_estadistica_pregunta_11_3",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Subtítulo: Oportunidad en la Difusión de Información Estadística
    {
      type: "sectionTitle",
      key: "oportunidad_difusion_info_estadistica_11_3",
      title: "Oportunidad en la Difusión de Información Estadística",
    },
  
    // Pregunta de Tipo Ratio: Difusión oportuna de la información estadística
    {
      type: "radio",
      key: "difusion_oportuna_info_estadistica_pregunta_11_3",
      label: "¿La dependencia encargada de la operación estadística difunde la información estadística de manera oportuna, considerando el tiempo transcurrido entre el periodo de referencia y la disponibilidad de las estadísticas?",
      name: "difusion_oportuna_info_estadistica_pregunta_11_3",
      options: ["Sí", "No"],
      initialValue: 0,
    },
  
    // Subtítulo: Cumplimiento del Calendario de Difusión
    {
      type: "sectionTitle",
      key: "cumplimiento_calendario_difusion_11_3",
      title: "Cumplimiento del Calendario de Difusión",
    },
  
    // Pregunta de Tipo Range: Efectividad en el cumplimiento del calendario de difusión
    {
      type: "slider",
      key: "efectividad_cumplimiento_calendario_difusion_pregunta_11_3",
      label: "Califique (1-5) qué tan efectiva es la dependencia encargada de la operación estadística en cumplir con las fechas establecidas en el calendario de difusión de la información estadística.",
      name: "efectividad_cumplimiento_calendario_difusion_pregunta_11_3",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Subtítulo: Cumplimiento del Calendario de Difusión (Duplicado)
    {
      type: "sectionTitle",
      key: "cumplimiento_calendario_difusion_usuario_11_3",
      title: "Cumplimiento del Calendario de Difusión",
    },
  
    // Pregunta de Tipo Range: Satisfacción de las necesidades de los usuarios en la oportunidad de difusión
    {
      type: "slider",
      key: "satisfaccion_necesidades_usuarios_oportunidad_difusion_pregunta_11_3",
      label: "Califique (1-5) en qué medida la dependencia encargada de la operación estadística satisface las necesidades de los usuarios en cuanto a la oportunidad con la que se difunde la información estadística.",
      name: "satisfaccion_necesidades_usuarios_oportunidad_difusion_pregunta_11_3",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Subtítulo: Evaluación de la Puntualidad
    {
      type: "sectionTitle",
      key: "evaluacion_puntualidad_11_3",
      title: "Evaluación de la Puntualidad",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la puntualidad de la difusión
    {
      type: "textarea",
      key: "evaluacion_puntualidad_difusion_pregunta_11_3",
      label: "¿Cómo evalúa la entidad la puntualidad de la difusión de la información estadística en función de las expectativas y necesidades de los usuarios?",
      name: "evaluacion_puntualidad_difusion_pregunta_11_3",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textarea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_3",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_3",
      initialValue: "",
    },
  
    // Evidencias Documentales para Puntualidad y oportunidad
    {
      type: "evidencias",
      key: "evidencias_puntualidad_oportunidad_11_3",
      namePrefix: "puntualidad_oportunidad_11_3",
      fields: [
        { name: "puntualidad_oportunidad_evidencia1_11_3", initialValue: "" },
        { name: "puntualidad_oportunidad_evidencia2_11_3", initialValue: "" },
        { name: "puntualidad_oportunidad_evidencia3_11_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_11_3",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_11_3",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  