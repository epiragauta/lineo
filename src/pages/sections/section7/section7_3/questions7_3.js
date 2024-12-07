export const questions7_3 = [
    // Título de la Sección 7.3
    {
      type: "sectionTitle",
      key: "titulo_seccion_7_3",
      title: "Sección 7.3 - Desarrollo del Software aplicativo de la Operación estadística",
    },
  
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_7_3",
      title: "Introducción",
    },
  
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_7_3",
      content:
        "El desarrollo del software aplicativo para la operación estadística, conforme a los lineamientos establecidos en la norma técnica estadística, es un proceso clave para asegurar la eficiencia y precisión en la recolección, procesamiento y difusión de datos. Según lo estipulado en la NTC PE 1000:2020, esta etapa involucra la creación de herramientas digitales que faciliten la implementación de las metodologías estadísticas definidas, permitiendo la automatización de procesos y la integración de los flujos de trabajo. Es crucial que el software sea diseñado de manera flexible y escalable, considerando las necesidades específicas de cada operación estadística y garantizando su compatibilidad con los sistemas existentes, a la vez que se prioriza la calidad y seguridad de los datos.",
    },
  
    // Subtítulo: Desarrollo y Mantenimiento del Software Aplicativo
    {
      type: "sectionTitle",
      key: "desarrollo_mantenimiento_software_aplicativo_7_3",
      title: "Desarrollo y Mantenimiento del Software Aplicativo",
    },
  
    // Pregunta de Tipo Radio: Desarrollo y Mantenimiento del Software Aplicativo
    {
      type: "radio",
      key: "desarrollo_mantenimiento_pregunta_7_3",
      label: "¿La dependencia encargada de la operación estadística desarrolla y mantiene el software aplicativo de acuerdo con las especificaciones del diseño?",
      name: "desarrollo_mantenimiento_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Preguntas de Tipo Radio: Si la respuesta es Sí, el software aplicativo incluye:
    {
      type: "radio",
      key: "software_aplicativo_diseno_muestral_pregunta_7_3",
      label: "a) Diseño Muestral",
      name: "software_aplicativo_diseno_muestral_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "software_aplicativo_recoleccion_datos_pregunta_7_3",
      label: "b) Recolección de Datos",
      name: "software_aplicativo_recoleccion_datos_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "software_aplicativo_transmision_datos_pregunta_7_3",
      label: "c) transmisión de datos",
      name: "software_aplicativo_transmision_datos_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "software_aplicativo_procesamiento_datos_pregunta_7_3",
      label: "d) procesamiento de datos",
      name: "software_aplicativo_procesamiento_datos_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "software_aplicativo_analisis_datos_pregunta_7_3",
      label: "e) análisis de datos",
      name: "software_aplicativo_analisis_datos_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "software_aplicativo_difusion_resultados_pregunta_7_3",
      label: "f) difusión de resultados",
      name: "software_aplicativo_difusion_resultados_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Evidencias Documentales para Desarrollo y Mantenimiento del Software Aplicativo
    {
      type: "evidencias",
      key: "evidencias_desarrollo_mantenimiento_software_aplicativo_7_3",
      namePrefix: "desarrollo_mantenimiento_software_aplicativo_7_3",
      fields: [
        { name: "desarrollo_mantenimiento_evidencia1_7_3", initialValue: "" },
        { name: "desarrollo_mantenimiento_evidencia2_7_3", initialValue: "" },
        { name: "desarrollo_mantenimiento_evidencia3_7_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Implementación de Reglas de Validación y Consistencia
    {
      type: "sectionTitle",
      key: "implementacion_reglas_validacion_consistencia_7_3",
      title: "Implementación de Reglas de Validación y Consistencia",
    },
  
    // Pregunta de Tipo Radio: Implementación de Reglas de Validación y Consistencia
    {
      type: "radio",
      key: "implementacion_reglas_validacion_consistencia_pregunta_7_3",
      label: "¿La dependencia encargada de la operación estadística implementa las reglas de validación y consistencia en el desarrollo del software aplicativo?",
      name: "implementacion_reglas_validacion_consistencia_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Evidencias Documentales para Implementación de Reglas de Validación y Consistencia
    {
      type: "evidencias",
      key: "evidencias_implementacion_reglas_validacion_consistencia_7_3",
      namePrefix: "implementacion_reglas_validacion_consistencia_7_3",
      fields: [
        { name: "implementacion_reglas_validacion_consistencia_evidencia1_7_3", initialValue: "" },
        { name: "implementacion_reglas_validacion_consistencia_evidencia2_7_3", initialValue: "" },
        { name: "implementacion_reglas_validacion_consistencia_evidencia3_7_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Acopio de Datos No Estructurados
    {
      type: "sectionTitle",
      key: "acopio_datos_no_estructurados_7_3",
      title: "Acopio de Datos No Estructurados",
    },
  
    // Pregunta de Tipo Radio: Acopio de Datos No Estructurados
    {
      type: "radio",
      key: "acopio_datos_no_estructurados_pregunta_7_3",
      label: "¿La dependencia encargada de la operación estadística determina el algoritmo de búsqueda o el script para la clasificación y el acopio de datos no estructurados en el software aplicativo?",
      name: "acopio_datos_no_estructurados_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Evidencias Documentales para Acopio de Datos No Estructurados
    {
      type: "evidencias",
      key: "evidencias_acopio_datos_no_estructurados_7_3",
      namePrefix: "acopio_datos_no_estructurados_7_3",
      fields: [
        { name: "acopio_datos_no_estructurados_evidencia1_7_3", initialValue: "" },
        { name: "acopio_datos_no_estructurados_evidencia2_7_3", initialValue: "" },
        { name: "acopio_datos_no_estructurados_evidencia3_7_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Documentación del Software Aplicativo
    {
      type: "sectionTitle",
      key: "documentacion_software_aplicativo_7_3",
      title: "Documentación del Software Aplicativo",
    },
  
    // Pregunta de Tipo Range: Documentación del Software Aplicativo
    {
      type: "range",
      key: "documentacion_software_aplicativo_pregunta_7_3",
      label: "Califique de 1-5. ¿Qué tan efectiva es la dependencia encargada de la operación estadística en documentar los manuales de uso y mantenimiento del software aplicativo?",
      name: "documentacion_software_aplicativo_pregunta_7_3",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
  
    // Evidencias Documentales para Documentación del Software Aplicativo
    {
      type: "evidencias",
      key: "evidencias_documentacion_software_aplicativo_7_3",
      namePrefix: "documentacion_software_aplicativo_7_3",
      fields: [
        { name: "documentacion_software_aplicativo_evidencia1_7_3", initialValue: "" },
        { name: "documentacion_software_aplicativo_evidencia2_7_3", initialValue: "" },
        { name: "documentacion_software_aplicativo_evidencia3_7_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Desarrollo de Módulos Adicionales
    {
      type: "sectionTitle",
      key: "desarrollo_modulos_adicionales_7_3",
      title: "Desarrollo de Módulos Adicionales",
    },
  
    // Pregunta de Tipo Radio: Desarrollo de Módulos Adicionales
    {
      type: "radio",
      key: "desarrollo_modulos_adicionales_pregunta_7_3",
      label: "¿La dependencia encargada de la operación estadística desarrolla módulos adicionales para el entrenamiento, seguimiento, control y evaluación del desempeño del software aplicativo, así como macros para reportes o gráficos?",
      name: "desarrollo_modulos_adicionales_pregunta_7_3",
      options: ["Si", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Checkbox: Desarrollo de Módulos Adicionales
    {
      type: "checkbox",
      key: "desarrollo_modulos_adicionales_checkbox_7_3",
      label: "Si la respuesta es Sí, ¿Qué módulos adicionales se desarrollan? Seleccione todas las opciones que correspondan.",
      name: "desarrollo_modulos_adicionales_checkbox_7_3",
      options: [
        "Entrenamiento",
        "Seguimiento",
        "control",
        "evaluación del desempeño",
        "macros para reportes",
        "gráficos para análisis",
      ],
      initialValue: [],
    },
  
    // Evidencias Documentales para Desarrollo de Módulos Adicionales
    {
      type: "evidencias",
      key: "evidencias_desarrollo_modulos_adicionales_7_3",
      namePrefix: "desarrollo_modulos_adicionales_7_3",
      fields: [
        { name: "desarrollo_modulos_adicionales_evidencia1_7_3", initialValue: "" },
        { name: "desarrollo_modulos_adicionales_evidencia2_7_3", initialValue: "" },
        { name: "desarrollo_modulos_adicionales_evidencia3_7_3", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sugerencias para la mejora del Desarrollo del Software aplicativo de la Operación estadística
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_desarrollo_software_aplicativo_7_3",
      title: "Sugerencias para la mejora del Desarrollo del Software aplicativo de la Operación estadística",
    },
  
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_desarrollo_software_aplicativo_pregunta_7_3",
      label: "Pendiente Pregunta",
      name: "sugerencias_mejora_desarrollo_software_aplicativo_pregunta_7_3",
      initialValue: "",
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_7_3",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_7_3",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  