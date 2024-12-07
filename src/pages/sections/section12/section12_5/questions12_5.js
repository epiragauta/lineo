export const questions12_5 = [
  
    // Subtítulo: Frecuencia de las Auditorías Internas
    {
      type: "sectionTitle",
      key: "frecuencia_auditorias_internas_12_2",
      title: "Frecuencia de las Auditorías Internas",
    },
  
    // Pregunta de Tipo Ratio: Frecuencia de las Auditorías Internas
    {
      type: "radio",
      key: "frecuencia_auditorias_internas_pregunta_12_2",
      label: "¿La dependencia encargada de la operación estadística realiza auditorías internas a intervalos planificados para verificar la eficacia y eficiencia del proceso estadístico?",
      name: "frecuencia_auditorias_internas_pregunta_12_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Cumplimiento de Requisitos en las Auditorías
    {
      type: "sectionTitle",
      key: "cumplimiento_requisitos_auditorias_12_2",
      title: "Cumplimiento de Requisitos en las Auditorías",
    },
  
    // Pregunta de Tipo Checkbox: Cumplimiento de Requisitos en las Auditorías
    {
      type: "checkbox",
      key: "cumplimiento_requisitos_auditorias_pregunta_12_2",
      label: "¿Las auditorías internas verifican el cumplimiento con los siguientes requisitos?",
      name: "cumplimiento_requisitos_auditorias_pregunta_12_2",
      options: [
        "a) Requisitos de la presente norma",
        "b) Requisitos propios de la entidad para el proceso estadístico",
        "c) Requisitos legales aplicables a la entidad",
      ],
      initialValue: [],
    },
  
    // Subtítulo: Documentación de las Auditorías Internas
    {
      type: "sectionTitle",
      key: "documentacion_auditorias_internas_12_2",
      title: "Documentación de las Auditorías Internas",
    },
  
    // Pregunta de Tipo Ratio: Documentación de las Auditorías Internas
    {
      type: "radio",
      key: "conservacion_documentacion_auditorias_internas_pregunta_12_2",
      label: "¿La dependencia encargada de la operación estadística conserva la información documentada de las auditorías internas?",
      name: "conservacion_documentacion_auditorias_internas_pregunta_12_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Competencia e Imparcialidad en las Auditorías
    {
      type: "sectionTitle",
      key: "competencia_imparcialidad_auditorias_12_2",
      title: "Competencia e Imparcialidad en las Auditorías",
    },
  
    // Pregunta de Tipo Ratio: Competencia e Imparcialidad en las Auditorías
    {
      type: "radio",
      key: "competencia_imparcialidad_auditorias_pregunta_12_2",
      label: "¿La dependencia encargada de la operación estadística asegura la competencia y la imparcialidad de las auditorías internas?",
      name: "competencia_imparcialidad_auditorias_pregunta_12_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Cumplimiento de Directrices ISO 19011
    {
      type: "sectionTitle",
      key: "cumplimiento_directrices_iso19011_12_2",
      title: "Cumplimiento de Directrices ISO 19011",
    },
  
    // Pregunta de Tipo Ratio: Cumplimiento de Directrices ISO 19011
    {
      type: "radio",
      key: "cumplimiento_directrices_iso19011_pregunta_12_2",
      label: "¿La dependencia encargada de la operación estadística sigue las directrices proporcionadas por la Norma ISO 19011 para la realización de las auditorías internas?",
      name: "cumplimiento_directrices_iso19011_pregunta_12_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Sugerencias para Mejorar la Determinación y Confirmación del Tipo de Fuente de Datos
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_12_2",
      title: "Sugerencias para Mejorar la Determinación y Confirmación del Tipo de Fuente de Datos",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para Mejorar
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_12_2",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_12_2",
      initialValue: "",
    },
  
    // Evidencias Documentales para Auditoría Interna
    {
      type: "evidencias",
      key: "evidencias_auditoria_interna_12_2",
      namePrefix: "auditoria_interna_12_2",
      fields: [
        { name: "auditoria_interna_evidencia1_12_2", initialValue: "" },
        { name: "auditoria_interna_evidencia2_12_2", initialValue: "" },
        { name: "auditoria_interna_evidencia3_12_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_12_2",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_12_2",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  