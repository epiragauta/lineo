export const questions7_1 = [
  
    // Subtítulo: Conformación y Mantenimiento del Marco Estadístico
    {
      type: "sectionTitle",
      key: "conformacion_mantenimiento_marco_estadistico_7_1",
      title: "Conformación y Mantenimiento del Marco Estadístico",
    },
  
    // Pregunta de Tipo Radio 1
    {
      type: "radio",
      key: "conformacion_mantenimiento_pregunta1_7_1",
      label: "¿La operación estadística conforma, mantiene y actualiza el marco estadístico conforme al diseño especificado?",
      name: "conformacion_mantenimiento_pregunta1_7_1",
      options: ["Sí", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Radio 2
    {
      type: "radio",
      key: "conformacion_mantenimiento_pregunta2_7_1",
      label: "Si la respuesta es Sí, ¿el marco estadístico incluye la totalidad de las unidades que conforman la población objetivo?",
      name: "conformacion_mantenimiento_pregunta2_7_1",
      options: ["Sí", "No"],
      initialValue: "",
    },
  
    // Pregunta de Tipo Radio 3
    {
      type: "radio",
      key: "conformacion_mantenimiento_pregunta3_7_1",
      label: "¿Las unidades están identificadas por medio de un código geográfico (geo-código) asociado a la DIVIPOLA o a la codificación del Marco Geoestadístico Nacional?",
      name: "conformacion_mantenimiento_pregunta3_7_1",
      options: ["Sí", "No"],
      initialValue: "",
    },
  
    // Evidencias Documentales para Conformación y Mantenimiento del Marco Estadístico
    {
      type: "evidencias",
      key: "evidencias_conformacion_mantenimiento_7_1",
      namePrefix: "conformacion_mantenimiento_7_1",
      fields: [
        { name: "conformacion_mantenimiento_evidencia1_7_1", initialValue: "" },
        { name: "conformacion_mantenimiento_evidencia2_7_1", initialValue: "" },
        { name: "conformacion_mantenimiento_evidencia3_7_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Cumplimiento del Diseño del Marco Estadístico
    {
      type: "sectionTitle",
      key: "cumplimiento_diseno_marco_estadistico_7_1",
      title: "Cumplimiento del Diseño del Marco Estadístico",
    },
  
    // Pregunta de Tipo Text Area
    {
      type: "textarea",
      key: "cumplimiento_diseno_marco_estadistico_pregunta_7_1",
      label: "¿Cómo evalúa la operación estadística el cumplimiento del diseño del marco estadístico, incluyendo la identificación de la población objetivo y el uso de códigos geográficos adecuados?",
      name: "cumplimiento_diseno_marco_estadistico_pregunta_7_1",
      initialValue: "",
    },
  
    // Evidencias Documentales para Cumplimiento del Diseño del Marco Estadístico
    {
      type: "evidencias",
      key: "evidencias_cumplimiento_diseno_marco_estadistico_7_1",
      namePrefix: "cumplimiento_diseno_marco_estadistico_7_1",
      fields: [
        { name: "cumplimiento_diseno_marco_estadistico_evidencia1_7_1", initialValue: "" },
        { name: "cumplimiento_diseno_marco_estadistico_evidencia2_7_1", initialValue: "" },
        { name: "cumplimiento_diseno_marco_estadistico_evidencia3_7_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Documentación y Conservación del Marco Estadístico
    {
      type: "sectionTitle",
      key: "documentacion_conservacion_marco_estadistico_7_1",
      title: "Documentación y Conservación del Marco Estadístico",
    },
  
    // Pregunta de Tipo Range
    {
      type: "slider",
      key: "documentacion_conservacion_marco_estadistico_pregunta_7_1",
      label: "Califique de 1-5. ¿Qué tan efectiva es la operación estadística en documentar, conservar y actualizar el marco estadístico?",
      name: "documentacion_conservacion_marco_estadistico_pregunta_7_1",
      min: 1,
      max: 5,
      step: 1,
      initialValue: 2,
    },
  
    // Evidencias Documentales para Documentación y Conservación del Marco Estadístico
    {
      type: "evidencias",
      key: "evidencias_documentacion_conservacion_marco_estadistico_7_1",
      namePrefix: "documentacion_conservacion_marco_estadistico_7_1",
      fields: [
        { name: "documentacion_conservacion_marco_estadistico_evidencia1_7_1", initialValue: "" },
        { name: "documentacion_conservacion_marco_estadistico_evidencia2_7_1", initialValue: "" },
        { name: "documentacion_conservacion_marco_estadistico_evidencia3_7_1", initialValue: "" },
      ],
    },
  
    // Subtítulo: Sugerencias para la mejora del para Marco Estadístico
    {
      type: "sectionTitle",
      key: "sugerencias_mejora_marco_estadistico_7_1",
      title: "Sugerencias para la mejora del para Marco Estadístico",
    },
  
    // Pregunta de Tipo Text Area: Sugerencias
    {
      type: "sugerencias",
      key: "sugerencias_mejora_marco_estadistico_pregunta_7_1",
      label: "Pendiente Pregunta",
      name: "sugerencias_mejora_marco_estadistico_pregunta_7_1",
      initialValue: "",
    },
  
    // Subtítulo: Acciones requeridas
    {
      type: "sectionTitle",
      key: "acciones_requeridas_7_1",
      title: "Acciones requeridas",
    },
  
    // Componente de Acciones Requeridas
    {
      type: "accionesRequeridas",
      key: "acciones_requeridas_7_1",
      fields: [
        { name: "accion", initialValue: "" },
        { name: "responsableSNS", initialValue: "" },
        { name: "fechaCumplimiento", initialValue: "" },
      ],
    },
  ];
  