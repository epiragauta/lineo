export const questions8_1 = [
  
    // Subtítulo: Entrenamiento del Personal
    {
      type: "sectionTitle",
      key: "entrenamiento_personal_8_1",
      title: "Entrenamiento del Personal",
    },
  
    // Pregunta de Tipo Radio: Realización del entrenamiento
    {
      type: "radio",
      key: "realizacion_entrenamiento_pregunta_8_1",
      label: "¿La operación estadística realiza el entrenamiento al personal involucrado de acuerdo con lo diseñado y lo elaborado?",
      name: "realizacion_entrenamiento_pregunta_8_1",
      options: ["Sí", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Radio: Conservación de evidencias del entrenamiento
    {
      type: "radio",
      key: "conservacion_evidencias_entrenamiento_pregunta_8_1",
      label: "Si la respuesta es Sí, ¿la operación estadística conserva evidencias del entrenamiento?",
      name: "conservacion_evidencias_entrenamiento_pregunta_8_1",
      options: ["Sí", "No"],
      initialValue: "",
    },
  
    // Evidencias Documentales para Entrenamiento del Personal
    {
      type: "evidencias",
      key: "evidencias_entrenamiento_personal_8_1",
      namePrefix: "entrenamiento_personal_8_1",
      fields: [
        { name: "entrenamiento_personal_evidencia1_8_1", initialValue: "" },
        { name: "entrenamiento_personal_evidencia2_8_1", initialValue: "" },
        { name: "entrenamiento_personal_evidencia3_8_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Actividades de Sensibilización
    {
      type: "sectionTitle",
      key: "actividades_sensibilizacion_8_1",
      title: "Actividades de Sensibilización",
    },
  
    // Pregunta de Tipo Radio: Realización de actividades de sensibilización
    {
      type: "radio",
      key: "realizacion_actividades_sensibilizacion_pregunta_8_1",
      label: "¿La operación estadística realiza actividades de sensibilización para informar a la fuente sobre la recolección o acopio de los datos?",
      name: "realizacion_actividades_sensibilizacion_pregunta_8_1",
      options: ["Sí", "No"],
      initialValue: "",
    },
  
    // Evidencias Documentales para Actividades de Sensibilización
    {
      type: "evidencias",
      key: "evidencias_actividades_sensibilizacion_8_1",
      namePrefix: "actividades_sensibilizacion_8_1",
      fields: [
        { name: "actividades_sensibilizacion_evidencia1_8_1", initialValue: "" },
        { name: "actividades_sensibilizacion_evidencia2_8_1", initialValue: "" },
        { name: "actividades_sensibilizacion_evidencia3_8_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Evidencias de Entrenamiento
    {
      type: "sectionTitle",
      key: "evidencias_entrenamiento_8_1",
      title: "Evidencias de Entrenamiento",
    },
  
    // Pregunta de Tipo Range: Efectividad en conservar evidencias del entrenamiento
    {
      type: "slider",
      key: "efectividad_conservacion_evidencias_entrenamiento_pregunta_8_1",
      label: "Califique de 1-5. ¿Qué tan efectiva es la operación estadística en conservar las evidencias del entrenamiento del personal?",
      name: "efectividad_conservacion_evidencias_entrenamiento_pregunta_8_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Evidencias Documentales para Efectividad en conservar evidencias de entrenamiento
    {
      type: "evidencias",
      key: "evidencias_efectividad_conservacion_evidencias_entrenamiento_8_1",
      namePrefix: "efectividad_conservacion_evidencias_entrenamiento_8_1",
      fields: [
        { name: "efectividad_conservacion_evidencias_entrenamiento_evidencia1_8_1", initialValue: "" },
        { name: "efectividad_conservacion_evidencias_entrenamiento_evidencia2_8_1", initialValue: "" },
        { name: "efectividad_conservacion_evidencias_entrenamiento_evidencia3_8_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Realización de Actividades de Sensibilización
    {
      type: "sectionTitle",
      key: "realizacion_actividades_sensibilizacion_8_1",
      title: "Realización de Actividades de Sensibilización",
    },
  
    // Pregunta de Tipo Range: Medida de realización de actividades de sensibilización
    {
      type: "slider",
      key: "medida_realizacion_actividades_sensibilizacion_pregunta_8_1",
      label: "Califique de 1-5. ¿En qué medida la operación estadística realiza actividades de sensibilización para informar a la fuente sobre la recolección o acopio de los datos?",
      name: "medida_realizacion_actividades_sensibilizacion_pregunta_8_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Pregunta de Tipo Range: Nivel de calidad de las actividades de sensibilización
    {
      type: "slider",
      key: "nivel_calidad_actividades_sensibilizacion_pregunta_8_1",
      label: "Califique de 1-5. ¿Qué nivel de calidad tienen las actividades de sensibilización?",
      name: "nivel_calidad_actividades_sensibilizacion_pregunta_8_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Evidencias Documentales para Realización de Actividades de Sensibilización
    {
      type: "evidencias",
      key: "evidencias_realizacion_actividades_sensibilizacion_8_1",
      namePrefix: "realizacion_actividades_sensibilizacion_8_1",
      fields: [
        { name: "realizacion_actividades_sensibilizacion_evidencia1_8_1", initialValue: "" },
        { name: "realizacion_actividades_sensibilizacion_evidencia2_8_1", initialValue: "" },
        { name: "realizacion_actividades_sensibilizacion_evidencia3_8_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Revisión de Actividades de Sensibilización
    {
      type: "sectionTitle",
      key: "revision_actividades_sensibilizacion_8_1",
      title: "Revisión de Actividades de Sensibilización",
    },
  
    // Pregunta de Tipo Text Area: Evaluación de la revisión y actualización de actividades de sensibilización
    {
      type: "textarea",
      key: "evaluacion_revision_actualizacion_actividades_sensibilizacion_pregunta_8_1",
      label: "¿Cómo evalúa la entidad la revisión y actualización de las actividades de sensibilización, si corresponde, según lo especificado en los procedimientos de la operación estadística?",
      name: "evaluacion_revision_actualizacion_actividades_sensibilizacion_pregunta_8_1",
      initialValue: "",
    },
  
    // Evidencias Documentales para Revisión de Actividades de Sensibilización
    {
      type: "evidencias",
      key: "evidencias_revision_actividades_sensibilizacion_8_1",
      namePrefix: "revision_actividades_sensibilizacion_8_1",
      fields: [
        { name: "revision_actividades_sensibilizacion_evidencia1_8_1", initialValue: "" },
        { name: "revision_actividades_sensibilizacion_evidencia2_8_1", initialValue: "" },
        { name: "revision_actividades_sensibilizacion_evidencia3_8_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Elaboración de Acuerdos de intercambio de datos
    {
      type: "sectionTitle",
      key: "elaboracion_acuerdos_intercambio_datos_8_1",
      title: "Elaboración de Acuerdos de intercambio de datos",
    },
  
    // Pregunta de Tipo Radio: Elaboración de acuerdos de intercambio de datos
    {
      type: "radio",
      key: "elaboracion_acuerdos_intercambio_datos_pregunta_8_1",
      label: "¿La entidad ha elaborado acuerdos de intercambio de datos entre sus diferentes dependencias internas y con entidades externas?",
      name: "elaboracion_acuerdos_intercambio_datos_pregunta_8_1",
      options: ["Sí", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Mecanismos y protocolos para acuerdos de intercambio de datos
    {
      type: "textarea",
      key: "mecanismos_protocolos_acuerdos_intercambio_datos_pregunta_8_1",
      label: "Si la respuesta es Sí, ¿Qué mecanismos y protocolos han sido implementados para garantizar que los acuerdos de intercambio de datos se formalicen de manera eficiente y segura?",
      name: "mecanismos_protocolos_acuerdos_intercambio_datos_pregunta_8_1",
      initialValue: "",
    },
  
    // Pregunta de Tipo Text Area: Coordinación para facilitar el intercambio de datos
    {
      type: "textarea",
      key: "coordinacion_intercambio_datos_pregunta_8_1",
      label: "¿Cómo se ha llevado a cabo la coordinación, para facilitar el intercambio de datos en tiempo real o dentro de los plazos establecidos?",
      name: "coordinacion_intercambio_datos_pregunta_8_1",
      initialValue: "",
    },
  
    // Evidencias Documentales para Elaboración de Acuerdos de intercambio de datos
    {
      type: "evidencias",
      key: "evidencias_elaboracion_acuerdos_intercambio_datos_8_1",
      namePrefix: "elaboracion_acuerdos_intercambio_datos_8_1",
      fields: [
        { name: "elaboracion_acuerdos_intercambio_datos_evidencia1_8_1", initialValue: "" },
        { name: "elaboracion_acuerdos_intercambio_datos_evidencia2_8_1", initialValue: "" },
        { name: "elaboracion_acuerdos_intercambio_datos_evidencia3_8_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sugerencias para la mejora en las Actividades previas a la Recolección o acopio
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_actividades_previas_recoleccion_acopio_8_1",
      title: "Sugerencias para la mejora en las Actividades previas a la Recolección o acopio",
    },
  
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_actividades_previas_recoleccion_acopio_pregunta_8_1",
      label: "Pendiente Pregunta",
      name: "sugerencias_mejora_actividades_previas_recoleccion_acopio_pregunta_8_1",
      initialValue: "",
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_8_1",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_8_1",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  