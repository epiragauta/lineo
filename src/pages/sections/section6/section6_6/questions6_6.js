export const questions6_6 = [
    // Título de la Sección 6.6
    {
      type: "sectionTitle",
      key: "determinacion_documentacion_procesos",
      title: "Determinación y Documentación de Procesos",
    },
    
    // Pregunta de Tipo Radio: Determinación y Documentación de Procesos
    {
      type: "radio",
      key: "determinacion_documentacion_procesos_pregunta",
      label: "¿La operación estadística determina y documenta adecuadamente los procesos de procesamiento de datos, incluyendo la consolidación o integración de archivos, la verificación de completitud, codificación, edición, imputación, estimación, validación, y generación de resultados?",
      name: "determinacion_documentacion_procesos_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Preguntas de Tipo Radio: Aspectos Incluidos en la Documentación de Procesos
    {
      type: "radio",
      key: "documentacion_procesos_consolidacion_pregunta",
      label: "¿Consolidación o integración de los archivos de datos?",
      name: "documentacion_procesos_consolidacion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_procesos_completitud_pregunta",
      label: "¿Verificación de la completitud de los datos?",
      name: "documentacion_procesos_completitud_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_procesos_codificacion_pregunta",
      label: "¿Especificaciones de rutina para la codificación?",
      name: "documentacion_procesos_codificacion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_procesos_edicion_pregunta",
      label: "¿Edición?",
      name: "documentacion_procesos_edicion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_procesos_imputacion_pregunta",
      label: "¿Imputación?",
      name: "documentacion_procesos_imputacion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_procesos_estimacion_pregunta",
      label: "¿Estimación?",
      name: "documentacion_procesos_estimacion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_procesos_validacion_pregunta",
      label: "¿Validación y consistencia de la información alfanumérica y geográfica?",
      name: "documentacion_procesos_validacion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_procesos_generacion_resultados_pregunta",
      label: "¿Generación de resultados?",
      name: "documentacion_procesos_generacion_resultados_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Determinación y Documentación de Procesos
    {
      type: "evidencias",
      key: "determinacion_documentacion_procesos_evidencias",
      namePrefix: "determinacion_documentacion_procesos",
      fields: [
        { name: "determinacion_documentacion_procesos_evidencia1", initialValue: "" },
        { name: "determinacion_documentacion_procesos_evidencia2", initialValue: "" },
        { name: "determinacion_documentacion_procesos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Infraestructura Tecnológica y Software Aplicativo
    {
      type: "sectionTitle",
      key: "infraestructura_tecnologica_software",
      title: "Infraestructura Tecnológica y Software Aplicativo",
    },
    
    // Pregunta de Tipo Radio: Determinación de Infraestructura Tecnológica y Software Aplicativo
    {
      type: "radio",
      key: "determinacion_infraestructura_software_pregunta",
      label: "¿La operación estadística determina la infraestructura tecnológica necesaria y define el software aplicativo requerido para la captura, digitación, digitalización, transmisión, integración, acopio, almacenamiento, lectura, seguridad de los archivos de datos, y para los procesos estadísticos como detección de inconsistencias, validación, corrección, depuración, estimación y generación de resultados?",
      name: "determinacion_infraestructura_software_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Pregunta de Tipo Checkbox: Aspectos Cubiertos en la Infraestructura y Software Aplicativo
    {
      type: "checkbox",
      key: "aspectos_infraestructura_software_pregunta",
      label: "Si la respuesta es Sí, ¿cuáles de los siguientes aspectos están cubiertos?",
      name: "aspectos_infraestructura_software_pregunta",
      options: [
        "Captura, digitación, digitalización, transmisión e integración de datos",
        "Acopio de datos",
        "Almacenamiento, lectura y seguridad de los archivos",
        "Detección de inconsistencias, validación, corrección y depuración",
        "Estimación",
        "Generación de resultados",
      ],
      initialValue: [],
    },
    
    // Evidencias Documentales para Infraestructura Tecnológica y Software Aplicativo
    {
      type: "evidencias",
      key: "infraestructura_tecnologica_software_evidencias",
      namePrefix: "infraestructura_tecnologica_software",
      fields: [
        { name: "infraestructura_tecnologica_software_evidencia1", initialValue: "" },
        { name: "infraestructura_tecnologica_software_evidencia2", initialValue: "" },
        { name: "infraestructura_tecnologica_software_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Documentación del Software Aplicativo
    {
      type: "sectionTitle",
      key: "documentacion_software_aplicativo",
      title: "Documentación del Software Aplicativo",
    },
    
    // Pregunta de Tipo Radio: Documentación del Software Aplicativo
    {
      type: "radio",
      key: "documentacion_software_aplicativo_pregunta",
      label: "¿La operación estadística documenta la información necesaria para el uso y mantenimiento del software aplicativo, incluyendo el modelo entidad-relación, diccionario de datos, manuales de validación, captura, usuario y sistema, y mecanismos para garantizar seguridad, mantenimiento, conservación y respaldo de los datos?",
      name: "documentacion_software_aplicativo_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Preguntas de Tipo Radio: Aspectos Incluidos en la Documentación del Software Aplicativo
    {
      type: "radio",
      key: "documentacion_software_aplicativo_modelo_pregunta",
      label: "¿Modelo entidad-relación?",
      name: "documentacion_software_aplicativo_modelo_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_software_aplicativo_diccionario_pregunta",
      label: "¿Diccionario de datos?",
      name: "documentacion_software_aplicativo_diccionario_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_software_aplicativo_manual_validacion_pregunta",
      label: "¿Manual de validación y consistencia?",
      name: "documentacion_software_aplicativo_manual_validacion_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_software_aplicativo_manual_captura_pregunta",
      label: "¿Manual de captura?",
      name: "documentacion_software_aplicativo_manual_captura_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_software_aplicativo_manual_usuario_pregunta",
      label: "¿Manual de usuario?",
      name: "documentacion_software_aplicativo_manual_usuario_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_software_aplicativo_manual_sistema_pregunta",
      label: "¿Manual del sistema?",
      name: "documentacion_software_aplicativo_manual_sistema_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_software_aplicativo_mecanismos_seguridad_pregunta",
      label: "¿Mecanismos de seguridad, mantenimiento, conservación y respaldo?",
      name: "documentacion_software_aplicativo_mecanismos_seguridad_pregunta",
      options: ["Sí", "No"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Documentación del Software Aplicativo
    {
      type: "evidencias",
      key: "documentacion_software_aplicativo_evidencias",
      namePrefix: "documentacion_software_aplicativo",
      fields: [
        { name: "documentacion_software_aplicativo_evidencia1", initialValue: "" },
        { name: "documentacion_software_aplicativo_evidencia2", initialValue: "" },
        { name: "documentacion_software_aplicativo_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Efectividad en el Diseño del Procesamiento de Datos
    {
      type: "sectionTitle",
      key: "efectividad_diseno_procesamiento_datos",
      title: "Efectividad en el Diseño del Procesamiento de Datos",
    },
    
    // Pregunta de Tipo Slider: Efectividad en la Determinación y Documentación de Procesos
    {
      type: "slider",
      key: "efectividad_determinacion_documentacion_procesos_pregunta",
      label: "Califique de 1-5 ¿Qué tan efectiva es la operación estadística en la determinación y documentación de los procesos de procesamiento de datos mencionados?",
      name: "efectividad_determinacion_documentacion_procesos_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Efectividad en el Diseño del Procesamiento de Datos
    {
      type: "evidencias",
      key: "efectividad_diseno_procesamiento_datos_evidencias",
      namePrefix: "efectividad_diseno_procesamiento_datos",
      fields: [
        { name: "efectividad_diseno_procesamiento_datos_evidencia1", initialValue: "" },
        { name: "efectividad_diseno_procesamiento_datos_evidencia2", initialValue: "" },
        { name: "efectividad_diseno_procesamiento_datos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Efectividad en la Infraestructura y Software Aplicativo
    {
      type: "sectionTitle",
      key: "efectividad_infraestructura_software",
      title: "Efectividad en la Infraestructura y Software Aplicativo",
    },
    
    // Pregunta de Tipo Slider: Efectividad en la Infraestructura y Software Aplicativo
    {
      type: "slider",
      key: "efectividad_infraestructura_software_pregunta",
      label: "Califique de 1-5 ¿En qué medida la operación estadística determina la infraestructura tecnológica y define el software aplicativo adecuado para el procesamiento de datos?",
      name: "efectividad_infraestructura_software_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Efectividad en la Infraestructura y Software Aplicativo
    {
      type: "evidencias",
      key: "efectividad_infraestructura_software_evidencias",
      namePrefix: "efectividad_infraestructura_software",
      fields: [
        { name: "efectividad_infraestructura_software_evidencia1", initialValue: "" },
        { name: "efectividad_infraestructura_software_evidencia2", initialValue: "" },
        { name: "efectividad_infraestructura_software_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Documentación y Conservación de Datos
    {
      type: "sectionTitle",
      key: "documentacion_conservacion_datos_procesamiento",
      title: "Documentación y Conservación de Datos",
    },
    
    // Pregunta de Tipo Range: Efectividad en la Determinación y Documentación de Procesos de Procesamiento de Datos
    {
      type: "slider",
      key: "efectividad_documentacion_procesos_procesamiento_pregunta",
      label: "Califique de 1-5 ¿Qué tan efectiva es la operación estadística en la determinación y documentación de los procesos de procesamiento de datos mencionados?",
      name: "efectividad_documentacion_procesos_procesamiento_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Documentación y Conservación de Datos
    {
      type: "evidencias",
      key: "documentacion_conservacion_datos_procesamiento_evidencias",
      namePrefix: "documentacion_conservacion_datos_procesamiento",
      fields: [
        { name: "documentacion_conservacion_datos_procesamiento_evidencia1", initialValue: "" },
        { name: "documentacion_conservacion_datos_procesamiento_evidencia2", initialValue: "" },
        { name: "documentacion_conservacion_datos_procesamiento_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sugerencias para la mejora del Diseño del Procesamiento de los Datos
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_diseno_procesamiento_datos",
      title: "Sugerencias para la mejora del Diseño del Procesamiento de los Datos",
    },
    
    // Pregunta de Tipo Text Area: Sugerencias para la mejora del Diseño del Procesamiento de los Datos
    {
      type: "sugerencias",
      key: "sugerencias_mejora_diseno_procesamiento_datos_pregunta",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de diseño del procesamiento de la recolección o acopio en sus operaciones estadísticas?",
      name: "sugerencias_mejora_diseno_procesamiento_datos_pregunta",
      initialValue: "",
    },
    
    // Subtítulo: Acciones Requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_6_6",
      title: "Acciones requeridas",
    },
    
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_6_6",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  