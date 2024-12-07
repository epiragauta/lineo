export const questions13_2 = [
    // Título de la Sección 13.2
    {
      type: "sectionTitle",
      key: "titulo_seccion_13_2",
      title: "Sección 13.2 - No conformidad y acción correctiva",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_13_2",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_13_2",
      content:
        "La gestión de no conformidades y acciones correctivas es fundamental para mantener la calidad en las operaciones estadísticas, garantizando que los procesos se ajusten a los estándares establecidos. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta etapa implica identificar, documentar y analizar las desviaciones respecto a los requisitos establecidos, permitiendo establecer medidas correctivas que mitiguen las causas raíz. Este enfoque sistemático asegura la mejora continua, evitando la recurrencia de errores y fortaleciendo la fiabilidad de los datos producidos.",
    },
  
    // Subtítulo: Control y Corrección de No Conformidades
    {
      type: "sectionTitle",
      key: "control_correcion_no_conformidades_13_2",
      title: "Control y Corrección de No Conformidades",
    },
  
    // Pregunta de Tipo Ratio: Acciones para controlar y corregir no conformidades
    {
      type: "radio",
      key: "acciones_control_correcion_no_conformidades_pregunta_13_2",
      label: "Cuando ocurre una “no conformidad” en el proceso estadístico, ¿la dependencia encargada de la operación estadística toma acciones para controlarla y corregirla?",
      name: "acciones_control_correcion_no_conformidades_pregunta_13_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Evaluación de Necesidad de Acciones Correctivas
    {
      type: "sectionTitle",
      key: "evaluacion_necesidad_acciones_correctivas_13_2",
      title: "Evaluación de Necesidad de Acciones Correctivas",
    },
  
    // Pregunta de Tipo Ratio: Evaluación de la necesidad de acciones correctivas
    {
      type: "radio",
      key: "evaluacion_necesidad_acciones_correctivas_pregunta_13_2",
      label: "¿La dependencia encargada de la operación estadística evalúa la necesidad de acciones para eliminar las causas de la no conformidad, incluyendo la revisión y el análisis de la no conformidad, la determinación de las causas de la no conformidad o la identificación de no conformidades similares o potenciales?",
      name: "evaluacion_necesidad_acciones_correctivas_pregunta_13_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Implementación de Acciones Correctivas
    {
      type: "sectionTitle",
      key: "implementacion_acciones_correctivas_13_2",
      title: "Implementación de Acciones Correctivas",
    },
  
    // Pregunta de Tipo Ratio: Implementación de acciones correctivas
    {
      type: "radio",
      key: "implementacion_acciones_correctivas_pregunta_13_2",
      label: "¿La dependencia encargada de la operación estadística implementa las acciones necesarias para corregir la no conformidad?",
      name: "implementacion_acciones_correctivas_pregunta_13_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Verificación de la Eficacia de las Acciones Implementadas
    {
      type: "sectionTitle",
      key: "verificacion_eficacia_acciones_implementadas_13_2",
      title: "Verificación de la Eficacia de las Acciones Implementadas",
    },
  
    // Pregunta de Tipo Ratio: Verificación de la eficacia de las acciones correctivas
    {
      type: "radio",
      key: "verificacion_eficacia_acciones_correctivas_pregunta_13_2",
      label: "¿La dependencia encargada de la operación estadística verifica la eficacia de las acciones correctivas implementadas?",
      name: "verificacion_eficacia_acciones_correctivas_pregunta_13_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Subtítulo: Documentación de No Conformidades y Acciones Correctivas
    {
      type: "sectionTitle",
      key: "documentacion_no_conformidades_acciones_correctivas_13_2",
      title: "Documentación de No Conformidades y Acciones Correctivas",
    },
  
    // Pregunta de Tipo Ratio: Conservación de la documentación de no conformidades y acciones correctivas
    {
      type: "radio",
      key: "conservacion_documentacion_no_conformidades_pregunta_13_2",
      label: "¿La dependencia encargada de la operación estadística conserva información documentada sobre la naturaleza de las no conformidades y las acciones tomadas o los resultados de las acciones correctivas?",
      name: "conservacion_documentacion_no_conformidades_pregunta_13_2",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias para mejorar la determinación y confirmación del tipo de fuente de datos
    {
      type: "textArea",
      key: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_13_2",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar la determinación y confirmación del tipo de fuente de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_determinacion_confirmacion_fuente_datos_pregunta_13_2",
      initialValue: "",
    },
  
    // Evidencias Documentales para No conformidad y acción correctiva
    {
      type: "evidencias",
      key: "evidencias_no_conformidad_accion_correctiva_13_2",
      namePrefix: "no_conformidad_accion_correctiva_13_2",
      fields: [
        { name: "no_conformidad_accion_correctiva_evidencia1_13_2", initialValue: "" },
        { name: "no_conformidad_accion_correctiva_evidencia2_13_2", initialValue: "" },
        { name: "no_conformidad_accion_correctiva_evidencia3_13_2", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_13_2",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_13_2",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  