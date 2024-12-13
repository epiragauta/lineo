export const questions11_6 = [
  
    // Subtítulo: Difusión de Series Históricas
    {
      type: "sectionTitle",
      key: "difusion_series_historicas_11_6",
      title: "Difusión de Series Históricas",
    },
  
    // Pregunta de Tipo Ratio: Difusión y conservación de series históricas
    {
      type: "radio",
      key: "difusion_conservacion_series_historicas_pregunta_11_6",
      label: "¿La dependencia encargada de la operación estadística difunde y conserva las series históricas de la información estadística producida?",
      name: "difusion_conservacion_series_historicas_pregunta_11_6",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Pregunta de Tipo Ratio: Publicación de notas explicativas sobre diferencias en las series
    {
      type: "radio",
      key: "publicacion_notas_explicativas_diferencias_series_pregunta_11_6",
      label: "Si la respuesta es sí, ¿se publican notas explicativas sobre las diferencias que puedan presentarse en las series?",
      name: "publicacion_notas_explicativas_diferencias_series_pregunta_11_6",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Subtítulo: Claridad y Comprensión de las Notas Explicativas
    {
      type: "sectionTitle",
      key: "claridad_comprension_notas_explicativas_11_6",
      title: "Claridad y Comprensión de las Notas Explicativas",
    },
  
    // Pregunta de Tipo Ratio: Claridad y comprensión de las notas explicativas
    {
      type: "radio",
      key: "claridad_comprension_notas_explicativas_pregunta_11_6",
      label: "¿Las notas explicativas sobre las series históricas son presentadas de manera clara, comprensible, con la debida orientación y de fácil interpretación?",
      name: "claridad_comprension_notas_explicativas_pregunta_11_6",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Pregunta de Tipo Range: Calidad de las notas explicativas
    {
      type: "slider",
      key: "calidad_notas_explicativas_pregunta_11_6",
      label: "Si la respuesta es sí, califique (1-5) la calidad de las notas en términos de claridad y comprensión.",
      name: "calidad_notas_explicativas_pregunta_11_6",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Empalme de Series Históricas en Rediseños
    {
      type: "sectionTitle",
      key: "empalme_series_historicas_redisenos_11_6",
      title: "Empalme de Series Históricas en Rediseños",
    },
  
    // Pregunta de Tipo Ratio: Empalme de series históricas
    {
      type: "radio",
      key: "empalme_series_historicas_pregunta_11_6",
      label: "¿La dependencia encargada de la operación estadística realiza, documenta y difunde el empalme de las series históricas en casos de rediseño, retropolación o proyección?",
      name: "empalme_series_historicas_pregunta_11_6",
      options: ["Sí", "No"],
      initialValue: "Sí",
    },
  
    // Subtítulo: Notas Explicativas y Diferencias en las Series
    {
      type: "sectionTitle",
      key: "notas_explicativas_diferencias_series_11_6",
      title: "Notas Explicativas y Diferencias en las Series",
    },
  
    // Pregunta de Tipo Range: Comprensión de diferencias en las series históricas
    {
      type: "slider",
      key: "comprension_diferencias_series_pregunta_11_6",
      label: "¿En qué medida las notas explicativas permiten comprender las diferencias en las series históricas frente a la temática del fenómeno de estudio? Califique (1-5)",
      name: "comprension_diferencias_series_pregunta_11_6",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Subtítulo: Documentación del Empalme de Series
    {
      type: "sectionTitle",
      key: "documentacion_empalme_series_11_6",
      title: "Documentación del Empalme de Series",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la documentación del empalme de series históricas
    {
      type: "textarea",
      key: "evaluacion_documentacion_empalme_series_pregunta_11_6",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística la documentación y disposición del empalme de las series históricas para los usuarios en casos de rediseño o proyección?",
      name: "evaluacion_documentacion_empalme_series_pregunta_11_6",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textarea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_6",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_11_6",
      initialValue: "",
    },
  
    // Evidencias Documentales para Series históricas
    {
      type: "evidencias",
      key: "evidencias_series_historicas_11_6",
      namePrefix: "series_historicas_11_6",
      fields: [
        { name: "series_historicas_evidencia1_11_6", initialValue: "" },
        { name: "series_historicas_evidencia2_11_6", initialValue: "" },
        { name: "series_historicas_evidencia3_11_6", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_11_6",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_11_6",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  