export const questions7_4 = [
    // Subtítulo: Metodología de Selección de Muestra
    {
      type: "sectionTitle",
      key: "metodologia_seleccion_muestra_7_4",
      title: "Metodología de Selección de Muestra",
    },
  
    // Pregunta de Tipo Radio: Aplicación adecuada de la metodología
    {
      type: "radio",
      key: "aplicacion_metodologia_pregunta_7_4",
      label: "¿La operación estadística aplica adecuadamente la metodología para la selección y conformación de la muestra?",
      name: "aplicacion_metodologia_pregunta_7_4",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Radio: Documentación de la metodología
    {
      type: "radio",
      key: "documentacion_metodologia_pregunta_7_4",
      label: "Si la respuesta es Sí, ¿Se asegura de que esta metodología esté claramente documentada y detallada?",
      name: "documentacion_metodologia_pregunta_7_4",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Evidencias Documentales para Metodología de Selección de Muestra
    {
      type: "evidencias",
      key: "evidencias_metodologia_seleccion_muestra_7_4",
      namePrefix: "metodologia_seleccion_muestra_7_4",
      fields: [
        { name: "metodologia_seleccion_muestra_evidencia1_7_4", initialValue: "" },
        { name: "metodologia_seleccion_muestra_evidencia2_7_4", initialValue: "" },
        { name: "metodologia_seleccion_muestra_evidencia3_7_4", initialValue: "" },
      ],
    },
  
    // Subtítulo: Aplicación de Metodología de Muestreo
    {
      type: "sectionTitle",
      key: "aplicacion_metodologia_muestreo_7_4",
      title: "Aplicación de Metodología de Muestreo",
    },
  
    // Pregunta de Tipo Radio: Implementación y mantenimiento de la metodología de muestreo
    {
      type: "radio",
      key: "implementacion_mantenimiento_muestreo_pregunta_7_4",
      label: "¿La entidad implementa y mantiene la metodología de muestreo en todas las etapas del proceso estadístico?",
      name: "implementacion_mantenimiento_muestreo_pregunta_7_4",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Checkbox: Aspectos de la metodología de muestreo
    {
      type: "checkbox",
      key: "aspectos_metodologia_muestreo_pregunta_7_4",
      label: "Si la respuesta es Sí, ¿cuáles de los siguientes aspectos de la metodología se aplican? Seleccione todas las opciones que correspondan.",
      name: "aspectos_metodologia_muestreo_pregunta_7_4",
      options: [
        "definición del marco muestral",
        "selección de unidades de muestreo",
        "determinación del tamaño de la muestra",
        "técnicas de muestreo utilizadas",
        "procesos de validación de la muestra",
      ],
      initialValue: [],
    },
  
    // Evidencias Documentales para Aplicación de Metodología de Muestreo
    {
      type: "evidencias",
      key: "evidencias_aplicacion_metodologia_muestreo_7_4",
      namePrefix: "aplicacion_metodologia_muestreo_7_4",
      fields: [
        { name: "aplicacion_metodologia_muestreo_evidencia1_7_4", initialValue: "" },
        { name: "aplicacion_metodologia_muestreo_evidencia2_7_4", initialValue: "" },
        { name: "aplicacion_metodologia_muestreo_evidencia3_7_4", initialValue: "" },
      ],
    },
  
    // Subtítulo: Documentación de la Selección de Muestra
    {
      type: "sectionTitle",
      key: "documentacion_seleccion_muestra_7_4",
      title: "Documentación de la Selección de Muestra",
    },
  
    // Pregunta de Tipo Range: Efectividad en la documentación de la metodología y procesos de selección de muestra
    {
      type: "range",
      key: "efectividad_documentacion_metodologia_pregunta_7_4",
      label: "Califique de 1-5. ¿Qué tan efectiva es la dependencia encargada de la operación estadística en documentar la metodología y los procesos de selección de muestra?",
      name: "efectividad_documentacion_metodologia_pregunta_7_4",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Documentación de la Selección de Muestra
    {
      type: "evidencias",
      key: "evidencias_documentacion_seleccion_muestra_7_4",
      namePrefix: "documentacion_seleccion_muestra_7_4",
      fields: [
        { name: "documentacion_seleccion_muestra_evidencia1_7_4", initialValue: "" },
        { name: "documentacion_seleccion_muestra_evidencia2_7_4", initialValue: "" },
        { name: "documentacion_seleccion_muestra_evidencia3_7_4", initialValue: "" },
      ],
    },
  
    // Subtítulo: Conformación de la Muestra
    {
      type: "sectionTitle",
      key: "conformacion_muestra_7_4",
      title: "Conformación de la Muestra",
    },
  
    // Pregunta de Tipo Range: Aseguramiento de la conformación de la muestra
    {
      type: "range",
      key: "aseguramiento_conformacion_muestra_pregunta_7_4",
      label: "Califique de 1-5. ¿En qué medida la dependencia encargada de la operación estadística asegura que la muestra esté conformada de acuerdo con la metodología establecida?",
      name: "aseguramiento_conformacion_muestra_pregunta_7_4",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Conformación de la Muestra
    {
      type: "evidencias",
      key: "evidencias_conformacion_muestra_7_4",
      namePrefix: "conformacion_muestra_7_4",
      fields: [
        { name: "conformacion_muestra_evidencia1_7_4", initialValue: "" },
        { name: "conformacion_muestra_evidencia2_7_4", initialValue: "" },
        { name: "conformacion_muestra_evidencia3_7_4", initialValue: "" },
      ],
    },
  
    // Subtítulo: Revisión de la Metodología de Muestreo
    {
      type: "sectionTitle",
      key: "revision_metodologia_muestreo_7_4",
      title: "Revisión de la Metodología de Muestreo",
    },
  
    // Pregunta de Tipo Range: Evaluación de la revisión y actualización periódica de la metodología de muestreo
    {
      type: "range",
      key: "evaluacion_revision_actualizacion_pregunta_7_4",
      label: "Califique de 1-5. ¿Cómo evalúa la dependencia encargada de la operación estadística la revisión y actualización periódica de la metodología de muestreo según lo especificado en el documento metodológico de la operación estadística?",
      name: "evaluacion_revision_actualizacion_pregunta_7_4",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Revisión de la Metodología de Muestreo
    {
      type: "evidencias",
      key: "evidencias_revision_metodologia_muestreo_7_4",
      namePrefix: "revision_metodologia_muestreo_7_4",
      fields: [
        { name: "revision_metodologia_muestreo_evidencia1_7_4", initialValue: "" },
        { name: "revision_metodologia_muestreo_evidencia2_7_4", initialValue: "" },
        { name: "revision_metodologia_muestreo_evidencia3_7_4", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sugerencias para la mejora de la Selección de Muestra
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_seleccion_muestra_7_4",
      title: "Sugerencias para la mejora de la Selección de Muestra",
    },
  
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_seleccion_muestra_pregunta_7_4",
      label: "Pendiente Pregunta",
      name: "sugerencias_mejora_seleccion_muestra_pregunta_7_4",
      initialValue: "",
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_7_4",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_7_4",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  