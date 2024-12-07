export const questions6_10 = [
    // Título de la Sección 6.10
    {
      type: "sectionTitle",
      key: "titulo_seccion_6_10",
      title: "Sección 6.10 - Finalización de Archivos de Datos",
    },
    
    // Subtítulo: Introducción
    {
      type: "sectionTitle",
      key: "introduccion_6_10",
      title: "Introducción",
    },
    
    // Texto de Introducción
    {
      type: "text",
      key: "texto_introduccion_6_10",
      content: "La finalización de archivos de datos es un proceso clave para asegurar que los datos estadísticos sean completos, consistentes y estén listos para su difusión o análisis. De acuerdo con los lineamientos de la NTC PE 1000:2020, esta etapa implica una revisión exhaustiva de los archivos, garantizando que todos los elementos necesarios, como variables, metadatos y registros, estén correctamente definidos y validados. Además, se deben aplicar procedimientos de calidad para verificar la integridad de los datos y resolver cualquier inconsistencia antes de su almacenamiento o publicación, asegurando que cumplan con los estándares requeridos para su uso en operaciones estadísticas futuras.",
    },
    
    // Subtítulo: Determinación de Criterios de Cierre de Archivos de Datos
    {
      type: "sectionTitle",
      key: "determinacion_criterios_cierre_archivos_datos",
      title: "Determinación de Criterios de Cierre de Archivos de Datos",
    },
    
    // Pregunta de Tipo Radio: Determinación y Documentación de Criterios de Cierre
    {
      type: "radio",
      key: "determinacion_documentacion_criterios_cierre_pregunta",
      label: "¿La dependencia encargada de la operación estadística ha determinado y documentado criterios claros para el cierre de los archivos de datos?",
      name: "determinacion_documentacion_criterios_cierre_pregunta",
      options: ["Si", "No"],
      initialValue: "",
    },
    
    // Preguntas de Tipo Radio: Aspectos Incluidos en la Documentación de Criterios de Cierre
    {
      type: "radio",
      key: "documentacion_criterios_cierre_recoleccion_pregunta",
      label: "¿Recolección o acopio de datos?",
      name: "documentacion_criterios_cierre_recoleccion_pregunta",
      options: ["Si", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_criterios_cierre_procesamiento_pregunta",
      label: "¿Procesamiento de datos?",
      name: "documentacion_criterios_cierre_procesamiento_pregunta",
      options: ["Si", "No"],
      initialValue: "",
    },
    {
      type: "radio",
      key: "documentacion_criterios_cierre_analisis_pregunta",
      label: "¿Análisis de datos?",
      name: "documentacion_criterios_cierre_analisis_pregunta",
      options: ["Si", "No"],
      initialValue: "",
    },
    
    // Evidencias Documentales para Determinación de Criterios de Cierre de Archivos de Datos
    {
      type: "evidencias",
      key: "determinacion_criterios_cierre_archivos_evidencias",
      namePrefix: "determinacion_criterios_cierre_archivos",
      fields: [
        { name: "determinacion_criterios_cierre_archivos_evidencia1", initialValue: "" },
        { name: "determinacion_criterios_cierre_archivos_evidencia2", initialValue: "" },
        { name: "determinacion_criterios_cierre_archivos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Aplicación de Cierre a las Fases de Archivos de Datos
    {
      type: "sectionTitle",
      key: "aplicacion_cierre_fases_archivos_datos",
      title: "Aplicación de Cierre a las Fases de Archivos de Datos",
    },
    
    // Pregunta de Tipo Radio: Aplicación del Cierre de Archivos de Datos
    {
      type: "radio",
      key: "aplicacion_cierre_archivos_datos_pregunta",
      label: "¿La dependencia encargada de la operación estadística aplica el cierre de los archivos de datos a las fases de recolección, procesamiento y análisis?",
      name: "aplicacion_cierre_archivos_datos_pregunta",
      options: ["Si", "No"],
      initialValue: "",
    },
    
    // Pregunta de Tipo Checkbox: Métodos para Evitar la Incorporación de Nuevos Datos Durante el Cierre
    {
      type: "checkbox",
      key: "metodos_evitacion_nuevos_datos_pregunta",
      label: "Si la respuesta es Sí, ¿Cómo asegura la dependencia encargada de la operación estadística que se evita la incorporación de nuevos datos durante el cierre?",
      name: "metodos_evitacion_nuevos_datos_pregunta",
      options: [
        "Implementación de controles durante la recolección de datos",
        "Verificación y validación durante el procesamiento de datos",
        "Revisión final antes del análisis de datos",
      ],
      initialValue: [],
    },
    
    // Evidencias Documentales para Aplicación de Cierre a las Fases de Archivos de Datos
    {
      type: "evidencias",
      key: "aplicacion_cierre_fases_archivos_datos_evidencias",
      namePrefix: "aplicacion_cierre_fases_archivos_datos",
      fields: [
        { name: "aplicacion_cierre_fases_archivos_datos_evidencia1", initialValue: "" },
        { name: "aplicacion_cierre_fases_archivos_datos_evidencia2", initialValue: "" },
        { name: "aplicacion_cierre_fases_archivos_datos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Documentación del Cierre de Archivos de Datos
    {
      type: "sectionTitle",
      key: "documentacion_cierre_archivos_datos",
      title: "Documentación del Cierre de Archivos de Datos",
    },
    
    // Pregunta de Tipo Range: Efectividad en la Documentación del Cierre de Archivos de Datos
    {
      type: "slider",
      key: "efectividad_documentacion_cierre_archivos_pregunta",
      label: "Califique de 1-5. ¿Qué tan efectiva es la dependencia encargada de la operación estadística en documentar el cierre de los archivos de datos?",
      name: "efectividad_documentacion_cierre_archivos_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Documentación del Cierre de Archivos de Datos
    {
      type: "evidencias",
      key: "documentacion_cierre_archivos_datos_evidencias",
      namePrefix: "documentacion_cierre_archivos_datos",
      fields: [
        { name: "documentacion_cierre_archivos_datos_evidencia1", initialValue: "" },
        { name: "documentacion_cierre_archivos_datos_evidencia2", initialValue: "" },
        { name: "documentacion_cierre_archivos_datos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Eficiencia en la Implementación del Cierre de Archivos
    {
      type: "sectionTitle",
      key: "eficiencia_implementacion_cierre_archivos",
      title: "Eficiencia en la Implementación del Cierre de Archivos",
    },
    
    // Pregunta de Tipo Range: Eficiencia en la Implementación del Cierre de Archivos
    {
      type: "slider",
      key: "eficiencia_implementacion_cierre_archivos_pregunta",
      label: "Califique de 1-5. ¿En qué medida la dependencia encargada de la operación estadística implementa efectivamente el cierre de archivos de datos para las fases de recolección, procesamiento y análisis?",
      name: "eficiencia_implementacion_cierre_archivos_pregunta",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 3,
    },
    
    // Evidencias Documentales para Eficiencia en la Implementación del Cierre de Archivos
    {
      type: "evidencias",
      key: "eficiencia_implementacion_cierre_archivos_evidencias",
      namePrefix: "eficiencia_implementacion_cierre_archivos",
      fields: [
        { name: "eficiencia_implementacion_cierre_archivos_evidencia1", initialValue: "" },
        { name: "eficiencia_implementacion_cierre_archivos_evidencia2", initialValue: "" },
        { name: "eficiencia_implementacion_cierre_archivos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Prevención de Reprocesos
    {
      type: "sectionTitle",
      key: "prevencion_reprocesos",
      title: "Prevención de Reprocesos",
    },
    
    // Pregunta de Tipo Text Area: Prevención de Reprocesos
    {
      type: "textArea",
      key: "prevencion_reprocesos_pregunta",
      label: "¿Cómo evalúa la dependencia encargada de la operación estadística la efectividad del cierre de archivos de datos en la prevención de reprocesos debido a la incorporación de nuevos datos?",
      name: "prevencion_reprocesos_pregunta",
      initialValue: "",
    },
    
    // Evidencias Documentales para Prevención de Reprocesos
    {
      type: "evidencias",
      key: "prevencion_reprocesos_evidencias",
      namePrefix: "prevencion_reprocesos",
      fields: [
        { name: "prevencion_reprocesos_evidencia1", initialValue: "" },
        { name: "prevencion_reprocesos_evidencia2", initialValue: "" },
        { name: "prevencion_reprocesos_evidencia3", initialValue: "" },
      ],
    },
    
    // Subtítulo: Sugerencias para la mejora de la Finalización de Archivos de Datos
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_finalizacion_archivos_datos",
      title: "Sugerencias para la mejora de la Finalización de Archivos de Datos",
    },
    
    // Pregunta de Tipo Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_finalizacion_archivos_datos_pregunta",
      label: "¿Tiene alguna sugerencia o comentario sobre cómo la entidad podría mejorar el proceso de finalización de archivos de datos en sus operaciones estadísticas?",
      name: "sugerencias_mejora_finalizacion_archivos_datos_pregunta",
      initialValue: "",
    },
    
    // Subtítulo: Acciones Requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_6_10",
      title: "Acciones requeridas",
    },
    
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_6_10",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  